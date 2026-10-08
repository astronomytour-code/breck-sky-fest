# Breck Sky Fest

Guest-facing Astro website for the first Breckenridge Sky Festival in November 2026 in Breckenridge, Colorado. Final dates, venues, registration details, and proposed partner activities remain explicitly provisional.

## Development

Use Node 22.12+ (Node 24 also works).

```sh
npm ci
npm run dev
npm run build
```

Cloudflare Workers serves the static `dist/` output using the existing `wrangler.jsonc`. The existing GitHub-to-Cloudflare integration deploys `main`. Cloudflare Workers Builds publishes `main`. `breckskyfest.com` is the canonical site; `brecksky.com` and both `www` hostnames route to the Worker and redirected to `https://breckskyfest.com` while preserving path and query string.

GitHub Actions validates the install and production build on pushes and pull requests. It does not run a second deployment or require Cloudflare secrets in GitHub. Cloudflare Workers Builds owns publishing; check its build log separately if a deployment reports failure.

## Content

- `src/data/festival.ts`: contact details, the ten proposed/planned experiences, their status and practical details, and visitor FAQs.
- `src/pages/program/[slug].astro`: all individual experience pages, generated from the content above.
- `src/components/Sponsors.astro`: Town of Breckenridge is the Intergalactic founding grant supporter. The roster shows occupied levels only; all four sponsorship opportunities remain described on the sponsors page. BOEC, Frisco Historic Park, and Beaver Run receive Orbital community recognition. AstroTours.org has a compact organizer credit. Orbital accepts financial support or approved community contributions; significant in-kind support may qualify for higher levels by agreement. No contribution amounts are displayed publicly.
- `src/pages/`: home, program, visitor guide, partner opportunities, sponsors, about, photo gallery, contact, and 404.
- `src/styles/global.css`: responsive festival design, keyboard focus, and reduced-motion handling.
- `PHOTO-CREDITS.md`: provenance for all supplied photography.

Before confirming an experience, update its status, date, time, venue, admission, audience, access, and weather arrangements together. Booking buttons should be added only when a real booking destination is available. Do not add Event structured data until the event dates and location are confirmed.

Contact links open an email draft to Luke. The site does not use an email-update signup; final festival details are posted on the site. There is no simulated newsletter subscription or form backend. The program filters, mobile navigation, gallery viewer, and visitor FAQs work without a framework hydration bundle. Core content and links remain usable without JavaScript.

Fonts are bundled locally through Fontsource. Images are optimized WebP files from the user-provided AstroTours collection. Photos illustrate previous AstroTours activities, not a previous Breck Sky Fest or confirmed festival locations.

## Reference and visitor resources

- Broad information architecture reference: https://www.shinjumatsuri.com.au/ (program, visit, get involved, sponsors, gallery). All festival copy is original.
- Official visitor guide: https://gobreck.com/
- Local transport: https://www.breckfreeride.com/
- Road conditions: https://www.cotrip.org/

Sources reviewed September 2026. No live transport schedule, festival lodging offer, lift access, or refund promise is implied.

Website source for Breck Sky Fest, Breckenridge's astronomy and dark-sky festival.

Primary site: https://breckskyfest.com

## Confirmed 2026 schedule and RSVPs

The home and program pages share `FestivalSchedule.astro`. Dated events are kept separate from proposals. The existing community-stargazing route holds November 28 daytime and evening programming; the older sky-day route redirects there to retain existing links.

Free Frisco RSVP: `/rsvp/frisco/`. Submissions are stored persistently in the Cloudflare Worker’s SQLite-backed `FestivalRsvps` Durable Object, bound as `RSVP_STORE`. Wrangler creates the namespace through the `frisco-rsvps-v1` migration when deployed. Only the name, email, group size, timestamp, and reference are stored as attendance records. Short-lived hashed IP rate limits expire as subsequent requests clean them up. No payment or email delivery service is connected. The confirmation is shown on the website after saving; weather outreach is manual using the CSV export.

Organizer view: `/admin/rsvps/`, excluded from indexing. Enter the private access key supplied to the organizer. Only its SHA-256 digest is committed in `worker/admin-auth.js`; the key is never placed in a URL or browser storage. Optionally set the Cloudflare secret `RSVP_ADMIN_KEY` to rotate/override it. The admin page lists submissions and total attendance and downloads a CSV. No attendee data is included in static builds or public page responses.

Verify the first production deployment creates the Durable Object binding before accepting RSVPs. `wrangler dev` tests use a separate local database. Never commit the local `.wrangler` state.

Domain and route attachments are managed in Cloudflare. The Wrangler config intentionally omits `routes`, which preserves the existing dashboard-managed domains and DNS records on deployment. This avoids custom-domain DNS conflict 100117 for the already configured BreckSky.com redirect.
