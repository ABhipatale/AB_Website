// Local-SEO city data. Each primary city gets its own pre-rendered landing
// page at /website-developer-in-<slug>. Content is honest (services & areas
// we serve) — no fabricated local reviews.

export const CITIES = [
  {
    slug: 'karad',
    name: 'Karad',
    path: 'website-developer-in-karad',
    district: 'Satara District',
    geo: { lat: 17.2893, lng: 74.1809 },
    pin: '415110',
    nearby: ['Satara', 'Sangli', 'Islampur', 'Wai', 'Kolhapur'],
    intro:
      'AB Tech Services is a professional website development company serving Karad and the surrounding Satara district. We build modern, responsive, SEO-friendly websites, mobile apps and custom software for local businesses that want to grow online.',
  },
  {
    slug: 'satara',
    name: 'Satara',
    path: 'website-developer-in-satara',
    district: 'Satara District',
    geo: { lat: 17.6805, lng: 74.0183 },
    pin: '415001',
    nearby: ['Karad', 'Wai', 'Phaltan', 'Shirwal', 'Pune'],
    intro:
      'Looking for a reliable website developer in Satara? AB Tech Services designs and builds high-performance websites, e-commerce stores and mobile apps for businesses across Satara and nearby towns.',
  },
  {
    slug: 'pune',
    name: 'Pune',
    path: 'website-developer-in-pune',
    district: 'Pune District',
    geo: { lat: 18.5204, lng: 73.8567 },
    pin: '411001',
    nearby: ['Baramati', 'Shirwal', 'Satara', 'Ahmednagar', 'Mumbai'],
    intro:
      'AB Tech Services is a modern web development company serving Pune. From startups to established enterprises, we deliver websites, SaaS platforms, mobile apps and AI-powered software engineered to premium standards.',
  },
  {
    slug: 'kolhapur',
    name: 'Kolhapur',
    path: 'website-developer-in-kolhapur',
    district: 'Kolhapur District',
    geo: { lat: 16.705, lng: 74.2433 },
    pin: '416001',
    nearby: ['Ichalkaranji', 'Kagal', 'Jaysingpur', 'Sangli', 'Miraj'],
    intro:
      'AB Tech Services provides professional website design and development services in Kolhapur. We help local shops, manufacturers, hospitals and startups get fast, secure, SEO-ready websites and apps.',
  },
]

export const getCity = (slug) => CITIES.find((c) => c.slug === slug)

// Full service-area list (primary + secondary) — used for areaServed schema
// and the "Areas We Serve" section. These are honest service areas.
export const SERVED_AREAS = [
  'Karad', 'Satara', 'Pune', 'Kolhapur', 'Sangli', 'Miraj', 'Ichalkaranji',
  'Kagal', 'Jaysingpur', 'Islampur', 'Wai', 'Phaltan', 'Shirwal', 'Baramati',
  'Chiplun', 'Ratnagiri', 'Solapur', 'Mumbai', 'Nashik', 'Nagpur',
  'Chhatrapati Sambhajinagar', 'Ahmednagar', 'Kolad', 'Goa',
]

// City-specific FAQs — generated from a template so each page has locally
// relevant questions without duplicating content verbatim.
export const cityFaqs = (city) => [
  {
    q: `Do you provide website development services in ${city.name}?`,
    a: `Yes. AB Tech Services actively works with businesses in ${city.name} and across ${city.district}, building websites, e-commerce stores, mobile apps and custom software. We work remotely and can meet online or on a call to plan your project.`,
  },
  {
    q: `How much does a website cost in ${city.name}?`,
    a: `Pricing depends on the pages, features and integrations you need. Simple business websites start affordably, while web apps, CRMs and e-commerce stores are quoted after a short discovery call. Contact us for a clear, fixed quote for your ${city.name} business.`,
  },
  {
    q: `Which businesses in ${city.name} do you work with?`,
    a: `We build for shops, restaurants, hospitals, clinics, schools, manufacturers, traders, real estate agencies, CA and finance firms, advocates and startups in and around ${city.name}.`,
  },
  {
    q: `Will my ${city.name} website rank on Google?`,
    a: `Every site we build is optimised for speed, mobile and local SEO — including local keywords, Google Business Profile-ready content and LocalBusiness schema — so customers in ${city.name} can find you in "near me" searches.`,
  },
  {
    q: `Do you offer support after launch for ${city.name} clients?`,
    a: `Yes. Every project includes a support window (up to a full year on larger plans) covering fixes, monitoring and small improvements, so your ${city.name} website keeps running smoothly.`,
  },
]

// Local keyword set surfaced in headings/meta on each city page.
export const cityKeywords = (city) =>
  [
    `Website Developer in ${city.name}`,
    `Website Development Company in ${city.name}`,
    `Website Designer in ${city.name}`,
    `Web Design ${city.name}`,
    `E-commerce Website ${city.name}`,
    `Mobile App Development ${city.name}`,
    `SEO Company ${city.name}`,
  ].join(', ')
