import { DurableObject } from 'cloudflare:workers';
import { adminKeyDigest } from './admin-auth.js';
const json=(data,status=200)=>Response.json(data,{status,headers:{'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
async function digest(value){return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(value)))).map(x=>x.toString(16).padStart(2,'0')).join('');}
export class FestivalRsvps extends DurableObject {
  constructor(ctx,env){super(ctx,env);this.sql=ctx.storage.sql;this.sql.exec('CREATE TABLE IF NOT EXISTS rsvps (id TEXT PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL, people INTEGER NOT NULL, created_at TEXT NOT NULL)');if(!this.sql.exec('PRAGMA table_info(rsvps)').toArray().some(c=>c.name==='accessibility'))this.sql.exec("ALTER TABLE rsvps ADD COLUMN accessibility TEXT NOT NULL DEFAULT ''");if(!this.sql.exec('PRAGMA table_info(rsvps)').toArray().some(c=>c.name==='phone'))this.sql.exec("ALTER TABLE rsvps ADD COLUMN phone TEXT NOT NULL DEFAULT ''");this.sql.exec('CREATE TABLE IF NOT EXISTS limits (ip_hash TEXT PRIMARY KEY, window INTEGER NOT NULL, count INTEGER NOT NULL)');}
  async fetch(request){
    if(request.method==='GET')return json({rows:this.sql.exec('SELECT id,name,email,people,created_at,accessibility,phone FROM rsvps ORDER BY created_at DESC').toArray()});
    const {name,email,people,ipHash,accessibility='',phone=''}=await request.json();const now=Date.now();const window=Math.floor(now/3600000);const prior=this.sql.exec('SELECT window,count FROM limits WHERE ip_hash=?',ipHash).toArray()[0];
    if(prior?.window===window&&prior.count>=20)return json({error:'Too many submissions. Please try again later.'},429);
    const count=prior?.window===window?prior.count+1:1;
    this.sql.exec('DELETE FROM limits WHERE window < ?',window-1);
    this.sql.exec('INSERT INTO limits(ip_hash,window,count) VALUES(?,?,?) ON CONFLICT(ip_hash) DO UPDATE SET window=excluded.window,count=excluded.count',ipHash,window,count);
    // A retry of the same RSVP within five minutes returns its saved reference.
    const duplicate=this.sql.exec('SELECT id FROM rsvps WHERE email=? AND name=? AND people=? AND accessibility=? AND phone=? AND created_at>? ORDER BY created_at DESC LIMIT 1',email,name,people,accessibility,phone,new Date(now-300000).toISOString()).toArray()[0];
    if(duplicate)return json({id:duplicate.id});
    const id=crypto.randomUUID();this.sql.exec('INSERT INTO rsvps(id,name,email,people,created_at,accessibility,phone) VALUES(?,?,?,?,?,?,?)',id,name,email,people,new Date(now).toISOString(),accessibility,phone);return json({id},201);
  }
}
export default {
  async fetch(request,env){
    const url=new URL(request.url);const hostname=url.hostname.toLowerCase();
    if(['brecksky.com','www.brecksky.com','www.breckskyfest.com'].includes(hostname)||(hostname==='breckskyfest.com'&&url.protocol!=='https:')){url.protocol='https:';url.hostname='breckskyfest.com';url.port='';return Response.redirect(url.toString(),301);}
    if(['/program/sky-day','/program/sky-day/'].includes(url.pathname)){url.pathname='/program/community-stargazing/';return Response.redirect(url.toString(),301);}
    if(url.pathname==='/api/admin/rsvps'){
      if(request.method!=='GET')return json({error:'Method not allowed.'},405);
      const key=request.headers.get('Authorization')?.replace(/^Bearer /,'')||'';
      const expected=env.RSVP_ADMIN_KEY?await digest(env.RSVP_ADMIN_KEY):adminKeyDigest;
      if(!key||key.length>256||await digest(key)!==expected)return json({error:'The access key is incorrect.'},401);
      const rows=[];for(const [event,id] of [['Frisco · 11/27','frisco-2026-11-27'],['BOEC public stargazing · 11/11','boec-2026-11-11']]){const response=await env.RSVP_STORE.get(env.RSVP_STORE.idFromName(id)).fetch('https://rsvp.internal/');const data=await response.json();rows.push(...data.rows.map(row=>({...row,event})));}return json({rows:rows.sort((a,b)=>b.created_at.localeCompare(a.created_at))});
    }
    if(url.pathname==='/api/rsvp'){
      if(request.method!=='POST')return json({error:'Method not allowed.'},405);
      if(request.headers.get('Origin')!==url.origin)return json({error:'Please submit the form from the festival website.'},403);
      if(Number(request.headers.get('Content-Length'))>8192)return json({error:'Submission too large.'},413);
      try{
        const raw=await request.text();if(new TextEncoder().encode(raw).byteLength>8192)return json({error:'Submission too large.'},413);
        const form=await new Request(request.url,{method:'POST',headers:{'Content-Type':request.headers.get('Content-Type')||''},body:raw}).formData();
        const name=String(form.get('name')||'').trim();const email=String(form.get('email')||'').trim().toLowerCase();const phone=String(form.get('phone')||'').trim();if(phone.length>50||(phone&&!/^[+\d\s().xX#-]+$/.test(phone)))return json({error:'Please enter a valid phone number, or leave the optional phone field blank.'},400);const people=Number(form.get('people'));const event=String(form.get('event')||'frisco');const accessibility=event==='boec'?String(form.get('accessibility')||'').trim():'';if(!['frisco','boec'].includes(event)||accessibility.length>2000)return json({error:'Please select a valid event and keep accessibility notes under 2,000 characters.'},400);
        if(form.get('website'))return json({error:'Unable to save your RSVP. Please contact the festival.'},400);
        if(!name||name.length>120||email.length>254||! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||!Number.isInteger(people)||people<1||people>500)return json({error:'Please enter your name, a valid email address, and a whole-number group size from 1 to 500.'},400);
        const ipHash=await digest((request.headers.get('CF-Connecting-IP')||'local')+new Date().toISOString().slice(0,10));
        const saved=await env.RSVP_STORE.get(env.RSVP_STORE.idFromName(event==='boec'?'boec-2026-11-11':'frisco-2026-11-27')).fetch('https://rsvp.internal/',{method:'POST',body:JSON.stringify({name,email,people,ipHash,accessibility,phone})});
        if(request.headers.get('Accept')?.includes('application/json')||!saved.ok)return saved;
        const data=await saved.json();return new Response(`<!doctype html><html lang="en"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>RSVP saved | Breck Sky Fest</title><link rel="stylesheet" href="/styles.css"><main style="max-width:650px;margin:60px auto;padding:24px"><h1>Your RSVP is saved.</h1><p>${event==='boec'?'Public accessible stargazing with BOEC · Wednesday, November 11, 2026 · Evening time and location: To Be Announced.':'Frisco Historic Park · Friday, November 27, 2026 · 5:30–7:30 PM MST.'}</p><p>${event==='boec'?'We’ll use your email for program details, accessibility follow-up, and important weather updates.':'Drop in anytime during the evening. We’ll use your email for important weather updates.'}</p><p>Reference: ${data.id}</p><a href="/program/${event==='boec'?'accessible-astronomy-boec':'frisco-historic-park-stargazing'}/">Back to event details</a></main></html>`,{headers:{'Content-Type':'text/html;charset=utf-8','Cache-Control':'no-store'}});
      }catch{return json({error:'Your RSVP could not be saved. Please try again or email Luke@AstroTours.org.'},503);}
    }
    return env.ASSETS.fetch(request);
  }
};
