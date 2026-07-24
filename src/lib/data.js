import {
  Globe, Smartphone, Bot, Cog, ShoppingCart, MessageCircle,
  CreditCard, Users, Building2, Workflow, CloudCog, Code2,
  Blocks, Sparkles, ShieldCheck, Gauge, Search,
  BadgeIndianRupee, Headset, Rocket, LayoutDashboard,
  MessagesSquare, CalendarCheck, KeyRound, Wallet,
} from 'lucide-react'

export const COMPANY = {
  name: 'AB Technology Solution',
  tagline: 'Your Digital Growth Partner',
  phone: '+91 7666287015',
  phoneRaw: '+917666287015',
  email: 'hello@abtechnologysolution.com',
  whatsapp: 'https://wa.me/917666287015',
  logo: '/assets/Ab.png',
}

// Navbar links (Technologies intentionally omitted here — the section still
// exists on the page and is linked from the footer).
export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

// Footer "Quick Links" — the full set, including Technologies.
export const FOOTER_LINKS = [
  ...NAV_LINKS.slice(0, 4),
  { label: 'Technologies', href: '#technologies' },
  ...NAV_LINKS.slice(4),
]

// Four headline capabilities (used in About)
export const CORE_SERVICES = [
  { icon: Globe, title: 'Web Development', desc: 'Fast, scalable sites & web apps engineered for conversion.' },
  { icon: Smartphone, title: 'Mobile App Development', desc: 'Native-grade iOS & Android apps from a single codebase.' },
  { icon: Bot, title: 'AI Solutions', desc: 'Custom AI features, chatbots and intelligent automation.' },
  { icon: Cog, title: 'Business Automation', desc: 'Automate operations and remove repetitive manual work.' },
]

// Full services grid
export const SERVICES = [
  { icon: Globe, title: 'Website Development', desc: 'High-performance corporate & marketing websites.', tag: 'Web' },
  { icon: ShoppingCart, title: 'E-Commerce Website', desc: 'Conversion-first stores with secure checkout.', tag: 'Web' },
  { icon: Smartphone, title: 'Mobile Apps', desc: 'Cross-platform apps for iOS and Android.', tag: 'Apps' },
  { icon: Bot, title: 'AI Integration', desc: 'GPT-powered assistants, search & workflows.', tag: 'AI' },
  { icon: MessageCircle, title: 'WhatsApp Integration', desc: 'Automated messaging & customer support.', tag: 'Automation' },
  { icon: CreditCard, title: 'Razorpay Integration', desc: 'Seamless payments, subscriptions & payouts.', tag: 'Payments' },
  { icon: Users, title: 'CRM Development', desc: 'Track leads, deals and customers in one place.', tag: 'Platforms' },
  { icon: Building2, title: 'ERP Development', desc: 'Unify inventory, billing, HR and finance.', tag: 'Platforms' },
  { icon: Workflow, title: 'Business Automation', desc: 'Connect tools and automate operations end-to-end.', tag: 'Automation' },
  { icon: CloudCog, title: 'Cloud Deployment', desc: 'Reliable, auto-scaling cloud infrastructure.', tag: 'Cloud' },
  { icon: Code2, title: 'API Development', desc: 'Secure, well-documented REST & GraphQL APIs.', tag: 'Web' },
  { icon: Blocks, title: 'Custom Software', desc: 'Bespoke platforms built around your process.', tag: 'Platforms' },
]

// Honest facts about the offering — no fabricated track record.
export const FACTS = [
  { value: 12, suffix: '+', label: 'Services Offered' },
  { value: 13, suffix: '+', label: 'Technologies We Use' },
  { value: 7, suffix: '-Step', label: 'Delivery Process' },
  { value: 1, suffix: '-Year', label: 'Support Included' },
]

export const REASONS = [
  { icon: BadgeIndianRupee, title: 'Affordable', desc: 'Enterprise quality at a fair, transparent price.' },
  { icon: ShieldCheck, title: 'Professional', desc: 'A disciplined, senior team and clean engineering.' },
  { icon: Rocket, title: 'Fast Delivery', desc: 'Agile sprints that ship on a clear schedule.' },
  { icon: Search, title: 'SEO Friendly', desc: 'Built to rank and be discovered from day one.' },
  { icon: ShieldCheck, title: 'Secure', desc: 'Security and privacy engineered in by default.' },
  { icon: Sparkles, title: 'Modern Technology', desc: 'A current, future-proof technology stack.' },
  { icon: Headset, title: '1 Year Support', desc: 'A full year of support after every launch.' },
  { icon: Gauge, title: 'Fast & Reliable', desc: 'Optimised for speed, uptime and scale.' },
]

// Brand marks handled in TechStack component (react-icons + monogram fallbacks)
export const TECHNOLOGIES = [
  'React', 'Laravel', 'Node.js', 'Python', 'Flutter', 'React Native',
  'Docker', 'AWS', 'MySQL', 'MongoDB', 'OpenAI', 'GSAP', 'Tailwind',
]

