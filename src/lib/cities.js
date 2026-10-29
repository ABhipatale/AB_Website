// Local-SEO city data. Each primary city gets its own pre-rendered landing
// page at /website-developer-in-<slug>. Content is honest (services & areas
// we serve) — no fabricated local reviews.

export const CITIES = [
  {
    slug: 'karad',
    projects: [
      { title: 'Websites for Karad shops, hotels and clinics', to: 'services/website-development', text: 'Customers in Karad usually look you up on their phone before they visit. A clear website with your location, timings, photos and a call button turns that search into a visit — the approach we used for Hotel Atithi, Karad.' },
      { title: 'Local SEO for “near me” searches', to: 'services/seo-services', text: 'Showing up when someone in Malkapur or Vidyanagar searches for your service depends on your Google Business Profile, your website and contact details that match everywhere. We set these up properly.' },
      { title: 'Billing and management software', to: 'services/custom-software-development', text: 'For Karad businesses that have outgrown notebooks and spreadsheets — billing, stock and customer records in one system, like the bar management software we built for Saanj Garva.' },
    ],
    working: 'Karad is our base, so Karad clients can meet us in person — for the first discussion, design reviews and handover. Day-to-day updates happen on WhatsApp and phone, so you always know where your project stands.',
    faqs: [
      { q: 'Can we meet in person in Karad?', a: 'Yes. Karad is our base, so we can meet in person to plan your project, review designs and hand over the finished work.' },
      { q: 'Can you help my Karad business show up on Google Maps?', a: 'Yes. We set up and optimise your Google Business Profile and make sure your website and contact details match it — the foundation for appearing in local map results. No one can guarantee a position, but these steps matter most.' },
    ],
    name: 'Karad',
    path: 'website-developer-in-karad',
    district: 'Satara District',
    geo: { lat: 17.2893, lng: 74.1809 },
    pin: '415110',
    nearby: ['Satara', 'Sangli', 'Islampur', 'Wai', 'Kolhapur'],
    intro:
      'ABnexa is a professional website development company serving Karad and the surrounding Satara district. We build modern, responsive, SEO-friendly websites, mobile apps and custom software for local businesses that want to grow online.',
    localities: [
      'Shaniwar Peth', 'Mangalwar Peth', 'Somwar Peth', 'Malkapur', 'Vidyanagar',
      'Saidapur', 'Ogalewadi', 'Koyna Vasahat', 'Karad MIDC', 'Umbraj',
    ],
    industries: [
      'Hotels & restaurants', 'Colleges & coaching classes', 'Hospitals & clinics',
      'Sugar & agro businesses', 'Retail shops & showrooms', 'Builders & real estate',
    ],
    about: [
      'Karad is our home base, so we work with Karad businesses face to face — from first meeting to launch. We build business websites, online stores, booking systems and custom software that help local brands win customers on Google and WhatsApp.',
      'Our Karad work includes the official website for Hotel Atithi, Karad (hotelatithikarad.in). Whether you run a restaurant on the Karad–Satara highway, a clinic in Vidyanagar or a showroom in Shaniwar Peth, we design a fast, mobile-friendly website that ranks in local "near me" searches.',
    ],
  },
  {
    slug: 'satara',
    projects: [
      { title: 'Websites for hotels, resorts and homestays', to: 'services/website-development', text: 'Visitors heading to Kaas Plateau, Mahabaleshwar and Panchgani compare stays online. A fast website with rooms, photos, a map and a WhatsApp button helps you get the enquiry directly.' },
      { title: 'Online stores for Satara traders', to: 'services/ecommerce-website-development', text: 'Sell beyond your shop counter with a clean product catalogue, a simple checkout and Razorpay payments.' },
      { title: 'Local SEO for Satara businesses', to: 'services/seo-services', text: 'Appear when people in Shahupuri, Godoli or Sadar Bazar search for what you offer, with a properly set-up Google Business Profile and local pages.' },
    ],
    working: 'Satara is close to our Karad base, so we can meet in person when your project needs it and handle day-to-day updates over WhatsApp and phone.',
    faqs: [
      { q: 'Can you build a website for my Satara hotel or homestay?', a: 'Yes. We build hotel and stay websites with room details, photos, location maps and call or WhatsApp buttons for direct enquiries — like the website we built for Hotel Atithi in Karad.' },
      { q: 'Do you meet clients in Satara?', a: 'Yes, when the project needs it. Satara is close to our Karad base; most updates happen on WhatsApp and phone.' },
    ],
    name: 'Satara',
    path: 'website-developer-in-satara',
    district: 'Satara District',
    geo: { lat: 17.6805, lng: 74.0183 },
    pin: '415001',
    nearby: ['Karad', 'Wai', 'Phaltan', 'Shirwal', 'Pune'],
    intro:
      'Looking for a reliable website developer in Satara? ABnexa designs and builds high-performance websites, e-commerce stores and mobile apps for businesses across Satara and nearby towns.',
    localities: [
      'Sadar Bazar', 'Powai Naka', 'Shahupuri', 'Godoli', 'Karanje',
      'Rajwada', 'Satara MIDC', 'Koregaon', 'Yadogopal Peth', 'Pratapganj Peth',
    ],
    industries: [
      'Hotels, resorts & homestays', 'Tour & travel operators', 'Schools & colleges',
      'Hospitals & clinics', 'Agro & dairy businesses', 'Retail & wholesale traders',
    ],
    about: [
      'Satara businesses compete for visitors from across Maharashtra — tourists heading to Kaas Plateau, Mahabaleshwar and Panchgani, and local customers searching on their phones. We build websites that turn those searches into calls, WhatsApp chats and bookings.',
      'From resort and homestay booking websites to school portals and e-commerce stores for Satara traders, every site we build is mobile-first, fast and optimised for local SEO, with Google Maps, WhatsApp and online payments built in.',
    ],
  },
  {
    slug: 'pune',
    projects: [
      { title: 'Web apps and SaaS platforms for startups', to: 'services/custom-software-development', text: 'From a first version to a full platform — clean React front-ends, solid back-ends and the integrations your product needs. We run our own SaaS products too.' },
      { title: 'Apps for customers and field teams', to: 'services/mobile-app-development', text: 'Android and iOS apps from a single codebase, with an admin dashboard to manage everything behind them.' },
      { title: 'Company websites for manufacturers and SMEs', to: 'services/website-development', text: 'Clear product and capability pages for units in Chakan, Bhosari and Pimpri-Chinchwad, built to bring in B2B enquiries.' },
    ],
    working: 'We work with Pune clients remotely — calls, video meetings and WhatsApp — which keeps costs below big-city agency pricing while you still talk directly to the people building your product.',
    faqs: [
      { q: 'Do you work with Pune clients remotely?', a: 'Yes. We plan, review and deliver over video calls and WhatsApp, with clear milestones so you always know what is being built.' },
      { q: 'Can you build a SaaS product or MVP for my Pune startup?', a: 'Yes. We build web applications and SaaS platforms, and we run our own SaaS products such as the Jar Management and Dairy Milk Collection systems.' },
    ],
    name: 'Pune',
    path: 'website-developer-in-pune',
    district: 'Pune District',
    geo: { lat: 18.5204, lng: 73.8567 },
    pin: '411001',
    nearby: ['Baramati', 'Shirwal', 'Satara', 'Ahmednagar', 'Mumbai'],
    intro:
      'ABnexa is a modern web development company serving Pune. From startups to established enterprises, we deliver websites, SaaS platforms, mobile apps and AI-powered software engineered to premium standards.',
    localities: [
      'Hinjewadi', 'Kothrud', 'Baner', 'Wakad', 'Viman Nagar', 'Hadapsar',
      'Kharadi', 'Shivajinagar', 'Pimpri-Chinchwad', 'Magarpatta',
    ],
    industries: [
      'IT startups & SaaS companies', 'Manufacturing & MIDC units', 'Real estate & builders',
      'Clinics & hospitals', 'Education & training institutes', 'Restaurants & cafés',
    ],
    about: [
      "Pune is one of India's most competitive markets for digital businesses. We help Pune startups, SMEs and established companies launch high-performance websites, SaaS platforms, mobile apps and AI tools that stand out — without big-agency pricing.",
      'Whether you are a startup in Hinjewadi or Baner, a manufacturer in Chakan or Bhosari, or a clinic in Kothrud, we deliver clean code, modern React and Laravel stacks, Razorpay and WhatsApp integrations, and SEO built in from day one. We work remotely with Pune clients and meet online whenever you need.',
    ],
  },
  {
    slug: 'kolhapur',
    projects: [
      { title: 'Catalogue websites for foundries and engineering units', to: 'services/website-development', text: 'Buyers want to see your products and capabilities before they call. A clear catalogue website with an enquiry form helps units in Shiroli and Gokul Shirgaon win B2B orders.' },
      { title: 'Online stores for Kolhapur retail', to: 'services/ecommerce-website-development', text: 'Show jewellery, Kolhapuri chappals and local products to customers outside Kolhapur with a mobile-friendly store and online payments.' },
      { title: 'ERP and billing software for traders', to: 'services/custom-software-development', text: 'Stock, billing and customer accounts in one system for jaggery traders, textile businesses and wholesalers.' },
    ],
    working: 'Kolhapur is within easy reach of our Karad base, so we can meet for important discussions and handle everything else on WhatsApp and phone.',
    faqs: [
      { q: 'Do you build product catalogue websites for Kolhapur manufacturers?', a: 'Yes. We build catalogue and enquiry websites that present your products and capabilities clearly, with enquiry forms and WhatsApp so buyers can contact you directly.' },
      { q: 'Can you build billing or ERP software for my Kolhapur business?', a: 'Yes. We build custom billing, inventory and ERP software around the way your business already works.' },
    ],
    name: 'Kolhapur',
    path: 'website-developer-in-kolhapur',
    district: 'Kolhapur District',
    geo: { lat: 16.705, lng: 74.2433 },
    pin: '416001',
    nearby: ['Ichalkaranji', 'Kagal', 'Jaysingpur', 'Sangli', 'Miraj'],
    intro:
      'ABnexa provides professional website design and development services in Kolhapur. We help local shops, manufacturers, hospitals and startups get fast, secure, SEO-ready websites and apps.',
    localities: [
      'Rajarampuri', 'Shahupuri', 'Tarabai Park', 'Laxmipuri', 'Kasaba Bawada',
      'Shiroli MIDC', 'Gokul Shirgaon MIDC', 'Mahadwar Road', 'Nagala Park', 'Ujalaiwadi',
    ],
    industries: [
      'Foundry & engineering units', 'Textile businesses', 'Jewellery & retail shops',
      'Hotels & restaurants', 'Hospitals & clinics', 'Agro & jaggery traders',
    ],
    about: [
      'Kolhapur has a strong industrial and trading base — foundries and engineering units in Shiroli and Gokul Shirgaon, textiles in Ichalkaranji, and famous retail markets in Mahadwar Road and Laxmipuri. We help these businesses get online with professional websites that build trust with buyers across India.',
      'We build product catalogue websites, B2B enquiry portals, e-commerce stores and custom ERP and billing software for Kolhapur businesses, all optimised for Google so customers searching for your products find you first.',
    ],
  },
  {
    slug: 'sangli',
    projects: [
      { title: 'Websites for turmeric, grape and raisin traders', to: 'services/website-development', text: 'Buyers from other states look traders up before they call. A professional website with your products and contact details builds trust before the first conversation.' },
      { title: 'Software for dairy collection centres', to: 'products/milk-collection-software', text: 'Our Dairy Milk Collection System records daily milk collection from farmers and keeps every entry and payment organised.' },
      { title: 'Systems for Miraj hospitals and clinics', to: 'services/custom-software-development', text: 'Appointment requests, patient enquiries and records handled in one system, so the front desk spends less time on the phone.' },
    ],
    working: 'Sangli and Miraj are within easy reach of our Karad base, so we can meet in person when needed and keep day-to-day communication on WhatsApp and phone.',
    faqs: [
      { q: 'Do you have software for milk collection centres in Sangli?', a: 'Yes. Our Dairy Milk Collection System records daily milk collection from farmers and keeps every entry and payment organised. Ask us for a demo.' },
      { q: 'Can you build a website for my hospital or clinic in Miraj?', a: 'Yes. We build clinic and hospital websites with doctors, services, timings, location maps and easy call and WhatsApp buttons.' },
    ],
    name: 'Sangli',
    path: 'website-developer-in-sangli',
    district: 'Sangli District',
    geo: { lat: 16.8524, lng: 74.5815 },
    pin: '416416',
    nearby: ['Miraj', 'Kolhapur', 'Islampur', 'Karad', 'Tasgaon'],
    intro:
      'ABnexa is a professional website development company serving Sangli and Miraj. We design and build modern, mobile-friendly, SEO-ready websites, e-commerce stores, mobile apps and custom business software for Sangli businesses that want more customers online.',
    localities: [
      'Vishrambag', 'Vijaynagar', 'Market Yard', 'Kupwad MIDC', 'Madhavnagar',
      'Gaonbhag', 'Sangli–Miraj Road', 'Ganpati Peth', 'Khanbhag', 'Sangliwadi',
    ],
    industries: [
      'Turmeric & agri traders', 'Grape & raisin exporters', 'Hospitals & clinics',
      'Sugar & co-operative businesses', 'Schools & colleges', 'Retail shops & showrooms',
    ],
    about: [
      "Sangli is known across India for its turmeric market, grapes and raisins, sugar co-operatives and Miraj's medical hub. We help Sangli traders, exporters, hospitals and shops build websites that showcase their products and services and bring in enquiries from across the country.",
      'From a simple business website to an online store, a hospital appointment system or a custom billing and inventory app, we build everything mobile-first and SEO-ready, with WhatsApp and Razorpay integration. Sangli is close to our Karad base, so we can meet in person when your project needs it.',
    ],
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
    q: `Which areas of ${city.name} do you serve?`,
    a: `We work with businesses across ${city.name} and ${city.district}, including ${city.localities.slice(0, -1).join(', ')} and ${city.localities[city.localities.length - 1]}. We also serve nearby towns such as ${city.nearby.join(', ')}.`,
  },
  ...city.faqs,
  {
    q: `How much does a website cost in ${city.name}?`,
    a: `It depends on the pages, features and integrations you need. We give every ${city.name} business a clear, fixed quote after a short discussion.`,
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Yes. Every project includes a support window covering fixes, monitoring and small improvements.',
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
