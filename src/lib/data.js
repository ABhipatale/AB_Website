export const COMPANY = {
  name: 'Abnexa',
  tagline: 'AB Technology Solution',
  // Earlier brand names — kept in structured data so Google links the old
  // name and domain to the new Abnexa brand.
  alternateNames: ['AB Technology Solution', 'AB Tech Services'],
  phone: '96 89 03 03 01',
  phoneRaw: '+919689030301',
  email: 'support@abnexa.in',
  whatsapp: 'https://wa.me/919689030301',
  logo: '/assets/Ab.png',
  url: 'https://abnexa.in',
  // NAP — city/region only (no street address per current setup)
  region: 'Maharashtra',
  regionCode: 'MH',
  country: 'India',
  countryCode: 'IN',
  baseCity: 'Karad',
}

export const whatsappLink = (text) => `${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`

// Absolute hashes so the same nav works from city pages too.
export const NAV_LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'Services', href: '/#services' },
  { label: 'Products', href: '/#products' },
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

// Service list used by the structured data (Home + city pages).
export const SERVICES = [
  { title: 'Website Development', desc: 'High-performance corporate & marketing websites.' },
  { title: 'E-Commerce Website', desc: 'Conversion-first stores with secure checkout.' },
  { title: 'Mobile Apps', desc: 'Cross-platform apps for iOS and Android.' },
  { title: 'AI Integration', desc: 'GPT-powered assistants, search & workflows.' },
  { title: 'WhatsApp Integration', desc: 'Automated messaging & customer support.' },
  { title: 'Razorpay Integration', desc: 'Seamless payments, subscriptions & payouts.' },
  { title: 'CRM Development', desc: 'Track leads, deals and customers in one place.' },
  { title: 'ERP Development', desc: 'Unify inventory, billing, HR and finance.' },
  { title: 'Business Automation', desc: 'Connect tools and automate operations end-to-end.' },
  { title: 'Cloud Deployment', desc: 'Reliable, auto-scaling cloud infrastructure.' },
  { title: 'API Development', desc: 'Secure, well-documented REST & GraphQL APIs.' },
  { title: 'Custom Software', desc: 'Bespoke platforms built around your process.' },
]

// Visible services — grouped so the page stays short. `includes` keeps every
// service from the schema list visible on the page.
export const SERVICE_GROUPS = [
  {
    title: 'Website Design & Development',
    preview: 'web',
    desc: 'Fast, mobile-first business websites that explain what you do and turn visitors into calls and enquiries.',
    includes: ['Website Development', 'Landing pages', 'SEO-ready structure'],
    cta: 'Plan my website',
  },
  {
    title: 'SEO & Google Ranking',
    preview: 'seo',
    desc: 'We optimise your website so customers find you on Google — local SEO, Google Business Profile, fast pages and content built around what people actually search for.',
    includes: ['Local SEO', 'Google Business Profile', 'On-page SEO', 'Speed & Core Web Vitals'],
    cta: 'Grow my Google ranking',
  },
  {
    title: 'E-commerce Solutions',
    preview: 'shop',
    desc: 'Online stores with a clean catalogue, simple checkout and payments that work from day one.',
    includes: ['E-Commerce Website', 'Razorpay Integration', 'Order management'],
    cta: 'Start my store',
  },
  {
    title: 'Custom Software & Web Apps',
    preview: 'app',
    desc: 'Billing, inventory, CRM and management systems shaped around the way your business already works.',
    includes: ['Custom Software', 'CRM Development', 'ERP Development', 'API Development'],
    cta: 'Discuss my software',
  },
  {
    title: 'Mobile Application Development',
    preview: 'mobile',
    desc: 'Android and iOS apps for your customers or your team — built from a single codebase.',
    includes: ['Mobile Apps', 'Android & iOS', 'Admin dashboards'],
    cta: 'Talk about my app',
  },
  {
    title: 'Automation, AI & Integrations',
    preview: 'auto',
    desc: 'Remove repetitive work: WhatsApp messages, reminders, reports and AI features connected to your tools.',
    includes: ['Business Automation', 'WhatsApp Integration', 'AI Integration'],
    cta: 'Automate my work',
  },
  {
    title: '24/7 Support & Maintenance',
    preview: 'cloud',
    desc: 'Round-the-clock support after launch — hosting, updates, fixes and monitoring, so your website or app keeps running while you focus on your business.',
    includes: ['24/7 support', 'Cloud Deployment', 'Updates & fixes', 'Monitoring'],
    cta: 'Ask about support',
  },
]

