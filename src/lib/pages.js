// Content for the service and product landing pages. Everything here comes
// from what ABnexa already offers on the site — no invented features,
// statistics or client results. Product pages only describe the features
// listed in PRODUCTS.

import { PRODUCTS, SERVICE_GROUPS } from './data.js'

const group = (page) => SERVICE_GROUPS.find((g) => g.page === page)

export const SERVICE_PAGES = [
  {
    path: 'services/website-development',
    name: 'Website Development',
    metaTitle: 'Website Development Company in Maharashtra | ABnexa',
    metaDescription:
      'Fast, mobile-first, SEO-ready business websites by ABnexa for Pune, Mumbai, Kolhapur, Satara, Sangli & Karad — with WhatsApp and call buttons built in.',
    eyebrow: 'Website design & development',
    h1: ['Website Design & Development', 'That Brings In Enquiries'],
    intro:
      'We design and build fast, mobile-first websites for businesses across Pune, Mumbai, Kolhapur, Satara, Sangli and Karad — websites that explain what you do in seconds and make it easy for customers to call, WhatsApp or visit.',
    includes: [
      { title: 'Design made for your business', desc: 'A layout built around your services, customers and brand — not a recycled template.' },
      { title: 'Mobile-first build', desc: 'Most local customers find you on their phone, so every page is designed for small screens first.' },
      { title: 'SEO-ready structure', desc: 'Clear page titles, descriptions, headings, structured data and a sitemap, so Google understands every page.' },
      { title: 'Fast loading', desc: 'Optimised images, compressed files and lean code, so pages open quickly even on mobile data.' },
      { title: 'Enquiry paths that work', desc: 'Click-to-call, WhatsApp and enquiry forms placed exactly where visitors decide to get in touch.' },
      { title: 'Landing pages', desc: 'Focused pages for a single service, offer or campaign when you need one.' },
    ],
    audience: [
      'Shops & showrooms', 'Hotels & restaurants', 'Clinics & hospitals', 'Schools & coaching classes',
      'Manufacturers & traders', 'CAs, advocates & consultants',
    ],
    audienceNote:
      'If customers search for what you sell, a clear and fast website is usually the first thing that brings them to you.',
    work: ['Hotel Atithi, Karad', 'Hotel Mamacha Mala'],
    faqs: [
      { q: 'How long does it take to build a website?', a: 'A standard business website takes 2–4 weeks. We share a precise timeline after the first discussion, once we know the pages and features you need.' },
      { q: 'How much does a website cost?', a: 'It depends on the number of pages, the features and any integrations. We give you a clear, fixed quote before any work starts.' },
      { q: 'Will my website be SEO friendly and fast?', a: 'Yes. Every website is built for speed, mobile and search from the start — page titles, descriptions, headings, structured data and a sitemap are all included.' },
      { q: 'Do you look after the website after launch?', a: 'Yes. Every project includes a support window, and we can handle hosting, updates and fixes as part of ongoing support and maintenance.' },
    ],
    related: ['services/seo-services', 'services/ecommerce-website-development'],
  },
  {
    path: 'services/seo-services',
    name: 'SEO Services',
    metaTitle: 'SEO Services in Pune, Mumbai, Kolhapur & Satara | ABnexa',
    metaDescription:
      'Local SEO, Google Business Profile optimisation, on-page SEO and speed fixes that help your business get found by local customers on Google. Talk to ABnexa.',
    eyebrow: 'SEO & Google ranking',
    h1: ['SEO Services That Help', 'Local Customers Find You'],
    intro:
      'We optimise your website and Google presence so people searching for your service in your area can find you — local SEO, Google Business Profile, fast pages and content built around what customers actually search for.',
    honesty:
      'No one can honestly promise the first position on Google. What we can do is fix what holds your site back and build what helps it rank — and show you the results in Google Search Console.',
    includes: [
      { title: 'Local SEO', desc: 'Location pages, local keywords and consistent business details, so you appear for searches in your town.' },
      { title: 'Google Business Profile', desc: 'Setting up and optimising your profile — categories, services, photos and details that match your website.' },
      { title: 'On-page SEO', desc: 'Titles, descriptions, headings and page content shaped around the searches your customers make.' },
      { title: 'Speed & Core Web Vitals', desc: 'Faster pages and stable layouts — part of how Google judges the experience your site gives.' },
      { title: 'Technical SEO', desc: 'Sitemaps, indexing, redirects, canonical URLs and structured data checked and fixed.' },
      { title: 'Search Console setup', desc: 'We connect Google Search Console so you can see which searches bring visitors to your site.' },
    ],
    audience: [
      'Local shops & services', 'Clinics & hospitals', 'Hotels & restaurants', 'Schools & institutes',
      'Manufacturers & traders', 'Businesses with an existing website',
    ],
    audienceNote:
      'SEO works best when customers already search for what you offer — "near me" searches, services in your town or products you sell.',
    work: [],
    faqs: [
      { q: 'Can you guarantee the first page on Google?', a: 'No — and you should be careful of anyone who does. Rankings depend on Google and on your competitors. We focus on the work that genuinely improves visibility and report what changes.' },
      { q: 'How long does SEO take to show results?', a: 'SEO usually takes months, not days. Technical fixes can help quickly, while content and local visibility build up over time.' },
      { q: 'Do you optimise Google Business Profile?', a: 'Yes. Your Google Business Profile is one of the most important parts of local SEO, so we set it up properly and keep it consistent with your website.' },
      { q: 'Will my new website be SEO friendly?', a: 'Yes. Every website we build is optimised for speed, mobile and search from the start.' },
    ],
    related: ['services/website-development', 'services/ecommerce-website-development'],
  },
  {
    path: 'services/ecommerce-website-development',
    name: 'E-commerce Website Development',
    metaTitle: 'E-commerce Website Development in Maharashtra | ABnexa',
    metaDescription:
      'Online stores with a clean product catalogue, simple checkout, Razorpay payments and order management — built by ABnexa for businesses across Maharashtra.',
    eyebrow: 'E-commerce solutions',
    h1: ['E-commerce Websites With', 'Simple Checkout & Payments'],
    intro:
      'We build online stores with a clean catalogue, a simple checkout and payments that work from day one — so customers outside your shop can find your products and order them.',
    includes: [
      { title: 'Product catalogue', desc: 'Clear product pages with photos, prices and details that are easy to browse on a phone.' },
      { title: 'Simple checkout', desc: 'A short, clear path from cart to payment, so fewer customers give up halfway.' },
      { title: 'Razorpay payments', desc: 'Secure online payments through Razorpay, with Stripe and other gateways available if you need them.' },
      { title: 'Order management', desc: 'See and manage orders in one place instead of across messages and notebooks.' },
      { title: 'WhatsApp integration', desc: 'Connect order enquiries and customer messages to WhatsApp if that is how your business runs.' },
      { title: 'SEO for products', desc: 'Product and category pages structured so Google can find and show them.' },
    ],
    audience: [
      'Retail shops & showrooms', 'Jewellery & clothing stores', 'Food & local specialities',
      'Wholesalers & traders', 'Brands selling across India', 'Businesses moving beyond marketplaces',
    ],
    audienceNote: 'Your own store means your own customers, your own brand and no marketplace commission on every order.',
    work: [],
    faqs: [
      { q: 'Which payment gateways can you integrate?', a: 'We regularly integrate Razorpay, and can also integrate Stripe and other payment services to fit your business.' },
      { q: 'Can I manage products and orders myself?', a: 'Yes. Order management is part of every store, so you can see and handle orders in one place.' },
      { q: 'How long does an online store take?', a: 'It depends on the size of the catalogue and the features you need. We share a clear timeline and a fixed quote after the first discussion.' },
      { q: 'Will my store be fast on mobile?', a: 'Yes. Stores are designed mobile-first and optimised for speed, because most shoppers browse on their phone.' },
    ],
    related: ['services/website-development', 'services/seo-services'],
  },
  {
    path: 'services/custom-software-development',
    name: 'Custom Software Development',
    metaTitle: 'Custom Software, CRM & ERP Development in Maharashtra | ABnexa',
    metaDescription:
      'Billing, inventory, CRM, ERP and management systems built around how your business works. Custom software by ABnexa for businesses across Maharashtra.',
    eyebrow: 'Custom software & web apps',
    h1: ['Custom Software, CRM & ERP', 'Built Around How You Work'],
    intro:
      'Billing, inventory, CRM and management systems shaped around the way your business already works — so your team stops juggling notebooks, spreadsheets and messages.',
    includes: [
      { title: 'Custom software', desc: 'Systems designed around your process, not the other way around.' },
      { title: 'CRM development', desc: 'Track leads, deals and customers in one place, with follow-ups that do not get forgotten.' },
      { title: 'ERP development', desc: 'Inventory, billing, HR and finance connected in a single system.' },
      { title: 'Billing & stock', desc: 'Fast billing, stock tracking and daily sales reports for shops and restaurants.' },
      { title: 'API development', desc: 'Secure, well-documented APIs that connect your software with other tools.' },
      { title: 'Dashboards & reports', desc: 'The numbers you check every day, on one screen.' },
    ],
    audience: [
      'Restaurants & bars', 'Retail & wholesale businesses', 'Manufacturers', 'Distributors & suppliers',
      'Service companies', 'Startups building a SaaS product',
    ],
    audienceNote:
      'We also run our own SaaS products — the Jar Management, Face Detection & Attendance and Dairy Milk Collection systems.',
    work: ['Saanj Garva Bar Management System'],
    faqs: [
      { q: 'How long does custom software take?', a: 'Larger platforms such as CRMs, ERPs or custom apps typically take 6–12 weeks. We share a precise timeline after the first discussion.' },
      { q: 'How do payments and milestones work?', a: 'We split projects into clear milestones with staged payments, so you always know what is being delivered and when.' },
      { q: 'Can the software connect with tools we already use?', a: 'Yes. We build APIs and integrations so your new system can work with your existing tools, payments and WhatsApp.' },
      { q: 'Do you support the software after launch?', a: 'Yes. Every project includes a support window covering fixes, monitoring and small improvements.' },
    ],
    related: ['services/mobile-app-development', 'services/ai-automation-whatsapp-integration'],
  },
  {
    path: 'services/mobile-app-development',
    name: 'Mobile App Development',
    metaTitle: 'Mobile App Development Company in Maharashtra | ABnexa',
    metaDescription:
      'Android and iOS apps for your customers or your team, built from a single codebase with an admin dashboard. App development by ABnexa across Maharashtra.',
    eyebrow: 'Mobile application development',
    h1: ['Android & iOS Apps', 'For Your Customers and Team'],
    intro:
      'We build Android and iOS apps from a single codebase — apps your customers use to order, book or stay in touch, and apps your team uses to work in the field.',
    includes: [
      { title: 'Android & iOS', desc: 'One codebase for both platforms, which keeps development and updates efficient.' },
      { title: 'Customer apps', desc: 'Ordering, booking and account apps that keep customers coming back.' },
      { title: 'Team & field apps', desc: 'Apps for staff on the move — deliveries, visits, attendance and updates.' },
      { title: 'Admin dashboards', desc: 'A web dashboard to manage users, content and data behind the app.' },
      { title: 'Payments & WhatsApp', desc: 'Razorpay payments and WhatsApp integration where your app needs them.' },
      { title: 'Built to grow', desc: 'Start with the features that matter now and add more as your business grows.' },
    ],
    audience: [
      'Businesses with repeat customers', 'Delivery & distribution', 'Schools & institutes',
      'Clinics & service providers', 'Teams working in the field', 'Startups',
    ],
    audienceNote: 'If your customers or staff would use it every week, an app can be worth it. If not, a fast website is often the better start — we will tell you honestly.',
    work: [],
    faqs: [
      { q: 'Do you build for both Android and iOS?', a: 'Yes. We build cross-platform apps for Android and iOS from a single codebase.' },
      { q: 'Does the app come with an admin panel?', a: 'Yes. We build an admin dashboard so you can manage the data and users behind the app.' },
      { q: 'How long does an app take?', a: 'It depends on the features. We plan the first version with you and share a clear timeline and milestones.' },
      { q: 'Do you support the app after launch?', a: 'Yes. Every project includes a support window covering fixes, monitoring and small improvements.' },
    ],
    related: ['services/custom-software-development', 'services/ai-automation-whatsapp-integration'],
  },
  {
    path: 'services/ai-automation-whatsapp-integration',
    name: 'AI, Automation & WhatsApp Integration',
    metaTitle: 'AI, Automation & WhatsApp Integration for Business | ABnexa',
    metaDescription:
      'Remove repetitive work with WhatsApp messages, reminders, automated reports and AI features connected to your tools. Business automation by ABnexa.',
    eyebrow: 'Automation, AI & integrations',
    h1: ['Automation, AI & WhatsApp', 'That Remove Repetitive Work'],
    intro:
      'Remove repetitive work: WhatsApp messages, reminders, reports and AI features connected to the tools you already use — so your team spends time on customers, not copy-paste.',
    includes: [
      { title: 'WhatsApp integration', desc: 'Automated messages, reminders and customer support through WhatsApp Business.' },
      { title: 'Automated reports', desc: 'Daily or weekly reports generated and sent without anyone building them by hand.' },
      { title: 'AI assistants & smart search', desc: 'GPT-based chatbots and search that answer questions from your own information.' },
      { title: 'Document processing', desc: 'Pull the details you need out of documents automatically.' },
      { title: 'Tool integrations', desc: 'Connect your website, CRM, payments and spreadsheets so data flows by itself.' },
      { title: 'Workflow automation', desc: 'Map a repetitive process once and let the system run it end to end.' },
    ],
    audience: [
      'Businesses answering the same questions daily', 'Teams sending reminders by hand', 'Sales teams following up leads',
      'Offices handling lots of documents', 'Businesses using several disconnected tools', 'Customer support teams',
    ],
    audienceNote: 'A good first automation is any task someone on your team repeats every single day.',
    work: [],
    faqs: [
      { q: 'Do you build AI-powered features?', a: 'Yes — from GPT-based chatbots and smart search to document processing and workflow automation, tailored to your business.' },
      { q: 'Can you integrate WhatsApp with our system?', a: 'Yes. We regularly integrate WhatsApp Business, payments and CRMs to fit your workflow.' },
      { q: 'Can automation work with our existing software?', a: 'Usually, yes. We connect tools through their APIs and build the missing pieces where needed.' },
      { q: 'Where should we start?', a: 'Tell us which task takes the most time every day. We will suggest the simplest automation that removes it.' },
    ],
    related: ['services/custom-software-development', 'services/mobile-app-development'],
  },
].map((p) => {
  const g = group(`/${p.path}`)
  return { ...p, preview: g.preview, type: g.type, cta: g.cta, groupTitle: g.title }
})

