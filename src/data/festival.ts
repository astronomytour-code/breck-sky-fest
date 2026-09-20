export const festival = {
  name: 'Breckenridge Sky Festival',
  shortName: 'Breck Sky Fest',
  year: '2026',
  timing: 'November 2026',
  location: 'Breckenridge, Colorado',
  email: 'Luke@AstroTours.org',
  description: 'Breckenridge Sky Festival is a Summit County dark-sky celebration centered in Breckenridge, Colorado. Telescopes, hands-on science, art, and time together under the stars. November 2026; final dates and venues will be posted in October.',
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
};

export const experiences: Experience[] = [
  {
    slug: 'community-stargazing', title: 'Community stargazing', subtitle: 'Breck Sky Night', category: 'After dark', filters: ['night', 'family'], accent: 'blue',
    image: 'community-night', alt: 'Guests gathered around a telescope at an AstroTours evening program', icon: 'stars', status: 'In development · details TBA',
    summary: 'Look through big telescopes, learn a few constellations, and ask an astronomer the question you have always wondered about.',
    description: ['An easy way to spend an evening with the sky. The plan is a welcoming community telescope night for families, locals, and visitors, with astronomers on hand to explain the view.', 'We will choose observing targets for the actual night, Moon, and weather. Planets, star clusters, and distant galaxies all offer something different to discover.'],
    highlights: ['Guided telescope viewing', 'Constellation spotting', 'Time for your astronomy questions'],
    audience: 'Families, visitors, and curious locals', admission: 'Free community event; final access details coming in October', duration: 'TBA',
    practical: 'Dress for standing outside on a cold November evening. Children should stay with their accompanying adult. The venue, access details, and weather plan will be published before registration opens.',
    opportunity: 'A local venue, astronomy group, or hospitality partner could help host the evening, bring telescopes, or create a place to warm up.',
  },
  {
    slug: 'sky-day', title: 'Public solar astronomy', subtitle: 'Breck Sky Day', category: 'Daytime discovery', filters: ['day', 'family'], accent: 'yellow',
    image: 'solar-telescope', alt: 'A telescope fitted with a solar filter at a daytime AstroTours session', icon: 'sun', status: 'In development · details TBA',
    summary: 'Safely meet our nearest star, experiment with light and color, and get hands-on with astronomy before sunset.',
    description: ['Astronomy starts well before dark. We are planning daytime activities that let children and adults explore the Sun, light, color, and the scale of our solar system.', 'Solar observing will use equipment designed and filtered for the Sun, operated by the astronomy team. Hands-on demonstrations will give curious visitors plenty to try between telescope views.'],
    highlights: ['Supervised solar telescope viewing', 'Light, color, and optics activities', 'Science to try together as a family'],
    audience: 'Families and all ages; activity guidance TBA', admission: 'Free community event; final access details coming in October', duration: 'TBA',
    practical: 'Bring warm layers even for daytime activities. Look at the Sun only through equipment approved and supervised by the astronomy team. Specific activities and indoor options are still being developed.',
    opportunity: 'Science educators, museums, makers, and local organizations can bring a demonstration, activity table, or family workshop.',
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
    image: 'solar-discovery', alt: 'Young visitors and an adult looking through a solar telescope', icon: 'sun', status: 'In development · details TBA',
    summary: 'Astronomy and hands-on science for local students, with school visits being developed to bring the activities to them.',
    description: ['We are developing visits to local elementary schools so students can take part during their school day without needing a bus trip to a separate festival venue. Participating schools, dates, and session lengths are still being arranged.', 'The proposed format combines an AstroTours astronomy station with activities from local science and education organizations. Invitations have gone out to schools and potential education partners; station leaders and activities will be listed once agreed.'],
    highlights: ['School visits shaped around students and teachers', 'Supervised solar observing and hands-on science', 'Activity stations with room for education partners'],
    audience: 'Local elementary schools initially; other school and youth-group inquiries welcome', venue: 'Participating schools · locations TBA', admission: 'Free school sessions; arranged with participating schools', duration: 'Session lengths TBA',
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
    slug: 'wellness-under-the-sky', title: 'A quieter moment under the sky', subtitle: 'Yoga, sound & wellbeing', category: 'Wellness', filters: ['wellness'], accent: 'purple', icon: 'moon', status: 'Practitioner & session TBA',
    summary: 'A proposed sky-inspired yoga, sound-bath, or wellbeing session led by a local practitioner. Details coming soon.',
    description: ['We are inviting local practitioners to propose a gentle change of pace within the festival, such as a sky-inspired yoga class or sound-bath session.', 'The practitioner will help shape the format, setting, and suitability. An indoor setting may be part of the plan for November conditions.'],
    highlights: ['A session shaped by a local practitioner', 'Space to slow down during the festival', 'Format and setting announced before booking'],
    audience: 'Suitability and age guidance TBA', admission: 'TBA', duration: 'TBA',
    practical: 'Indoor or outdoor setting, mats or other equipment, sound levels, and accessibility will be listed with the confirmed session.',
    opportunity: 'Yoga teachers, sound practitioners, studios, and wellness venues are invited to propose a session or adapt an existing offering.',
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
];

export const faqs = [
  {q:'When is Breck Sky Fest?', a:'Breckenridge Sky Festival is in November 2026. Final dates, venues, and event times will be posted here in October. Please wait for confirmed details before making travel plans specifically for an event.'},
  {q:'Can I register yet?', a:'Registration is not open yet. The AstroTours-produced school session, community stargazing night, and public solar astronomy are planned as free programs. The High Country Stargaze will be ticketed, with its booking link posted on that event page when registration opens.'},
  {q:'Is it suitable for children?', a:'Families are a central part of the plan, especially daytime science, the planet walk, and community stargazing. Final age guidance will be listed for each activity. Children will need to stay with their accompanying adult; drop-off childcare is not planned.'},
  {q:'Do I need a telescope or astronomy experience?', a:'No experience is needed for the main astronomy activities, and the astronomy team plans to provide telescopes for those sessions. Any specialist workshop equipment, such as a camera, will be listed in advance.'},
  {q:'What should we wear?', a:'Bring a warm coat, insulating layers, a hat, gloves, warm socks, and sturdy footwear for possible snow or ice. Standing at a telescope can feel much colder than walking. A thermos and hand warmers can be useful.'},
  {q:'What happens if it is cloudy or snowy?', a:'Telescope viewing depends on the sky, and outdoor activities depend on safe conditions. Each confirmed event will publish its weather plan. The High Country Stargaze has backup dates being held; the final cloud-out and refund policy will be posted with registration.'},
  {q:'Will the venues be accessible?', a:'Venues are still being arranged, so step-free routes, surfaces, accessible toilets, seating, and telescope access are not yet confirmed. We will publish access information for each event. Please email us with any requirements that would help you take part.'},
  {q:'Where should we park, and is there a shuttle?', a:'Venue addresses, parking, drop-off points, and any festival transport are TBA. Breckenridge has public transport, but festival connections and late-night service are not confirmed. Check the visitor page for official travel resources.'},
  {q:'Does the High Country Stargaze include a gondola ride?', a:'A lift or gondola ride is not part of the published offer. The venue and arrival instructions will be announced before registration opens.'},
  {q:'Is the festival only for Breckenridge?', a:'Breckenridge is the festival’s home base, and residents, schools, businesses, and community organizations across Summit County are invited to take part. Confirmed event locations will be listed individually; activities in other towns are not yet announced.'},
  {q:'Can our school, business, or group take part?', a:'Yes. We are inviting schools, venues, artists, educators, vendors, community organizations, and sponsors to help shape the first festival. The Get involved page explains the opportunities and how to reach us.'},
];