// Abnexa's own SaaS products.
export const PRODUCTS = [
  {
    name: 'Jar Management System',
    audience: 'For water suppliers',
    desc: 'Manage water-jar customers, daily deliveries and payments in one place.',
    features: ['Customer records', 'Daily jar deliveries', 'Payment tracking'],
    image: '/assets/jar-management-logo.webp',
    imageAlt: 'Jar Management System logo — SaaS by Abnexa',
    tint: '#e7f1ff',
  },
  {
    name: 'Face Detection & Attendance System',
    audience: 'For offices, schools & sites',
    desc: 'AI face recognition from a camera marks attendance automatically and keeps records for security and access control.',
    features: ['Face recognition', 'Automatic attendance', 'Access records'],
    image: '/assets/face-attendance-logo.webp',
    imageAlt: 'Face Detection & Attendance System logo — SaaS by Abnexa',
    tint: '#e5ecff',
  },
  {
    name: 'Dairy Milk Collection System',
    audience: 'For dairies & collection centres',
    desc: 'Record daily milk collection from farmers and keep every entry and payment organised.',
    features: ['Farmer entries', 'Daily collection', 'Farmer payments'],
    image: '/assets/dairy-milk-logo.svg',
    imageAlt: 'Dairy Milk Collection System logo — SaaS by Abnexa',
    tint: '#e4f5ea',
  },
]

// Client work — live websites and custom software. `href` is optional.
export const WORK = [
  {
    name: 'Hotel Atithi, Karad',
    kind: 'Restaurant website',
    desc: 'Official website for Hotel Atithi in Karad — fast, mobile-friendly and SEO-ready, helping guests find and contact the hotel online.',
    image: '/assets/atithilogo.png',
    imageAlt: 'Hotel Atithi Karad logo — website by Abnexa',
    href: 'https://hotelatithikarad.in',
    linkLabel: 'hotelatithikarad.in',
  },
  {
    name: 'Hotel Mamacha Mala',
    kind: 'Restaurant website',
    desc: 'Responsive website for Hotel Mamacha Mala — a clean, modern online presence built to showcase the hotel and bring in more customers.',
    image: '/assets/logo.png',
    imageAlt: 'Hotel Mamacha Mala logo — website by Abnexa',
    href: 'https://mamacha-mala.vercel.app/',
    linkLabel: 'mamacha-mala.vercel.app',
  },
  {
    name: 'Saanj Garva Bar Management System',
    kind: 'Custom software',
    desc: 'Bar & restaurant management application for Saanj Garva — table orders, KOT, fast billing, liquor stock tracking and daily sales reports in one place.',
    image: '/assets/saanj-garva-logo.webp',
    imageAlt: 'Saanj Garva beer shop logo — software by Abnexa',
  },
]

export const PROCESS = [
  { title: 'Discover', desc: 'Understand the business, users and goals.' },
  { title: 'Design', desc: 'Shape the experience and validate the direction.' },
  { title: 'Build', desc: 'Develop the solution with attention to performance and quality.' },
  { title: 'Launch', desc: 'Test, deploy and support the product as agreed.' },
]

export const VALUES = [
  { title: 'Business first', desc: 'We start from what your business needs, then pick the technology.' },
  { title: 'Skilled development team', desc: 'A dedicated team of designers and developers who plan, build and test your product properly.' },
  { title: 'SEO built in', desc: 'Every website is built to rank — fast, mobile-friendly and optimised for Google from day one.' },
  { title: '24/7 support', desc: 'We are available round the clock, so problems get answered and fixed fast — even after launch.' },
  { title: 'Direct communication', desc: 'You talk to the people building your product — no middlemen.' },
  { title: 'Growth partner', desc: 'As your business grows, we add features, scale your systems and keep improving them.' },
]

// Short promise points shown in the About section.
export const HIGHLIGHTS = [
  { title: 'SEO & Google ranking', desc: 'Help your business rank higher and get found by local customers.' },
  { title: '24/7 support', desc: 'Round-the-clock help whenever your business needs it.' },
  { title: 'Expert development team', desc: 'Designers and developers focused on quality work.' },
  { title: 'Built for growth', desc: 'Technology that supports your business as it grows.' },
]

export const PROJECT_TYPES = [
  'Website',
  'E-commerce store',
  'Custom software / web app',
  'Mobile app',
  'Automation / integration',
  'Maintenance & support',
  'Something else',
]

export const BUDGETS = [
  'Under ₹25,000',
  '₹25,000 – ₹75,000',
  '₹75,000 – ₹2,00,000',
  'Above ₹2,00,000',
  'Not sure yet',
]

export const FAQS = [
  {
    q: 'How long does a typical project take?',
    a: 'A standard website takes 2–4 weeks, while larger platforms such as CRMs, ERPs or custom apps typically run 6–12 weeks. We share a precise timeline after the discovery call.',
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Yes. Every project includes a support window — up to a full year on our Business and Enterprise plans — covering fixes, monitoring and minor improvements.',
  },
  {
    q: 'Can you integrate payments and WhatsApp?',
    a: 'Absolutely. We regularly integrate Razorpay, Stripe, WhatsApp Business, CRMs and other third-party services to fit your workflow.',
  },
  {
    q: 'Will my website be SEO friendly and fast?',
    a: 'Every build is optimised for Core Web Vitals, accessibility and search from the start, so you rank well and load fast on any device.',
  },
  {
    q: 'Do you build AI-powered features?',
    a: 'Yes — from GPT-based chatbots and smart search to document processing and workflow automation, tailored to your business.',
  },
  {
    q: 'How do payments and milestones work?',
    a: 'We usually split projects into clear milestones with staged payments, so you always know what is being delivered and when.',
  },
]
