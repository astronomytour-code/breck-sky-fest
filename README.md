# Breck Sky Fest

Guest-facing Astro website for the first Breck Sky Fest, planned for November 2026 in Breckenridge, Colorado. Dates, venues, prices, and proposed partner activities remain explicitly provisional.

## Development

Use Node 22.12+ (Node 24 also works).

```sh
npm ci
npm run dev
npm run build
```

Cloudflare Workers serves the static `dist/` output using the existing `wrangler.jsonc`. The existing GitHub-to-Cloudflare integration deploys `main`. This change preserves both existing custom-domain routes and the `breckskyfest.com` canonical domain. It does not change DNS or redirects.

## Content

- `src/data/festival.ts`: contact details, the ten proposed/planned experiences, their status and practical details, and visitor FAQs.
- `src/pages/program/[slug].astro`: all individual experience pages, generated from the content above.
- `src/components/Sponsors.astro`: Gold (TBA), Silver (Town of Breckenridge), and Bronze (AstroTours.org).
- `src/pages/`: home, program, visitor guide, partner opportunities, sponsors, about, photo gallery, contact, and 404.
- `src/styles/global.css`: responsive festival design, keyboard focus, and reduced-motion handling.
- `PHOTO-CREDITS.md`: provenance for all supplied photography.

Before confirming an experience, update its status, date, time, venue, admission, audience, access, and weather arrangements together. Booking buttons should be added only when a real booking destination is available. Do not add Event structured data until the event dates and location are confirmed.

The contact and update links open an email draft to Luke. They do not send or store a message automatically. There is no simulated newsletter subscription or form backend. The program filters, mobile navigation, gallery viewer, and visitor FAQs work without a framework hydration bundle. Core content and links remain usable without JavaScript.

Fonts are bundled locally through Fontsource. Images are optimized WebP files from the user-provided AstroTours collection. Photos illustrate previous AstroTours activities, not a previous Breck Sky Fest or confirmed festival locations.

## Reference and visitor resources

- Broad information architecture reference: https://www.shinjumatsuri.com.au/ (program, visit, get involved, sponsors, gallery). All festival copy is original.
- Official visitor guide: https://gobreck.com/
- Local transport: https://www.breckfreeride.com/
- Road conditions: https://www.cotrip.org/

Sources reviewed September 2026. No live transport schedule, festival lodging offer, lift access, or refund promise is implied.

Website source for Breck Sky Fest, Breckenridge's astronomy and dark-sky festival.

Primary site: https://breckskyfest.com
