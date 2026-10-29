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
    metaTitle: 'Website Development Company in Karad & Maharashtra | ABnexa',
    metaDescription:
      'Fast, mobile-first business websites designed and built by ABnexa in Karad — SEO-ready, with WhatsApp, call buttons and maps built in. Get a fixed quote.',
    eyebrow: 'Website design & development',
    h1: ['Website Design & Development', 'That Brings In Enquiries'],
    intro:
      'We design and build fast, mobile-first websites for businesses across Karad, Satara, Pune, Kolhapur and Sangli — websites that explain what you do in seconds and make it easy for customers to call, WhatsApp or visit.',
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
    metaTitle: 'SEO Services in Karad, Satara & Maharashtra | ABnexa',
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
      'Billing, inventory, CRM, ERP and management systems built around how your business works. Custom software and web apps by ABnexa, Karad. Get a quote.',
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
      'Android and iOS apps for your customers or your team, built from a single codebase with an admin dashboard. Mobile app development by ABnexa, Karad.',
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
    metaTitle: 'Water Jar Management Software for Water Suppliers | ABnexa',
    metaDescription:
      'Manage water-jar customers, daily deliveries and payments in one place with the Jar Management System by ABnexa. Request a free demo on WhatsApp.',
    h1: 'Water Jar Management Software',
    problems: [
      'Customer details spread across phones, diaries and notebooks',
      'Daily deliveries that are hard to check at the end of the day',
      'Not knowing quickly which customers have paid and which have not',
    ],
    featureDetail: [
      'Keep every customer’s details in one place instead of across phones and diaries.',
      'Record the jars delivered each day, so the day’s deliveries are easy to check.',
      'See what each customer has paid, so collections are easier to follow up.',
    ],
    faq: { q: 'Who is the Jar Management System for?', a: 'Water suppliers and jar delivery businesses that want customer records, daily deliveries and payments in one place.' },
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

export const productFaqs = (p) => [
  p.faq,
  { q: `Can I see a demo of the ${p.product.name}?`, a: `Yes. Message us on WhatsApp or send an enquiry and we will show you the ${p.product.name} and answer your questions.` },
  { q: 'Can it be customised for my business?', a: 'Yes. We also build custom versions — tell us how your business works and we will discuss the changes you need.' },
  { q: 'How much does it cost?', a: 'Pricing depends on your business and any customisation you need. Ask us and we will give you a clear quote.' },
]

export const pageByPath = (path) =>
  [...SERVICE_PAGES, ...PRODUCT_PAGES].find((p) => p.path === path.replace(/^\//, ''))
