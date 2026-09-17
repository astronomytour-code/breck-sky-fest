import {experiences} from '../data/festival';
export function GET(){
  const paths=['/','/program/','/visit/','/get-involved/','/sponsors/','/about/','/gallery/','/contact/',...experiences.map(e=>`/program/${e.slug}/`)];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path=>`<url><loc>https://breckskyfest.com${path}</loc></url>`).join('')}</urlset>`,{headers:{'Content-Type':'application/xml'}});
}