export const PRODUCT_PAGES = [
  {
    path: 'products/water-jar-management-software',
    metaTitle: 'EasyJar: Water Jar Delivery & Billing App for RO Suppliers',
    metaDescription:
      'Track jars given and returned, udhari, deposits and payments for your RO or aqua water business. Marathi, Hindi & English. From ₹250/month. Free demo.',
    h1: 'Water Jar Delivery & Billing App for RO and Aqua Water Suppliers',
    problems: [
      'Jar entries written in a diary that never matches the jars actually out with customers',
      'Udhari spread across notebooks, so nobody knows quickly who owes how much',
      'Jars lost or damaged without anyone noticing until stock runs short',
      'Wedding and event orders (advance bookings) remembered only on the phone',
    ],
    featureDetail: [
      'Record every jar and bottle given or returned in a few taps — with rate, cash or udhari and notes.',
      'Udhari, advance money and payments by cash, UPI or bank are kept for every customer automatically.',
      'Send udhari reminders, jar statements and payment receipts to customers on WhatsApp in Marathi.',
    ],
    faq: { q: 'Who is EasyJar for?', a: 'RO water plants, aqua and mineral water suppliers, packaged drinking water distributors and any business that delivers water jars and wants deliveries, returns, udhari and payments in one app.' },

    // ── EasyJar: verified from the live app (easyjar.abnexa.in) ──
    audienceList: [
      'RO water plants', 'Aqua & mineral water suppliers', '20 L jar delivery businesses',
      'Packaged drinking water distributors', 'Water suppliers for weddings & events', 'Shops supplying jars to offices & cafés',
    ],
    screens: [
      { src: 'dashboard', title: 'Dashboard', desc: "Today's jars, cash, udhari and who owes the most — at a glance." },
      { src: 'daily-entry', title: 'Daily jar entry', desc: 'Give or return jars and bottles with rate, cash or udhari.' },
      { src: 'customers', title: 'Customers', desc: 'Every customer with jars held, udhari and advance.' },
      { src: 'customer-ledger', title: 'Customer ledger', desc: 'Full history, deposit held and a one-tap WhatsApp reminder.' },
      { src: 'jar-stock', title: 'Jar stock', desc: 'Available, with customers, damaged and lost jars.' },
      { src: 'advance-bookings', title: 'Advance bookings', desc: 'Event and bulk orders with deliver / cancel.' },
      { src: 'pending-payments', title: 'Pending payments', desc: 'Who owes money, with Remind and Receive buttons.' },
      { src: 'cash-report', title: 'Cash report', desc: 'Day-wise cash, UPI, expenses and net cash.' },
      { src: 'payments', title: 'Payments', desc: 'Cash, UPI and bank payments with WhatsApp receipts.' },
      { src: 'reports', title: 'Reports', desc: 'Daily, weekly, monthly, udhari and jar status reports.' },
    ],
    featureGroups: [
      { title: 'Daily jar entries', items: ['Give and return jars and bottles in a few taps', 'Separate rate per jar and per bottle', 'Cash or udhari — udhari is worked out automatically', 'Advance money adjusts old udhari and future bills', 'Optional reminder after 1 day, 1 week or 15 days'] },
      { title: 'Customers & udhari', items: ['Customer list filtered by active, udhari, has jars or inactive', 'Each customer’s current jars, bottles, pending amount and deposit held', 'Full ledger of every entry and payment', 'Call or WhatsApp a customer straight from their profile'] },
      { title: 'Jar stock tracking', items: ['Total, available, with customers, damaged and lost jars', 'Add new jars, mark damaged or lost, record repaired or found', 'See which customer has how many jars', 'Optional individual jar numbers (JAR-001, JAR-002…)'] },
      { title: 'Payments & expenses', items: ['Receive payments by cash, UPI or bank', 'Payment receipts on WhatsApp', 'Record expenses such as diesel and labour by type', 'Net cash after expenses, every day'] },
      { title: 'Reports & exports', items: ['Daily, weekly and monthly reports', 'Customer ledger, jar status, cash and udhari reports', 'Pending payments: who owes you money', 'Export to Excel or PDF, or print'] },
      { title: 'WhatsApp & reminders', items: ['Udhari reminders and statements to customers in Marathi', 'Your UPI QR or UPI ID added to udhari messages', 'Send today’s summary on WhatsApp', 'Phone notifications for jar returns, udhari and advance bookings'] },
    ],
    extras: [
      'Marathi, Hindi and English', 'Installs on Android and iPhone like an app', 'Light and dark mode',
      'Your business name and logo in the app and WhatsApp messages', 'Works with WhatsApp or WhatsApp Business', 'Advance bookings for weddings and events',
    ],
    pricing: [
      { name: 'Monthly', price: '₹250', per: '/ month', note: 'Under ₹9 a day' },
      { name: 'Yearly', price: '₹1,999', per: '/ year', note: 'Just ₹167 a month — save ₹1,001 a year', best: true },
    ],
    pricingIncludes: ['Every feature, unlimited customers and entries', 'WhatsApp messages, reports, Excel / PDF', 'Automatic reminders for advance bookings and udhari', 'One-time payment, no auto-debit — paid securely via Razorpay'],
    extraFaqs: [
      { q: 'Is EasyJar available in Marathi?', a: 'Yes. EasyJar works in Marathi, Hindi and English, and WhatsApp messages to customers are sent in Marathi.' },
      { q: 'How much does EasyJar cost?', a: 'EasyJar costs ₹250 a month or ₹1,999 a year. Every plan includes every feature, unlimited customers and entries, WhatsApp messages and Excel / PDF reports. Payment is one-time through Razorpay — no auto-debit.' },
      { q: 'Does it work on my phone?', a: 'Yes. EasyJar runs in the browser and can be installed on Android and iPhone like an app, with notifications for jar returns, udhari and advance bookings.' },
      { q: 'Can it track jar deposits and lost or damaged jars?', a: 'Yes. EasyJar keeps the deposit held for each customer and tracks available, with-customer, damaged and lost jars — with optional individual jar numbers.' },
      { q: 'Can I send udhari reminders on WhatsApp?', a: 'Yes. Send udhari reminders, statements and payment receipts on WhatsApp, with your UPI QR or UPI ID included so customers can pay straight away.' },
    ],
  },
  {
    path: 'products/face-recognition-attendance-system',
    metaTitle: 'Face Recognition Attendance System | ABnexa',
    metaDescription:
      'AI face recognition marks attendance automatically from a camera and keeps records for security and access control. For offices, schools and sites.',
    h1: 'Face Recognition Attendance System',
    problems: [
      'Paper registers that are slow and easy to fill in wrongly',
      'Attendance that has to be counted up by hand',
      'No clear record of who was on site and when',
    ],
    featureDetail: [
      'AI face recognition identifies people from a camera — no cards or registers to manage.',
      'Attendance is marked automatically when a person is recognised.',
      'Records are kept for security and access control.',
    ],
    faq: { q: 'Where can the attendance system be used?', a: 'It is designed for offices, schools and work sites that want attendance marked automatically and records kept for security and access control.' },
  },
  {
    path: 'products/milk-collection-software',
    metaTitle: 'Dairy Milk Collection Software for Collection Centres | ABnexa',
    metaDescription:
      'Record daily milk collection from farmers and keep every entry and payment organised with the Dairy Milk Collection System by ABnexa. Ask for a demo.',
    h1: 'Dairy Milk Collection Software',
    problems: [
      'Daily collection entries kept in registers that are hard to total',
      'Farmer payments worked out by hand at the end of each cycle',
      'Records that are difficult to check when a farmer has a question',
    ],
    featureDetail: [
      'Keep a record for every farmer who supplies milk to your centre.',
      'Enter each day’s milk collection quickly, so nothing is missed.',
      'Keep farmer payments organised alongside their collection entries.',
    ],
    faq: { q: 'Who is the Dairy Milk Collection System for?', a: 'Dairies and milk collection centres that want daily collection entries and farmer payments kept organised in one system.' },
  },
].map((p) => ({ ...p, product: PRODUCTS.find((x) => x.page === `/${p.path}`) }))

export const productFaqs = (p) => {
  const name = p.product.brand ?? `the ${p.product.name}`
  return [
  p.faq,
  ...(p.extraFaqs ?? []),
  { q: `Can I see a free demo of ${name}?`, a: `Yes. Message us on WhatsApp or send an enquiry and we will show you ${name} and answer your questions.` },
  { q: 'Can it be customised for my business?', a: 'Yes. We also build custom versions — tell us how your business works and we will discuss the changes you need.' },
  ...(p.pricing
    ? []
    : [{ q: 'How much does it cost?', a: 'Pricing depends on your business and any customisation you need. Ask us and we will give you a clear quote.' }]),
]
}

export const pageByPath = (path) =>
  [...SERVICE_PAGES, ...PRODUCT_PAGES].find((p) => p.path === path.replace(/^\//, ''))
