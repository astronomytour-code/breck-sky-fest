export const festival = {
  name: 'Breckenridge Sky Festival',
  shortName: 'Breck Sky Fest',
  year: '2026',
  timing: 'November 2026',
  location: 'Breckenridge, Colorado',
  email: 'Luke@AstroTours.org',
  description: 'Breckenridge Sky Festival is a Summit County dark-sky celebration centered in Breckenridge, Colorado. Telescopes, hands-on science, art, and time together under the stars. November 11–30, 2026, in Breckenridge and Frisco. Explore the festival schedule, free stargazing RSVPs, and partner events.',
};

export function emailLink(subject: string, body = '') {
  return `mailto:${festival.email}?subject=${encodeURIComponent(`Breck Sky Fest: ${subject}`)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;
}

export type Experience = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  filters: string[];
  accent: string;
  image?: string;
  alt?: string;
  icon: string;
  status: string;
  summary: string;
  description: string[];
  highlights: string[];
  audience: string;
  venue?: string;
  admission: string;
  duration: string;
  practical: string;
  opportunity: string;
  date?: string;
  time?: string;
  past?: boolean;
  canceled?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
};

export const boecStargazingVenue = 'BOEC Wilderness Campus · 300 Snowy Ridge Road';
export const friscoStargazingVenue = 'Frisco Historic Park · 120 E. Main St., Frisco';
export const friscoWeather = 'About 57% cloud cover is forecast, so telescope views may be limited or unavailable. Expect around 29°F and bring extra warm layers.';
export const saturdayWeather = 'Snow and heavy cloud cover prompted the Saturday schedule change.';
export const mondayWeather = 'Conditions can change and telescope viewing depends on clear breaks in the clouds. Please check your RSVP email for weather updates before heading out.';
const otherWorldsAdmission = '$10 adults · $15 ages 4–18 · free for children under 4 and eligible SNAP/Medicaid guests';

export const experiences: Experience[] = [
  {
    slug: 'chelsea-kaiah-open-studio', title: 'Open Studio: Chelsea Kaiah', subtitle: 'Visit Breck Create’s November Artist in Residence', category: 'Arts & open studio', filters: ['arts', 'day'], accent: 'green', icon: 'spark', status: 'Past event · November 22', past: true,
    date: 'Sunday, November 22, 2026', time: '1:00–5:00 PM MST', venue: 'Tin Shop · Breckenridge Arts District',
    ctaHref: 'https://breckcreate.org/events/open-studio-chelsea-kaiah', ctaLabel: 'Breck Create event information',
    summary: 'Visit Artist in Residence Chelsea Kaiah at the Tin Shop to see the work she has been creating during her November residency. Her practice connects traditional materials and techniques with Native rights, sustainability, resilience, and healing.',
    description: ['Come see what Breck Create Artist in Residence Chelsea Kaiah has been working on in her studio during her stay in November. Visit the Tin Shop on Sunday, November 22, from 1 to 5 PM.', 'A passionate activist for Native rights, awareness, and sustainability, Chelsea adapts traditional materials and techniques, including pine needle weaving, porcupine quilling, and hide work, to explore resilience, mental health, system reformation, and means of healing.'],
    highlights: ['Visit Chelsea Kaiah’s studio during her November residency', 'Explore traditional materials and techniques in a contemporary art practice', 'Themes of Native rights, sustainability, resilience, and healing', 'Free open studio at the Tin Shop · 1–5 PM'],
    audience: 'Open studio visitors', admission: 'Free', duration: 'Four-hour open studio window',
    practical: 'Sunday, November 22, 1–5 PM MST at the Tin Shop in the Breckenridge Arts District. See Breck Create’s event page for host information and contact the host with access or participation questions.',
    opportunity: 'Hosted by Breck Create and included in the Breck Sky Fest program.',
  },
  {
    slug: 'bob-ross-style-painting-galaxies', title: 'Bob Ross Style Painting: Galaxies', subtitle: 'A galaxy-inspired painting evening with Breck Create', category: 'Arts & making', filters: ['arts', 'night'], accent: 'purple', icon: 'stars', status: 'Past event · November 25', past: true,
    date: 'Wednesday, November 25, 2026', time: '6:00–8:30 PM MST', venue: 'Randall Barn · Breckenridge Arts District',
    ctaHref: 'https://tickets.breckcreate.org/Online/seatSelect.asp?createBO::WSmap=1&BOparam::WSmap::loadBestAvailable::performance_ids=94E3AF9D-C94C-4C87-A546-7DA3C5A32BA6', ctaLabel: 'Book with Breck Create',
    summary: 'Create a galaxy-inspired painting in a Bob Ross–style class at Randall Barn. Breck Create brings an evening of art and cosmic inspiration to the festival on November 25, from 6 to 8:30 PM.',
    description: ['Join Breck Create at Randall Barn for Bob Ross Style Painting: Galaxies, a galaxy-inspired painting class during Breck Sky Fest.', 'The special festival session takes place on Wednesday, November 25, from 6 to 8:30 PM. Book this festival session directly with Breck Create.'],
    highlights: ['Galaxy-inspired Bob Ross–style painting', 'Hosted by Breck Create at Randall Barn', 'Wednesday, November 25 · 6–8:30 PM', 'See Breck Create for pricing and participation details'],
    audience: 'Ages 17 and up · all experience levels', admission: '$61.50 for nonmembers including fees · see Breck Create for current member pricing', duration: '2.5 hours',
    practical: 'Wednesday, November 25, 6–8:30 PM MST at Randall Barn in the Breckenridge Arts District. See Breck Create’s booking page for pricing and contact Breck Create about age requirements or accessibility.',
    opportunity: 'Hosted by Breck Create as part of Breck Sky Fest.',
  },
  {
    slug: 'full-moon-hike-with-pride', image: 'fdrd-full-moon-pride', alt: 'Full Moon framed by bare tree branches with a rainbow across a blue night sky', title: 'Trail Tuesdays: Full Moon Hike with Pride at Gold Hill', subtitle: 'An educational and social hike with FDRD & Mountain Pride', category: 'Night hikes', filters: ['night'], accent: 'purple', icon: 'moon', status: 'Past event · November 24', past: true,
    date: 'Tuesday, November 24, 2026', time: '5:30–7:30 PM MST', venue: 'Gold Hill Trailhead · Breckenridge',
    ctaHref: 'https://fdrd.app.neoncrm.com/nx/portal/neonevents/events?path=%2Fportal%2Fevents%2F43813', ctaLabel: 'Register with FDRD',
    summary: 'Join Friends of the Dillon Ranger District and Mountain Pride for a free educational and social full-moon hike from Gold Hill Trailhead. All are welcome! Bring a headlamp and a thermos for hot drinks before departure.',
    description: ['Join Friends of the Dillon Ranger District (FDRD) and Mountain Pride for an educational and social hike. All are welcome! This event is free and open to the public.', 'Part of the partners’ Trail Tuesdays series on the last Tuesday of each month, November’s hike meets at Gold Hill Trailhead in Breckenridge. Enjoy time outdoors together under the glow of the full moon, followed by a post-hike social hour.', 'Bring a headlamp and a thermos to fill with hot drinks before the group departs. Register directly with FDRD for event information and updates.'],
    highlights: ['Full-moon hike with FDRD and Mountain Pride', 'Free and open to the public · all are welcome', 'Meet at Gold Hill Trailhead in Breckenridge', 'Hot drinks before departure and a post-hike social hour'],
    audience: 'All are welcome · open to the public', admission: 'Free · register directly with FDRD', duration: '5:30–7:30 PM event window',
    practical: 'Meet at Gold Hill Trailhead in Breckenridge. Bring a headlamp and a thermos to fill with hot drinks before departure. See FDRD’s registration page for arrival details and updates, and contact FDRD about trail access or equipment needs.',
    opportunity: 'Hosted by Friends of the Dillon Ranger District and Mountain Pride as part of Trail Tuesdays, included in the Breck Sky Fest program.',
  },
  {
    slug: 'night-sky-hike-fdrd', image: 'fdrd-night-sky-hike', alt: 'Hikers on a snowy forest trail beneath a bright Moon', title: 'Night Sky Hike with FDRD', subtitle: 'A leisurely hike or snowshoe tour beneath the night sky', category: 'Night hikes', filters: ['night'], accent: 'blue', icon: 'mountain', status: 'Past event · November 27', past: true,
    date: 'Friday, November 27, 2026', time: '7:30–9:30 PM MST', venue: 'Miners Creek Trailhead · Frisco',
    ctaHref: 'https://fdrd.app.neoncrm.com/nx/portal/neonevents/events?path=%2Fportal%2Fevents%2F62734', ctaLabel: 'Register with FDRD',
    summary: 'Explore the night sky on a leisurely, educational hike or snowshoe tour with Friends of the Dillon Ranger District. Take in sweeping views of Peak 1 and Rainbow Lake, with hot drinks before setting off.',
    description: ['Join Friends of the Dillon Ranger District on a leisurely paced, two-hour hike or snowshoe tour under the night sky. During this educational tour, take in the sweeping views of Peak 1 and Rainbow Lake.', 'Before setting off, fill your thermos with hot drinks. The tour will last roughly two hours, depending on weather conditions and group morale, with a planned return to the parking lot by 9:30 PM.', 'Register directly with FDRD. The hike takes place on Miners Creek Trailhead. Check the host’s registration information for arrival details, equipment requirements, and event updates.'],
    highlights: ['Leisurely, educational hike or snowshoe tour', 'Night-sky views around Peak 1 and Rainbow Lake', 'Fill your thermos with hot drinks before departure', 'Plan to return to the parking lot by 9:30 PM'],
    audience: 'All are welcome', admission: 'Register directly with FDRD · see the host’s registration page for participation details', duration: 'Roughly 2 hours, depending on weather conditions and the group',
    practical: 'Meet at Miners Creek Trailhead in Frisco. Bring a headlamp, warm layers, and a thermos or reusable mug. Check with FDRD about trail conditions and whether to bring snowshoes or traction. Contact FDRD if you need to borrow snowshoes.',
    opportunity: 'Hosted by Friends of the Dillon Ranger District as part of the Breck Sky Fest program.',
  },
  {
    slug: 'reach-for-the-stars-storytime', title: 'Storytime at Other Worlds with Breck Sky Fest', subtitle: 'Stories, movement, and a fun craft', category: 'Storytime & play', filters: ['family', 'day', 'arts'], accent: 'green', icon: 'stars', status: 'Past event · November 25', past: true,
    date: 'Wednesday, November 25, 2026', time: '10:30 AM–11:30 AM MST', venue: 'Other Worlds exhibition · Old Masonic Hall · 136 S. Main St., Breckenridge',
    ctaHref: 'https://breckcreate.org/events/storytime', ctaLabel: 'Purchase Storytime tickets',
    summary: 'Bring your little explorers, ages 0–8, for an interactive Storytime inspired by the wonders of nature and themed for Breck Sky Fest. Enjoy a book, movement activity, and fun craft, then keep exploring through art and play.',
    description: ['Bring your little explorers for an interactive Storytime inspired by the wonders of nature. Each week features a different book, movement activity, and fun craft. This special program will be themed to match Breck Sky Fest.', 'Before or after Storytime, explore the interactive art within the Other Worlds exhibition. Enjoy interactive games, hands-on creativity, and engaging activities.', 'Continue the fun at Mountain Top Explorium with half-price day passes after Storytime. Just tell the Explorium team the story of the day!'],
    highlights: ['Interactive Storytime with a book, movement activity, and fun craft', 'Explore interactive art in the Other Worlds exhibition before or after Storytime', 'Interactive games, hands-on creativity, and engaging activities', 'Half-price Mountain Top Explorium day passes after Storytime: tell the team the story of the day'],
    audience: 'Little explorers ages 0–8 and their families', admission: otherWorldsAdmission, duration: '1 hour + time to explore',
    practical: 'Wednesday, November 25, 10:30–11:30 AM MST. Purchase tickets through Breck Create; walk-ins are welcome up to capacity. The venue is wheelchair accessible. Storytime takes place within Other Worlds at Old Masonic Hall, 136 S. Main St.; the subsequent Mountain Top Explorium visit is a separate stop. For half-price Explorium day passes after Storytime, just tell the team the story of the day.',
    opportunity: 'A Mountain Top Explorium program at Other Worlds, a collaborative exhibit with Breck Create. Astronomy focus inspired by Breck Sky Fest.',
  },
  {
    slug: 'cosmic-creators-steam-saturday', title: 'STEAM Saturday at Other Worlds with Breck Sky Fest', subtitle: 'Creative, hands-on exploration', category: 'STEAM & making', filters: ['family', 'day', 'arts'], accent: 'orange', icon: 'spark', status: 'Confirmed · November 28',
    date: 'Saturday, November 28, 2026', time: '10:00 AM–1:00 PM MST · drop in anytime', venue: 'Other Worlds exhibition · Old Masonic Hall · 136 S. Main St., Breckenridge',
    ctaHref: 'https://breckcreate.org/events/other-worlds', ctaLabel: 'Other Worlds tickets',
    summary: 'Get creative with facilitated STEAM activities inspired by Other Worlds and themed for Breck Sky Fest. Drop in between 10 AM and 1 PM on November 28. Recommended for ages 5+; activities are included with exhibition admission.',
    description: ['Get creative with a rotating selection of facilitated STEAM activities inspired by Other Worlds. STEAM brings together Science, Technology, Engineering, Art, and Math.', 'Mountain Top Explorium will theme this STEAM Saturday program to match Breck Sky Fest. Drop in anytime between 10 AM and 1 PM on Saturday, November 28 for creative, hands-on exploration within the exhibition.', 'Activities are included with exhibition admission. Recommended ages: 5+. Walk-ins are welcome up to capacity.'],
    highlights: ['Facilitated Science, Technology, Engineering, Art, and Math activities', 'Inspired by Other Worlds and themed for Breck Sky Fest', 'Drop in anytime between 10 AM and 1 PM on November 28', 'Recommended ages 5+ · activities included with exhibition admission'],
    audience: 'Little explorers and their families · recommended ages 5+', admission: otherWorldsAdmission, duration: '1+ hour · three-hour drop-in window',
    practical: 'Saturday, November 28, 10 AM–1 PM MST. Drop in anytime within the three-hour window and allow an hour or more to explore. Exhibition admission applies; activities are included. Walk-ins are welcome up to capacity. The venue is wheelchair accessible.',
    opportunity: 'A Mountain Top Explorium program at Other Worlds, a collaborative exhibit with Breck Create. Astronomy focus inspired by Breck Sky Fest.',
  },
  {
    slug: 'create-among-the-stars', title: 'Create Among the Stars at Ready Paint Fire!', subtitle: 'A family-friendly art afternoon', category: 'Arts & making', filters: ['arts', 'day', 'family'], accent: 'pink',
    image: 'ready-paint-fire-canvas', alt: 'Ready Paint Fire canvas painting of snowy mountains and trees beneath a moon and colorful star-filled sky', icon: 'spark', status: 'Confirmed · booking open',
    date: 'Sunday, November 29, 2026', time: 'Noon–3:00 PM MST · arrive at noon; instruction starts at 12:15 PM', venue: 'Ready Paint Fire! · 112 S. Ridge St., Breckenridge',
    ctaHref: 'https://rpfbreck.com/astrotours/', ctaLabel: 'Book Canvas or Mosaic',
    summary: 'An afternoon of stars, color, and creativity for the whole family. Choose a guided constellation canvas painting or a personalized glow-in-the-dark glass mosaic. $40 per participant/project, including all supplies, equipment, instruction, and the house service charge. Breckenridge and Colorado taxes are added at checkout.',
    description: ['Celebrate Breck Sky Fest with a family-friendly art afternoon at Ready Paint Fire! Choose Canvas or Mosaic when you book. Each $40 project includes all supplies, equipment, instruction, and the house service charge. Breckenridge and Colorado taxes are added at checkout. Your finished artwork can go home with you after the event.', 'Constellation Canvas Painting: follow along step by step with local artist and instructor Brittney Issacs to create a star-inspired canvas painting. Canvas painting takes place upstairs, with space for up to 24 painters.', 'Glow-in-the-Dark Glass Mosaic: create a personalized glass mosaic featuring your star sign constellation, with glow-in-the-dark details that shine when the lights go out. Mosaics take place downstairs, with space for up to 22 crafters.', 'Arrive at noon for a 12:15 PM start for instruction in both activities. The event runs until 3 PM. Mosaic projects offer more flexibility, but please still plan to arrive at noon for the shared instruction time.', 'Canvas and Mosaic take place on different floors, so families choosing different activities will split up. Please contact the studio with accessibility concerns before booking.', 'Reserve and pay online directly through Ready Paint Fire. Choose Canvas or Mosaic when booking. The $40 price includes the studio’s house service charge, which is shared among the event team and instructor; Breckenridge and Colorado taxes are added at checkout.'],
    highlights: ['Arrive at noon; instruction starts at 12:15 PM', '$40 per participant/project, including supplies, equipment, instruction, and service charge · taxes added at checkout', 'Canvas upstairs: maximum 24 painters · Mosaic downstairs: maximum 22 crafters', 'Choose Canvas or Mosaic when booking; take your finished project home'],
    audience: 'Families and all ages · one participant per project preferred', admission: '$40 per participant/project · supplies, equipment, instruction, and service charge included · Breckenridge and Colorado taxes added at checkout', duration: 'Noon–3 PM · instruction starts at 12:15 PM',
    practical: 'The studio prefers one participant per project. A maximum of one helper may stand alongside each painter or crafter; a seat for the helper cannot be guaranteed and will depend on availability on the day. Families choosing Canvas and Mosaic will be on separate floors. Mimosas, wine, beer, soft drinks, and other non-alcoholic options are available to purchase. You are welcome to bring a water bottle. Please contact Ready Paint Fire directly about accessibility concerns. Reservations and payments are handled by the studio.',
    opportunity: 'Hosted by Ready Paint Fire! as part of Breck Sky Fest.',
  },
  {
    slug: 'community-stargazing', title: 'Main Festival Stargazing', subtitle: 'Saturday program postponed', category: 'After dark', filters: ['night', 'family'], accent: 'blue',
    image: 'community-night', alt: 'Guests gathered around a telescope at an AstroTours evening program', icon: 'stars', status: 'Postponed to November 30 · Saturday RSVPs closed', canceled: true,
    date: 'Saturday, November 28, 2026', time: '6:00–7:30 PM MST', venue: 'Breckenridge Ski Resort · Quicksilver chair base area',
    summary: 'Saturday’s free stargazing at Quicksilver has been postponed due to snow and heavy cloud cover. Join us on Monday, November 30 at Beaver Run Resort.',
    description: [saturdayWeather, 'Saturday RSVPs are closed. Please submit a new free RSVP if you can join us at Beaver Run Resort on Monday, November 30.'],
    highlights: [],
    audience: 'Families, visitors, and curious locals', admission: 'Postponed · Saturday RSVP closed', duration: '90 minutes',
    practical: 'The Monday backup is at Beaver Run Resort.',
    opportunity: 'Contact the festival with questions about attending the Monday backup.',
  },
  {
    slug: 'sky-school', title: 'Breck Sky School', subtitle: 'A school day with a bigger view', category: 'Schools & youth', filters: ['school', 'day'], accent: 'green',
    image: 'solar-discovery', alt: 'Young visitors and an adult looking through a solar telescope', icon: 'sun', status: 'Past event · November 23', past: true,
    date: 'Monday, November 23, 2026', time: '8:00 AM–4:00 PM MST',
    summary: 'Astronomy and hands-on science at Breckenridge Elementary and Upper Blue Elementary on November 23. The school program runs from 8:00 AM to 4:00 PM MST; individual session details are arranged with the schools.',
    description: ['Breck Sky School takes place at Breckenridge Elementary and Upper Blue Elementary on Monday, November 23, 2026, so students can take part during their school day. The school program runs from 8:00 AM to 4:00 PM MST. Individual session lengths are arranged directly with the schools.', 'AstroTours and local partners are bringing astronomy and hands-on science stations to the two schools. The program is for participating students.'],
    highlights: ['School visits shaped around students and teachers', 'Supervised solar observing and hands-on science', 'Hands-on stations with local education partners'],
    audience: 'Participating Breckenridge Elementary and Upper Blue Elementary students', venue: 'Breckenridge Elementary & Upper Blue Elementary', admission: 'School program · participating students only', duration: 'Session lengths coordinated with each school',
    practical: 'School staff coordinate participation, supervision, and accessibility for their students.',
    opportunity: 'Presented with Breckenridge Elementary and Upper Blue Elementary.',
  },
  {
    slug: 'planet-walk', title: 'Planet Walk', subtitle: 'Explore the scale of the Solar System', category: 'Explore & play', filters: ['day', 'family'], accent: 'orange', icon: 'planet', status: 'Route & timing TBA',
    summary: 'A self-guided scale model of the Solar System is being planned for Breckenridge and Frisco. Route and timing are to be announced.',
    description: ['The Planet Walk uses the distances between planets to show the scale of the Solar System. Stops will introduce the Sun, planets, and other objects along the way.', 'We’ll post the route, dates, and access information when the stops are confirmed. You can explore the Solar System online now through AstroTours.'],
    ctaHref: 'https://www.astrotours.org/solar-system', ctaLabel: 'Explore the Solar System online',
    highlights: ['Planet stops along a walking route', 'Solar-system scale you can experience', 'Space for families to explore at their own pace'],
    audience: 'Families and curious explorers', venue: 'Breckenridge and Frisco · exact stops TBA', admission: 'TBA', duration: 'Route length and walking time TBA',
    practical: 'The route and surface conditions will be published when confirmed, including step-free access, walking distance, and places to pause.',
    opportunity: 'Local businesses, designers, makers, and public-space hosts could help create displays or host a planet stop.',
  },
  {
    slug: 'wellness-under-the-sky', title: 'Celestial Sound Journey', subtitle: 'Hosted by Spirit Alchemy Studio', category: 'Wellness', filters: ['wellness'], accent: 'purple', image: 'spirit-alchemy-sound-journey', alt: 'Alison at Spirit Alchemy Studio with singing bowls and gongs', icon: 'moon', status: 'Past event · November 21', past: true,
    date: 'Saturday, November 21, 2026', time: '4:00 PM & 6:00 PM MST · two separate sessions', venue: 'Spirit Alchemy Studio · 106 N French St, GL7, Breckenridge, CO 80424',
    ctaHref: 'https://spiritalchemystudio.as.me/schedule/59d4976b/category/Community%2520Classes/appointment/97147833/calendar/9409023', ctaLabel: 'Book with Spirit Alchemy',
    summary: 'A 60-minute moon-inspired guided meditation and sound journey with Alison at Spirit Alchemy Studio. Choose the 4 PM or 6 PM session.',
    description: ['Inspired by the night sky and the moon, this guided meditation and sound journey invites you to slow down, turn inward, and reconnect to the vastness of the cosmos.', 'Begin with a guided meditation inspired by the moon and the seasonal transition into winter, followed by an immersive sound session with crystal quartz singing bowls, gongs, chimes, and other instruments.', 'Hosted by Alison at Spirit Alchemy Studio as an official Breck Sky Fest program. No experience is necessary; yoga mats and props are provided.'],
    highlights: ['Two sessions on November 21: 4 PM and 6 PM', 'Guided meditation followed by a sound journey', 'Crystal quartz singing bowls, gongs, chimes, and other instruments', 'Yoga mats and props provided'],
    audience: 'No experience necessary', admission: '$40 per person · book directly with Spirit Alchemy', duration: '60 minutes per session',
    practical: 'Reserve your chosen session directly through Spirit Alchemy. Studio capacity is up to eight people per session. Studio address: 106 N French St, GL7, Breckenridge. See your booking confirmation for arrival details. Contact the studio about accessibility or sound-related needs.',
    opportunity: 'Hosted by Alison at Spirit Alchemy Studio. Find the studio on Instagram: @spirit_alchemy_studio.',
  },
  {
    slug: 'accessible-astronomy-boec', title: 'Breck Sky Fest Kickoff: Accessible Stargazing with BOEC', subtitle: 'Public evening kickoff', category: 'Accessible astronomy', filters: ['family', 'night'], accent: 'green',
    image: 'family-telescope', alt: 'Visitors taking turns at an AstroTours telescope', icon: 'stars', status: 'Past event · November 11', past: true,
    date: 'Wednesday, November 11, 2026', time: '5:30–7:00 PM MST', venue: boecStargazingVenue,
    summary: 'Public accessible stargazing with BOEC, with priority for community members and their families who need increased accessibility.',
    description: ['The November 11 festival kickoff featured accessible stargazing in partnership with Breckenridge Outdoor Education Center (BOEC).', 'The public evening session gave priority to community members and families with accessibility needs. For our next telescope viewing opportunity, see the free Monday Breckenridge stargazing program.'],
    highlights: ['Public evening accessible stargazing', 'Priority for community members and families who need increased accessibility', 'Hosted at the BOEC Wilderness Campus'],
    audience: 'Public, with priority for community members and families who need increased accessibility', admission: 'Registration closed', duration: '90 minutes',
    practical: 'The evening program was scheduled for 5:30–7:00 PM MST. BOEC also hosted a separate session for homeschool students.',
    opportunity: 'Get in touch with any access questions that would help you take part.',
  },
  {
    slug: 'boec-school-program', title: 'Breck Sky Fest Kickoff: BOEC Homeschool Astronomy', subtitle: 'BOEC students only', category: 'School program', filters: ['day'], accent: 'green',
    image: 'family-telescope', alt: 'Visitors beside an astronomy telescope', icon: 'stars', status: 'Past event · BOEC students only', past: true,
    date: 'Wednesday, November 11, 2026', time: '1:00–2:00 PM MST', venue: 'Coordinated directly with BOEC',
    summary: 'A private astronomy session for BOEC homeschool students. Not open to the public.',
    description: ['The BOEC homeschool astronomy program was scheduled for 1:00–2:00 PM MST on Wednesday, November 11.', 'BOEC coordinated participation directly with its homeschool students.', `A separate public accessible stargazing program was scheduled that evening at ${boecStargazingVenue}.`],
    highlights: ['1:00 PM MST start', 'BOEC homeschool students only', 'Private session, not open to the public'],
    audience: 'BOEC homeschool students only', admission: 'Private student program', duration: '60 minutes',
    practical: 'No public registration. BOEC coordinates student participation directly.',
    opportunity: 'Contact BOEC directly with student program questions.',
  },
  {
    slug: 'frisco-historic-park-stargazing', title: 'Frisco Historic Park Stargazing', subtitle: 'Free drop-in astronomy', category: 'After dark', filters: ['night', 'family'], accent: 'blue',
    image: 'friends-telescope', alt: 'Guests beside a telescope at an AstroTours astronomy program', icon: 'stars', status: 'Past event · November 27', past: true,
    date: 'Friday, November 27, 2026', time: '5:30–7:30 PM MST · drop in anytime', venue: friscoStargazingVenue,
    summary: 'Friday’s stargazing date at Frisco Historic Park has passed. Join us for the free Breckenridge stargazing program on Monday, November 30.',
    description: ['The Frisco Historic Park program was scheduled for Friday, November 27, from 5:30 to 7:30 PM. Registration is now closed. Our next free stargazing program is Monday, November 30 at Beaver Run Resort in Breckenridge.'],
    highlights: ['Free telescope observing with astronomers when the sky allows', 'Short astronomy talks and constellation pointing', 'Flexible drop-in format: arrive and leave throughout the evening'],
    audience: 'Families, visitors, and curious locals', admission: 'Free · $0 · RSVP required', duration: 'Drop in anytime from 5:30–7:30 PM',
    practical: 'Friday registration is closed. Visit the Monday program page for the next stargazing opportunity.',
    opportunity: 'Contact the festival with questions about attending or access.',
  },
  {
    slug: 'astrotours-stargazing-beaver-run', title: 'AstroTours Stargazing at Beaver Run', subtitle: 'A guided night under the stars', category: 'Guided astronomy tour', filters: ['night', 'family'], accent: 'blue',
    image: 'friends-telescope', alt: 'Guests beside a telescope at an AstroTours astronomy program', icon: 'stars', status: 'Past event · November 18', past: true,
    date: 'Wednesday, November 18, 2026', time: '5:30–7:15 PM MST', venue: 'Beaver Run Resort',
    ctaHref: 'https://www.astrotours.org/booking-form?referral=next_available_widget&bookings_sessionId=2mmoW0vwKcSFyxtOfCdKJxN7an24zMshm9KCnjBHzdQOldhQ7rGjz0RFTICH64XoLN77DRV6UuUUN1BDZlJ0s0ZpvnC4GecpGJTx&bookings_timezone=America/Denver', ctaLabel: 'Book November 18 Stargazing',
    summary: 'Keep looking up between the festival kickoff and main weekend. Join a regular guided AstroTours stargazing tour at Beaver Run Resort on November 18.',
    description: ['Enjoy an evening under the stars with AstroTours astronomers at Beaver Run Resort on Wednesday, November 18.', 'Explore the night sky through guided telescope viewing, constellation pointing, and astronomy stories, with time to ask questions.', 'This regular AstroTours Breckenridge tour is included in the festival calendar as another way to enjoy astronomy during November. It is a paid tour booked directly through AstroTours.'],
    highlights: ['Guided telescope viewing with AstroTours astronomers', 'Constellation pointing and astronomy stories', 'Stargazing between the November 11 kickoff and November 27–28 main weekend'],
    audience: 'Families, visitors, and curious locals', admission: 'From $57 per person · book through AstroTours', duration: '1 hour 45 minutes',
    practical: 'Select the November 18 Breckenridge tour at Beaver Run. Check your booking confirmation for the start time and meeting location. Dress warmly for outdoor observing. Telescope viewing depends on the weather; see AstroTours booking terms for weather and refund information.',
    opportunity: 'Hosted by AstroTours at Beaver Run Resort. Contact AstroTours with tour or accessibility questions.',
  },
  {
    slug: 'vip-stargazing-beaver-run', title: 'VIP Stargazing at Beaver Run', subtitle: 'Saturday program canceled', category: 'VIP experience', filters: ['night', 'family'], accent: 'orange',
    image: 'evening-telescope', alt: 'An AstroTours telescope ready for an evening program', icon: 'stars', status: 'Canceled · Saturday, November 28', canceled: true,
    date: 'Saturday, November 28, 2026', time: '5:30–7:30 PM MST', venue: 'Beaver Run Resort',
    summary: 'Saturday’s VIP stargazing at Beaver Run is canceled due to snow and heavy cloud cover.',
    description: [saturdayWeather, 'If you booked the Saturday VIP program, please check your booking email or contact AstroTours about your reservation. You can also RSVP separately for the free Monday backup.'],
    highlights: [],
    audience: 'Families, visitors, and curious locals', admission: 'Canceled', duration: '2 hours',
    practical: 'The festival’s free weather backup is Monday, November 30, at Beaver Run Resort.',
    opportunity: 'Contact AstroTours with questions about your Saturday VIP booking.',
  },
  {
    slug: 'weather-backup-stargazing', title: 'Breck Sky Fest Main Stargazing · Monday', subtitle: 'Rescheduled free community telescope viewing', category: 'After dark', filters: ['night', 'family'], accent: 'yellow',
    image: 'evening-telescope', alt: 'An AstroTours telescope ready for an evening program', icon: 'stars', status: 'Going ahead · free RSVP open',
    date: 'Monday, November 30, 2026', time: '5:30–7:15 PM MST', venue: 'Beaver Run Resort · Breckenridge',
    ctaHref: '/rsvp/monday/', ctaLabel: 'Free Monday RSVP · $0',
    summary: 'Join us for free stargazing at Beaver Run Resort on Monday, November 30, the rescheduled main festival stargazing night.',
    description: ['Bring your questions for our astronomers and look through the telescopes when the sky allows. Please submit a new free RSVP for Monday, including if you registered for Saturday.', mondayWeather],
    highlights: ['Telescope viewing with AstroTours astronomers, weather permitting', 'Free public stargazing at Beaver Run Resort', 'Monday, November 30 · 5:30–7:15 PM MST'],
    audience: 'Families, visitors, and curious locals', admission: 'Free · $0 · RSVP required', duration: '1 hour 45 minutes',
    practical: 'Dress warmly for outdoor stargazing and check this page and your RSVP email for weather updates before heading out.',
    opportunity: 'Contact the festival with questions about weather changes or access.',
  },

];

export const faqs = [
  {q:'When is Breck Sky Fest?', a:'The festival runs November 11–30, 2026. Saturday’s free outdoor stargazing has been postponed to Monday, November 30 at Beaver Run Resort. Saturday’s VIP session will not take place. Indoor programs remain on schedule.'},
  {q:'Can I register yet?', a:'Free RSVPs are open for Monday, November 30 at Beaver Run Resort in Breckenridge. Saturday stargazing registration is closed. Please make a new RSVP for Monday if you previously registered for Saturday.'},
  {q:'Is it suitable for children?', a:'Yes. Families can choose from Storytime, STEAM Saturday, community stargazing, and more. Check each event for age guidance. Children should stay with their accompanying adult.'},
  {q:'Do I need a telescope or astronomy experience?', a:'AstroTours provides telescopes at its stargazing programs. Beginners are welcome. Check individual event pages for any equipment you should bring.'},
  {q:'What should we wear?', a:'Bring a warm coat, insulating layers, a hat, gloves, warm socks, and sturdy footwear for possible snow or ice. Standing at a telescope can feel much colder than walking. A thermos and hand warmers can be useful.'},
  {q:'What happens if it is cloudy or snowy?', a:'Clouds can limit or prevent telescope viewing. Saturday’s free Breckenridge stargazing is postponed due to snow and heavy cloud cover. RSVP for Monday’s rescheduled program to receive updates.'},
  {q:'Will the venues be accessible?', a:'Access varies by event. The Other Worlds exhibition at Old Masonic Hall is wheelchair accessible. Check individual event pages and contact the festival or event host with questions about paths, seating, or telescope access.'},
  {q:'Where should we park, and is there a shuttle?', a:'Check your event listing or booking confirmation for the venue and arrival details. For local transit, see Breck Free Ride on the visitor page.'},
  {q:'Is the festival only for Breckenridge?', a:'Events take place in Breckenridge and Frisco. Frisco Historic Park hosts free stargazing on November 27, and FDRD leads a night hike from Miners Creek Trailhead that evening.'},
  {q:'Can our school, business, or group take part?', a:'Contact us about school programs, local partnerships, and sponsorship. The Get involved page explains how to reach the festival team.'},
];