// What we build — honest capability showcase (no invented client projects).
export const SOLUTIONS = [
  {
    icon: LayoutDashboard,
    title: 'Web Apps & SaaS',
    desc: 'Dashboards, admin panels and full SaaS products with authentication, billing and role-based access.',
    points: ['React front-ends', 'Secure APIs', 'Subscription billing'],
    accent: 'from-blue-500 to-sky-400',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    desc: 'Fast, conversion-focused online stores with catalog, cart, secure payments and order management.',
    points: ['Razorpay / Stripe', 'Inventory & orders', 'SEO-ready'],
    accent: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'Cross-platform iOS & Android apps with native performance, push notifications and offline support.',
    points: ['Flutter / React Native', 'Push notifications', 'App Store ready'],
    accent: 'from-sky-500 to-cyan-400',
  },
  {
    icon: Bot,
    title: 'AI-Powered Software',
    desc: 'Custom AI assistants, smart search, document processing and automation built on modern LLMs.',
    points: ['GPT integrations', 'Smart chatbots', 'Workflow automation'],
    accent: 'from-blue-600 to-indigo-500',
  },
  {
    icon: Building2,
    title: 'CRM & ERP Platforms',
    desc: 'Tailored internal systems to manage leads, customers, inventory, billing, HR and finance in one place.',
    points: ['Custom modules', 'Reports & analytics', 'Team permissions'],
    accent: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Workflow,
    title: 'Business Automation',
    desc: 'Connect your tools and automate repetitive work — messaging, invoicing, syncing and notifications.',
    points: ['Tool integrations', 'WhatsApp automation', 'Scheduled jobs'],
    accent: 'from-blue-500 to-indigo-600',
  },
]

// The AB Promise — real commitments, not fabricated reviews.
export const GUARANTEES = [
  {
    icon: MessagesSquare,
    title: 'Direct developer access',
    desc: 'Talk to the engineer building your product — no middlemen, no account-manager wall.',
  },
  {
    icon: KeyRound,
    title: 'You own 100% of the code',
    desc: 'Full source code, clean and documented, handed over to you. No lock-in, ever.',
  },
  {
    icon: CalendarCheck,
    title: 'On-time, milestone-based',
    desc: 'Clear milestones and staged delivery, so you always know what ships and when.',
  },
  {
    icon: Wallet,
    title: 'Transparent fixed pricing',
    desc: 'Agreed scope and price up front — no surprise invoices half-way through.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & SEO-ready',
    desc: 'Security, performance and search best-practices built in from the first commit.',
  },
  {
    icon: Headset,
    title: '1 year of support',
    desc: 'A full year of monitoring, fixes and small improvements after launch.',
  },
]

export const PROCESS = [
  { title: 'Discovery', desc: 'We learn your goals, users and constraints.' },
  { title: 'Planning', desc: 'Scope, architecture and a clear roadmap.' },
  { title: 'UI Design', desc: 'Elegant, on-brand interfaces & prototypes.' },
  { title: 'Development', desc: 'Clean, tested code shipped in agile sprints.' },
  { title: 'Testing', desc: 'Rigorous QA across devices and edge cases.' },
  { title: 'Deployment', desc: 'Smooth, zero-downtime launch to the cloud.' },
  { title: 'Support', desc: 'A full year of monitoring and improvements.' },
]

// NOTE: The Pricing section was replaced by the "Projects — Coming Soon"
// section. These figures are kept here so pricing can be restored later
// without re-entering them. Currently unused.
export const PRICING = [
  {
    name: 'Starter',
    price: '₹24,999',
    cadence: 'per project',
    tagline: 'For small businesses getting online.',
    features: [
      'Up to 5-page website',
      'Responsive & mobile-first',
      'Basic SEO setup',
      'Contact form + WhatsApp',
      '30 days support',
    ],
    popular: false,
  },
  {
    name: 'Business',
    price: '₹74,999',
    cadence: 'per project',
    tagline: 'For growing companies that need more.',
    features: [
      'Up to 15 pages / web app',
      'CMS & admin dashboard',
      'Payment gateway integration',
      'Advanced SEO + analytics',
      'AI chatbot integration',
      '6 months priority support',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: "let's talk",
    tagline: 'For custom platforms at scale.',
    features: [
      'Custom software / ERP / CRM',
      'Dedicated engineering team',
      'Cloud architecture & DevOps',
      'Third-party integrations',
      'SLA & security hardening',
      '1 year premium support',
    ],
    popular: false,
  },
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

export const FOOTER_SERVICES = [
  'Web Development', 'Mobile Apps', 'AI Solutions',
  'Business Automation', 'CRM & ERP', 'Cloud Deployment',
]
