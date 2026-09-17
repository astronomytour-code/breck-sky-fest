export const festival = {
  name: 'Breck Sky Fest',
  year: '2026',
  timing: 'Planned for November 2026',
  location: 'Breckenridge, Colorado',
  email: 'Luke@AstroTours.org',
  description: 'A new astronomy and dark-sky festival for Breckenridge. Telescopes, hands-on science, art, and time together under the stars. Planned for November 2026; dates and venues TBA.',
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
  admission: string;
  duration: string;
  practical: string;
  opportunity: string;
};

export const experiences: Experience[] = [
  {
    slug: 'community-stargazing', title: 'Community stargazing', subtitle: 'Breck Sky Night', category: 'After dark', filters: ['night', 'family'], accent: 'blue',
    image: 'community-night', alt: 'Guests gathered around a telescope at an AstroTours evening program', icon: 'stars', status: 'Planned · details TBA',
    summary: 'Look through big telescopes, learn a few constellations, and ask an astronomer the question you have always wondered about.',
    description: ['An easy way to spend an evening with the sky. The plan is a welcoming community telescope night for families, locals, and visitors, with astronomers on hand to explain the view.', 'We will choose observing targets for the actual night, Moon, and weather. Planets, star clusters, and distant galaxies all offer something different to discover.'],
    highlights: ['Guided telescope viewing', 'Constellation spotting', 'Time for your astronomy questions'],
    audience: 'Families, visitors, and curious locals', admission: 'Free community event planned; registration TBA', duration: 'TBA',
    practical: 'Dress for standing outside on a cold November evening. Children should stay with their accompanying adult. The venue, access details, and weather plan will be published before registration opens.',
    opportunity: 'A local venue, astronomy group, or hospitality partner could help host the evening, bring telescopes, or create a place to warm up.',
  },
  {
    slug: 'sky-day', title: 'Sunshine & sky science', subtitle: 'Breck Sky Day', category: 'Daytime discovery', filters: ['day', 'family'], accent: 'yellow',
    image: 'solar-telescope', alt: 'A telescope fitted with a solar filter at a daytime AstroTours session', icon: 'sun', status: 'Planned · details TBA',
    summary: 'Safely meet our nearest star, experiment with light and color, and get hands-on with astronomy before sunset.',
    description: ['Astronomy starts well before dark. We are planning daytime activities that let children and adults explore the Sun, light, color, and the scale of our solar system.', 'Solar observing will use equipment designed and filtered for the Sun, operated by the astronomy team. Hands-on demonstrations will give curious visitors plenty to try between telescope views.'],
    highlights: ['Supervised solar telescope viewing', 'Light, color, and optics activities', 'Science to try together as a family'],
    audience: 'Families and all ages; activity guidance TBA', admission: 'Free community activities planned; registration TBA', duration: 'TBA',
    practical: 'Bring warm layers even for daytime activities. Look at the Sun only through equipment approved and supervised by the astronomy team. Specific activities and indoor options are still being developed.',
    opportunity: 'Science educators, museums, makers, and local organizations can bring a demonstration, activity table, or family workshop.',
  },
  {
    slug: 'mountain-stargazing', title: 'A mountain night under the stars', subtitle: 'Breck Sky Summit', category: 'Signature experience', filters: ['night'], accent: 'pink',
    image: 'mountain-night', alt: 'A telescope beneath a starry sky with snow-covered mountains beyond', icon: 'mountain', status: 'In development · venue TBA',
    summary: 'A more intimate evening of guided stargazing in a mountain setting. Our signature experience is taking shape.',
    description: ['The proposed signature event brings a smaller group together for an evening of telescopes, mountain scenery, and guided astronomy.', 'We are exploring venue and hospitality options. The setting, capacity, transport, and any food or drinks will be announced once arrangements are confirmed.'],
    highlights: ['A smaller-group astronomy experience', 'Guided telescope viewing', 'A mountain setting, subject to venue confirmation'],
    audience: 'Visitors seeking a longer guided evening; age guidance TBA', admission: 'Ticketed experience planned; price and booking TBA', duration: 'TBA',
    practical: 'Mountain access is still being arranged. A lift or gondola ride is not currently included or confirmed. Wait for the venue and transport details before making plans around this experience.',
    opportunity: 'A mountain venue, resort, accommodation provider, or food and beverage partner could help shape this signature evening.',
  },
  {
    slug: 'sky-school', title: 'Breck Sky School', subtitle: 'A school day with a bigger view', category: 'Schools & youth', filters: ['school', 'day'], accent: 'green',
    image: 'solar-discovery', alt: 'Young visitors and an adult looking through a solar telescope', icon: 'sun', status: 'School sessions · details TBA',
    summary: 'Student sessions exploring sunlight, telescopes, and the science of space, with room for questions and experiments.',
    description: ['We are developing astronomy sessions for local schools and youth groups as part of the first festival. The aim is to give students direct experience with telescopes and the science behind what they see.', 'Teachers can help us plan for their students: age group, curriculum connections, group size, access needs, and the time available. School sessions will be arranged with participating groups.'],
    highlights: ['Astronomy shaped for the students taking part', 'Hands-on light and solar science', 'A chance to meet working astronomers'],
    audience: 'School and youth groups; ages and group sizes TBA', admission: 'School arrangements and funding TBA', duration: 'Session lengths TBA',
    practical: 'These are planned group sessions rather than public drop-in events. Teachers and group leaders can contact us now to discuss participation, supervision, timing, and transport.',
    opportunity: 'Schools, youth organizations, educators, and sponsors can help provide student activities, materials, and transport support.',
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
    slug: 'artist-workshop', title: 'Artist workshop', subtitle: 'Make something inspired by the sky', category: 'Arts & making', filters: ['arts', 'day', 'family'], accent: 'pink', icon: 'spark', status: 'Artist & workshop TBA',
    summary: 'A little space for making. A local artist-led workshop inspired by stars, planets, light, or the mountain night.',
    description: ['We would love to add a hands-on arts workshop to the festival. Think printmaking, painting, sculpture, or another way of responding to the sky.', 'The artist, medium, age guidance, and materials are still to be announced. The final workshop will take shape with the artist who leads it.'],
    highlights: ['A workshop led by a participating artist', 'A connection between art and astronomy', 'A creative activity to share with friends or family'],
    audience: 'Age guidance to be announced with the workshop', admission: 'Price, materials, and booking TBA', duration: 'TBA',
    practical: 'Materials, clothing advice, accessibility, and any advance booking requirements will be included when the artist and workshop are confirmed.',
    opportunity: 'Artists, studios, galleries, and creative organizations are invited to propose a workshop or adapt an existing class for the festival.',
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
    description: ['A proposed series of approachable talks and conversations would bring more voices into the festival: astronomers, researchers, dark-sky advocates, and storytellers.', 'Topics and speakers are being developed. Each listing will include its audience, format, location, and whether you need to reserve a place.'],
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
];

export const faqs = [
  {q:'When is Breck Sky Fest?', a:'The first festival is planned for November 2026 in Breckenridge, Colorado. Exact dates, venues, and event times are TBA. Please wait for confirmed dates before making travel plans specifically for the festival.'},
  {q:'Can I book tickets yet?', a:'Tickets and registration are not open yet. We are planning a mix of free community activities and a ticketed signature experience. Each event will show its price, age guidance, capacity, and booking link when confirmed.'},
  {q:'Is it suitable for children?', a:'Families are a central part of the plan, especially daytime science, the planet walk, and community stargazing. Final age guidance will be listed for each activity. Children will need to stay with their accompanying adult; drop-off childcare is not planned.'},
  {q:'Do I need a telescope or astronomy experience?', a:'No experience is needed for the main astronomy activities, and the astronomy team plans to provide telescopes for those sessions. Any specialist workshop equipment, such as a camera, will be listed in advance.'},
  {q:'What should we wear?', a:'Bring a warm coat, insulating layers, a hat, gloves, warm socks, and sturdy footwear for possible snow or ice. Standing at a telescope can feel much colder than walking. A thermos and hand warmers can be useful.'},
  {q:'What happens if it is cloudy or snowy?', a:'Telescope viewing depends on the sky, and outdoor activities depend on safe conditions. Indoor alternatives, changes, cancellation arrangements, and any ticket refund terms will be published with each confirmed event before booking opens.'},
  {q:'Will the venues be accessible?', a:'Venues are still being arranged, so step-free routes, surfaces, accessible toilets, seating, and telescope access are not yet confirmed. We will publish access information for each event. Please email us with any requirements that would help you take part.'},
  {q:'Where should we park, and is there a shuttle?', a:'Venue addresses, parking, drop-off points, and any festival transport are TBA. Breckenridge has public transport, but festival connections and late-night service are not confirmed. Check the visitor page for official travel resources.'},
  {q:'Does the mountain event include a gondola ride?', a:'No lift, gondola, or specific resort venue is confirmed. We are exploring options for the signature mountain evening and will publish the access plan before tickets go on sale.'},
  {q:'Can our school, business, or group take part?', a:'Yes. We are inviting schools, venues, artists, educators, vendors, community organizations, and sponsors to help shape the first festival. The Get involved page explains the opportunities and how to reach us.'},
];
