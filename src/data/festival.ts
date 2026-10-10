export const festival = {
  name: 'Breckenridge Sky Festival',
  shortName: 'Breck Sky Fest',
  year: '2026',
  timing: 'November 2026',
  location: 'Breckenridge, Colorado',
  email: 'Luke@AstroTours.org',
  description: 'Breckenridge Sky Festival is a Summit County dark-sky celebration centered in Breckenridge, Colorado. Telescopes, hands-on science, art, and time together under the stars. Kickoff November 11; school program November 23; main weekend November 27–28; weather backup November 30. Remaining times and venues are clearly marked TBA.',
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
  ctaHref?: string;
  ctaLabel?: string;
};

export const experiences: Experience[] = [
  {
    slug: 'community-stargazing', title: 'Breck Sky Fest: Main Festival Day', subtitle: 'Solar astronomy + evening stargazing', category: 'Day & night', filters: ['day', 'night', 'family'], accent: 'blue',
    image: 'community-night', alt: 'Guests gathered around a telescope at an AstroTours evening program', icon: 'stars', status: 'Date & venue confirmed · times TBA',
    date: 'Saturday, November 28, 2026', time: 'To Be Announced', venue: 'Breckenridge Ski Resort · Quicksilver chair base area',
    ctaHref: '/rsvp/breck/', ctaLabel: 'Free RSVP · $0',
    summary: 'The main festival day and night: solar astronomy during the day and telescope observing under the stars in the evening.',
    description: ['Daytime: Solar Astronomy. Explore our nearest star through safe solar observing, solar telescopes, astronomy demonstrations, and related festival programming.', 'Evening: Stargazing. Join telescope observing, astronomy presentations and talks, constellation pointing, and the festival’s nighttime programming.', 'Join us at Breckenridge Ski Resort near the Quicksilver chair base area on November 28. Times and the full program will be announced.'],
    highlights: ['Daytime: safe solar observing and solar telescopes', 'Daytime: astronomy demonstrations and festival programming', 'Evening: telescope observing, astronomy talks, and constellation pointing'],
    audience: 'Families, visitors, and curious locals', admission: 'Free · $0 · RSVP required', duration: 'Times: To Be Announced',
    practical: 'Look at the Sun only through approved solar equipment supervised by the astronomy team. Dress warmly for evening observing. A free RSVP is required for attendance planning and important weather updates. Times, arrival details, access, and the full program will be announced here. The separate VIP Stargazing experience at Beaver Run is $57 per person and booked through AstroTours. November 30 at Beaver Run Resort is the weather backup for astronomy affected by poor weather during the main weekend.',
    opportunity: 'Science educators and local organizations can propose an activity or demonstration for the festival.',
  },
  {
    slug: 'mountain-stargazing', title: 'High Country Stargaze', subtitle: 'Signature stargaze', category: 'Signature experience', filters: ['night'], accent: 'pink',
    image: 'mountain-night', alt: 'A telescope beneath a starry sky with snow-covered mountains beyond', icon: 'mountain', status: 'In development · details TBA',
    summary: 'An evening of guided telescope viewing and constellation tours with AstroTours astronomers. Venue and event details coming soon.',
    description: ['High Country Stargaze is the festival’s signature ticketed astronomy evening. We are developing a program with multiple telescopes and astronomers, with time to learn the constellations and explore different objects through the eyepiece.', 'Venue and hospitality arrangements are being worked out. Capacity, arrival information, and any food or drinks will be published with the confirmed event details.'],
    highlights: ['Multiple telescopes and guided observing', 'Constellation tours with AstroTours astronomers', 'Time to ask questions and compare telescope views'],
    audience: 'Visitors seeking a longer guided evening; age guidance TBA', admission: 'Ticketed; registration coming soon', duration: 'TBA',
    practical: 'The venue and arrival instructions will be announced with registration. A lift or gondola ride is not part of the published offer. Weather backup dates are being held; the confirmed date, access plan, and cloud-out policy will be published with registration.',
    opportunity: 'A mountain venue, resort, accommodation provider, or food and beverage partner could help shape this signature evening.',
  },
  {
    slug: 'sky-school', title: 'Breck Sky School', subtitle: 'A school day with a bigger view', category: 'Schools & youth', filters: ['school', 'day'], accent: 'green',
    image: 'solar-discovery', alt: 'Young visitors and an adult looking through a solar telescope', icon: 'sun', status: 'Date confirmed · school-day times TBA',
    date: 'Monday, November 23, 2026', time: 'School day · details TBA',
    summary: 'Astronomy and hands-on science at Breckenridge Elementary and Upper Blue Elementary on November 23. School-day times and session details TBA.',
    description: ['Breck Sky School takes place at Breckenridge Elementary and Upper Blue Elementary on Monday, November 23, 2026, so students can take part during their school day. Times and session lengths are being arranged directly with the schools.', 'The proposed format combines an AstroTours astronomy station with activities from local science and education organizations. Invitations have gone out to schools and potential education partners; station leaders and activities will be listed once agreed.'],
    highlights: ['School visits shaped around students and teachers', 'Supervised solar observing and hands-on science', 'Activity stations with room for education partners'],
    audience: 'Local elementary schools initially; other school and youth-group inquiries welcome', venue: 'Breckenridge Elementary & Upper Blue Elementary', admission: 'Free school sessions; arranged with participating schools', duration: 'Session lengths TBA',
    practical: 'School sessions will be arranged directly with teachers and group leaders. They will not be public drop-in events. Tell us about student ages, available space, supervision, access needs, and the school timetable.',
    opportunity: 'Educators, museums, and science organizations can propose a hands-on station. Sponsors can help cover materials, equipment, and the cost of bringing the program to schools.',
  },
  {
    slug: 'planet-walk', title: 'Walk the solar system', subtitle: 'Planet walk', category: 'Explore & play', filters: ['day', 'family'], accent: 'orange', icon: 'planet', status: 'Proposed · route TBA',
    summary: 'How far is Neptune, really? Explore a solar-system trail and get a feel for the enormous spaces between planets.',
    description: ['A proposed planet walk would turn the solar system into something you can explore on foot. Stops along the route would introduce the planets and the distances between them.', 'The route, displays, and accessibility are being developed. We are also exploring hands-on ways to compare what you would weigh on different worlds.'],
    highlights: ['Planet stops along a walking route', 'Solar-system scale you can experience', 'Space for families to explore at their own pace'],
    audience: 'Families and curious explorers', admission: 'TBA', duration: 'Route length and walking time TBA',
    practical: 'The route and surface conditions will be published when confirmed, including step-free access, walking distance, and places to pause.',
    opportunity: 'Local businesses, designers, makers, and public-space hosts could help create displays or host a planet stop.',
  },
  {
    slug: 'artist-workshop', title: 'Artist workshops', subtitle: 'Make something inspired by the sky', category: 'Arts & making', filters: ['arts', 'day', 'family'], accent: 'pink', icon: 'spark', status: 'Artists & workshops TBA',
    summary: 'Space for making, with artist-led workshops inspired by stars, planets, light, or the mountain night.',
    description: ['We have begun inviting local arts organizations to help shape the creative program. Proposed workshops could include printmaking, painting, sculpture, or other ways of responding to stars, planets, and light.', 'Artists, media, age guidance, and materials are still to be announced. Each workshop will take shape with the artist who leads it.'],
    highlights: ['Workshops led by participating artists', 'Connections between art and astronomy', 'Creative activities to share with friends or family'],
    audience: 'Age guidance to be announced with each workshop', admission: 'Price, materials, and booking TBA', duration: 'TBA',
    practical: 'Materials, clothing advice, accessibility, and any advance booking requirements will be included when the artist and workshop are confirmed.',
    opportunity: 'Artists, studios, galleries, and creative organizations are invited to propose workshops or adapt existing classes for the festival.',
  },
  {
    slug: 'night-sky-photography', title: 'Night-sky photography', subtitle: 'Bring the sky home', category: 'Photography', filters: ['arts', 'night'], accent: 'blue', icon: 'camera', status: 'Photographer & session TBA',
    summary: 'A proposed session on photographing the sky, from a first attempt to a new technique. Format and equipment details coming soon.',
    description: ['We are looking to include a photography session led by a photographer who enjoys teaching. It could cover a first night-sky photograph, camera settings, or composing a mountain scene after dark.', 'The final format will depend on the photographer, location, and equipment needs. Smartphone and camera suitability will be clearly listed before booking.'],
    highlights: ['A practical introduction to photographing the night', 'Guidance from a participating photographer', 'Equipment requirements published in advance'],
    audience: 'Experience level and age guidance TBA', admission: 'TBA', duration: 'TBA',
    practical: 'Please wait for the equipment list before buying or bringing specialist gear. Outdoor sessions will depend on conditions; any alternative arrangements will be listed with the event.',
    opportunity: 'Photographers, camera clubs, equipment retailers, and creative educators could lead or support this session.',
  },
  {
    slug: 'talks-and-stories', title: 'Space talks & sky stories', subtitle: 'Good questions welcome', category: 'Talks & conversation', filters: ['day', 'family'], accent: 'green', icon: 'stars', status: 'Speakers & topics TBA',
    summary: 'Hear from people who study, photograph, and care for the night sky. Speakers, stories, and conversations to be announced.',
    description: ['Proposed talks and conversations could cover astronomy, local night skies, wildlife, and the effects of outdoor lighting. Outreach has begun to local lighting and open-space contacts to explore dark-sky contributions.', 'Topics and speakers are being developed. Each listing will include its audience, format, location, and whether you need to reserve a place.'],
    highlights: ['Approachable astronomy and dark-sky topics', 'Time for audience questions', 'Contributions from visiting and local speakers'],
    audience: 'Age guidance will vary by session', admission: 'TBA', duration: 'TBA',
    practical: 'Indoor venues, seating, access information, and session times are to be announced. No speakers are currently listed as confirmed.',
    opportunity: 'Scientists, educators, speakers, libraries, and community venues can propose a talk or host a conversation.',
  },
  {
    slug: 'wellness-under-the-sky', title: 'Celestial Sound Journey', subtitle: 'Hosted by Spirit Alchemy Studio', category: 'Wellness', filters: ['wellness'], accent: 'purple', image: 'spirit-alchemy-sound-journey', alt: 'Alison at Spirit Alchemy Studio with singing bowls and gongs', icon: 'moon', status: 'Confirmed · booking open',
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
    slug: 'food-and-warm-drinks', title: 'Something warm between the stars', subtitle: 'Food & warm drinks', category: 'Around town', filters: ['family'], accent: 'orange', icon: 'cup', status: 'Vendors & locations TBA',
    summary: 'Hot chocolate, a bite to eat, and somewhere to warm up. We are inviting local food and drink businesses to take part.',
    description: ['Good food and warm drinks can make a cold evening easier to enjoy. We are exploring festival food and drink options, from a cocoa stop to a special offering at a local business.', 'Participating vendors, opening times, locations, menus, and prices will be added as arrangements are confirmed.'],
    highlights: ['Potential food and drink stops during the festival', 'A chance to discover participating local businesses', 'Menus and opening times to be announced'],
    audience: 'Festival visitors and families', admission: 'Vendor prices TBA; purchases may be separate', duration: 'Opening times TBA',
    practical: 'Food, drinks, and warm-up spaces are not yet confirmed. Dietary information and available facilities will be published for each participating location.',
    opportunity: 'Cafés, restaurants, chocolatiers, food vendors, and hospitality businesses could offer a festival special, pop-up, or warm-up stop.',
  },
  {
    slug: 'sky-on-screen', title: 'Space on screen', subtitle: 'Film & conversation', category: 'Film', filters: ['arts'], accent: 'blue', icon: 'stars', status: 'Proposed · film & venue TBA',
    summary: 'A proposed screening exploring space, astronomy, dark skies, or science fiction. Film, venue, and audience guidance TBA.',
    description: ['We have invited a local film organization to explore a screening as part of Breck Sky Fest. A documentary or science-fiction film could bring another way to explore space into the program.', 'The film, screening rights, venue, date, and any accompanying conversation still need to be agreed. Details will be posted here if the screening goes ahead.'],
    highlights: ['A space or night-sky themed film', 'An indoor festival option', 'Potential conversation alongside the screening'],
    audience: 'Age guidance and film rating TBA', admission: 'TBA', duration: 'Film and running time TBA',
    practical: 'No screening is open for booking yet. Film rating, captions, venue access, and admission details will be published if the event is confirmed.',
    opportunity: 'Film programmers, cinemas, community venues, and speakers can help select, host, or support a screening.',
  },
  {
    slug: 'accessible-astronomy-boec', title: 'Breck Sky Fest Kickoff: Accessible Stargazing with BOEC', subtitle: 'Public evening kickoff', category: 'Accessible astronomy', filters: ['family', 'night'], accent: 'green',
    image: 'family-telescope', alt: 'Visitors taking turns at an AstroTours telescope', icon: 'stars', status: 'Date & partner confirmed · evening details TBA',
    date: 'Wednesday, November 11, 2026', time: 'Evening · To Be Announced', venue: 'To Be Announced',
    ctaHref: '/rsvp/boec/', ctaLabel: 'RSVP for accessible stargazing',
    summary: 'Public accessible stargazing with BOEC, with priority for community members and their families who need increased accessibility.',
    description: ['Celebrate the official Breck Sky Fest kickoff with an evening of accessible and inclusive stargazing in partnership with Breckenridge Outdoor Education Center (BOEC).', 'This evening program is open to the public, with priority for community members and their families who need increased accessibility. Please RSVP and share any accessibility needs to help us plan.', 'We encourage most community members to RSVP for free Frisco Historic Park Stargazing on November 27 or join the main Breck Sky Fest program on November 28. The evening time, location, and specific accessibility arrangements for November 11 are still being finalized. Check back for additional details.'],
    highlights: ['Public evening accessible stargazing', 'Priority for community members and families who need increased accessibility', 'RSVP includes a field for accessibility needs'],
    audience: 'Public, with priority for community members and families who need increased accessibility', admission: 'RSVP available', duration: 'To Be Announced',
    practical: 'Evening time and location: To Be Announced. Share accessibility needs in your RSVP. The separate 1 PM BOEC homeschool program is for BOEC students only.',
    opportunity: 'Get in touch with any access questions that would help you take part.',
  },
  {
    slug: 'boec-school-program', title: 'Breck Sky Fest Kickoff: BOEC Homeschool Astronomy', subtitle: 'BOEC students only', category: 'School program', filters: ['day'], accent: 'green',
    image: 'family-telescope', alt: 'Visitors beside an astronomy telescope', icon: 'stars', status: 'Confirmed · BOEC students only',
    date: 'Wednesday, November 11, 2026', time: '1:00 PM MST', venue: 'Coordinated directly with BOEC',
    summary: 'A private astronomy session for BOEC homeschool students. Not open to the public.',
    description: ['The BOEC homeschool astronomy program starts at 1:00 PM MST on Wednesday, November 11.', 'This session is exclusively for BOEC students and is not open to the public. Participation is coordinated directly with BOEC.', 'Public accessible stargazing is a separate evening program. Its exact time and location are To Be Announced.'],
    highlights: ['1:00 PM MST start', 'BOEC homeschool students only', 'Private session, not open to the public'],
    audience: 'BOEC homeschool students only', admission: 'Private student program', duration: 'Details coordinated with BOEC',
    practical: 'No public registration. BOEC coordinates student participation directly.',
    opportunity: 'Contact BOEC directly with student program questions.',
  },
  {
    slug: 'frisco-historic-park-stargazing', title: 'Frisco Historic Park Stargazing', subtitle: 'Free drop-in astronomy', category: 'After dark', filters: ['night', 'family'], accent: 'blue',
    image: 'friends-telescope', alt: 'Guests beside a telescope at an AstroTours astronomy program', icon: 'stars', status: 'Confirmed · free RSVP required',
    date: 'Friday, November 27, 2026', time: '5:30–7:30 PM MST · drop in anytime', venue: 'Frisco Historic Park',
    ctaHref: '/rsvp/frisco/', ctaLabel: 'Free RSVP · $0',
    summary: 'Drop in between 5:30 and 7:30 PM for free telescope viewing, short astronomy talks, and constellation pointing at Frisco Historic Park.',
    description: ['Join Breck Sky Fest at Frisco Historic Park for an evening under the stars. Drop in anytime between 5:30 and 7:30 PM to look through telescopes, meet astronomers, explore the night sky, hear short astronomy talks, and learn to identify constellations overhead.', 'The program is free and designed as a flexible drop-in event, so guests may arrive and leave throughout the evening.', 'A free RSVP is required so we can plan attendance, provide enough equipment for everyone, and contact you with important weather updates, including postponement or cancellation.'],
    highlights: ['Free telescope observing with astronomers', 'Short astronomy talks and constellation pointing', 'Flexible drop-in format: arrive and leave throughout the evening'],
    audience: 'Families, visitors, and curious locals', admission: 'Free · $0 · RSVP required', duration: 'Drop in anytime from 5:30–7:30 PM',
    practical: 'Dress warmly and keep children with their accompanying adult. A free RSVP is required for equipment planning and important weather updates. You do not need to arrive at 5:30 PM. Access and facility details are coming soon.',
    opportunity: 'Contact the festival with questions about attending or access.',
  },
  {
    slug: 'vip-stargazing-beaver-run', title: 'VIP Stargazing at Beaver Run', subtitle: 'A special Breck Sky Fest experience', category: 'VIP experience', filters: ['night', 'family'], accent: 'orange',
    image: 'evening-telescope', alt: 'An AstroTours telescope ready for an evening program', icon: 'stars', status: 'Booking open · limited to 22 guests',
    date: 'Saturday, November 28, 2026', time: 'See AstroTours booking page · early-access time TBA', venue: 'Beaver Run Resort',
    ctaHref: 'https://www.astrotours.org/booking-form?timezone=America%2FDenver&referral=booking_calendar_widget', ctaLabel: 'Book VIP Stargazing · $57',
    summary: 'Enjoy guided telescope viewing and constellation stories at Beaver Run, with early access, tea and coffee service, and access to a warming area and fire. Limited to 22 guests at the regular $57 tour price.',
    description: ['Celebrate Breck Sky Fest with a special VIP edition of the regular AstroTours Breckenridge tour at Beaver Run Resort on November 28. Admission stays at $57 per person, with the group capped at 22 guests.', 'Explore the night sky with AstroTours astronomers through guided telescope viewing, constellation pointing, and astronomy stories, with time for questions.', 'The festival experience includes early access, tea and coffee service, and access to a warming area and fire. The early-access arrival time will be announced; check your booking confirmation for the tour time and meeting details.', 'This is a separate, ticketed experience at Beaver Run, taking place the same night as the main Breck Sky Fest program at Breckenridge Ski Resort near the Quicksilver chair base area.'],
    highlights: ['Limited to 22 guests', '$57 per person · regular tour price with festival extras', 'Early access · arrival time to be announced', 'Tea and coffee service included', 'Access to a warming area and fire', 'Guided telescope viewing and constellation stories'],
    audience: 'Families, visitors, and curious locals', admission: '$57 per person · advance booking required · maximum 22 guests', duration: 'See AstroTours booking details',
    practical: 'Book directly through AstroTours and select the November 28 Breckenridge tour at Beaver Run. Check the booking page and your confirmation for the tour time and meeting location. Early-access timing will be announced. Dress warmly for outdoor observing, even with access to the warming area. Telescope viewing is weather-dependent; see AstroTours booking terms for weather and refund information. Existing reservations remain valid at their booked price and include the festival extras.',
    opportunity: 'Hosted by AstroTours at Beaver Run Resort. Contact the festival with attendance or access questions.',
  },
  {
    slug: 'weather-backup-stargazing', title: 'Breck Sky Fest Weather Backup Night', subtitle: 'Weather backup date', category: 'After dark', filters: ['night', 'family'], accent: 'yellow',
    image: 'evening-telescope', alt: 'An AstroTours telescope ready for an evening program', icon: 'stars', status: 'Weather backup · November 30',
    date: 'Monday, November 30, 2026', time: 'See AstroTours booking page', venue: 'Beaver Run Resort',
    ctaHref: 'https://www.astrotours.org/booking-calendar/breckenridge-dark-sky-tour-1?referral=service_list_widget', ctaLabel: 'Reserve Weather Backup Stargazing',
    summary: 'The festival’s weather backup date at Beaver Run Resort for astronomy programming affected by poor weather during the main festival weekend.',
    description: ['November 30 is reserved as the festival’s weather backup date for astronomy programming affected by poor weather during the main festival weekend.', 'Reserve the weather-backup astronomy program through AstroTours. Check the booking page for available times, admission, and reservation details.'],
    highlights: ['Weather backup for main-weekend astronomy programming', 'Location: Beaver Run Resort', 'Reservations handled directly by AstroTours'],
    audience: 'See AstroTours booking details', admission: 'See AstroTours booking page', duration: 'See AstroTours booking page',
    practical: 'This is the weather backup night. Check the festival for weather changes and AstroTours for reservation details.',
    opportunity: 'Contact the festival if you have questions about weather changes.',
  },

];

export const faqs = [
  {q:'When is Breck Sky Fest?', a:'Breck Sky Fest kicks off with BOEC on November 11. Celestial Sound Journey at Spirit Alchemy Studio is November 21, with 4 PM and 6 PM sessions. Frisco Historic Park Stargazing is November 27, 5:30–7:30 PM. Breck Sky School is November 23 at Breckenridge Elementary and Upper Blue Elementary. The main festival day and night are November 28 at Breckenridge Ski Resort near the Quicksilver chair base area, with times TBA. VIP Stargazing at Beaver Run is also November 28: $57 per person, limited to 22 guests. November 30 at Beaver Run Resort is the weather backup.'},
  {q:'Can I register yet?', a:'Booking is open directly through Spirit Alchemy for Celestial Sound Journey on November 21 at 4 PM or 6 PM. Free RSVPs are required and open for the main Breckenridge Ski Resort program on November 28 and Frisco Historic Park Stargazing on November 27. Arrive anytime between 5:30 and 7:30 PM. Book VIP Stargazing at Beaver Run on November 28 directly through AstroTours: $57 per person, capped at 22 guests, with early access, tea and coffee, and access to a warming area and fire. Reserve November 30 weather-backup stargazing through the linked AstroTours booking page. RSVPs are also open for public accessible stargazing with BOEC on November 11, with a field for accessibility needs. The separate 1 PM BOEC school session is for BOEC students only. BOEC evening time and location, and November 28 main festival details, are coming soon.'},
  {q:'Is it suitable for children?', a:'Families are a central part of the plan, especially daytime science, the planet walk, and community stargazing. Final age guidance will be listed for each activity. Children will need to stay with their accompanying adult; drop-off childcare is not planned.'},
  {q:'Do I need a telescope or astronomy experience?', a:'No experience is needed for the main astronomy activities, and the astronomy team plans to provide telescopes for those sessions. Any specialist workshop equipment, such as a camera, will be listed in advance.'},
  {q:'What should we wear?', a:'Bring a warm coat, insulating layers, a hat, gloves, warm socks, and sturdy footwear for possible snow or ice. Standing at a telescope can feel much colder than walking. A thermos and hand warmers can be useful.'},
  {q:'What happens if it is cloudy or snowy?', a:'Telescope viewing depends on the sky, and outdoor activities depend on safe conditions. November 30 at Beaver Run Resort is the festival’s weather backup for astronomy affected by poor weather during the main weekend. RSVP for the free Frisco event so we can contact you about postponement or cancellation. Check the festival and your event’s booking information for updates.'},
  {q:'Will the venues be accessible?', a:'Venues are still being arranged, so step-free routes, surfaces, accessible toilets, seating, and telescope access are not yet confirmed. We will publish access information for each event. Please email us with any requirements that would help you take part.'},
  {q:'Where should we park, and is there a shuttle?', a:'Venue addresses, parking, drop-off points, and any festival transport are TBA. Breckenridge has public transport, but festival connections and late-night service are not confirmed. Check the visitor page for official travel resources.'},
  {q:'Does the High Country Stargaze include a gondola ride?', a:'A lift or gondola ride is not part of the published offer. The venue and arrival instructions will be announced before registration opens.'},
  {q:'Is the festival only for Breckenridge?', a:'Breckenridge is the festival’s home base, and residents, schools, businesses, and community organizations across Summit County are invited to take part. Confirmed event locations will be listed individually; Frisco Historic Park hosts free stargazing on November 27.'},
  {q:'Can our school, business, or group take part?', a:'Yes. We are inviting schools, venues, artists, educators, vendors, community organizations, and sponsors to help shape the first festival. The Get involved page explains the opportunities and how to reach us.'},
];
