import { Head } from 'vite-react-ssg'

import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Solutions from '../components/sections/Solutions'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Technologies from '../components/sections/Technologies'
import Process from '../components/sections/Process'
import Guarantees from '../components/sections/Guarantees'
import Projects from '../components/sections/Projects'
import AreasWeServe from '../components/sections/AreasWeServe'
import FAQ from '../components/sections/FAQ'
import CTA from '../components/sections/CTA'
import Contact from '../components/sections/Contact'

import { COMPANY } from '../lib/data'
import { SERVED_AREAS } from '../lib/cities'

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${COMPANY.url}/#business`,
  name: COMPANY.name,
  image: `${COMPANY.url}/assets/Ab.png`,
  url: COMPANY.url,
  telephone: COMPANY.phone,
  email: COMPANY.email,
  priceRange: '₹₹',
  slogan: COMPANY.tagline,
  address: {
    '@type': 'PostalAddress',
    addressLocality: COMPANY.baseCity,
    addressRegion: COMPANY.region,
    addressCountry: COMPANY.countryCode,
  },
  areaServed: SERVED_AREAS.map((a) => ({ '@type': 'City', name: a })),
  knowsAbout: [
    'Web Development', 'Website Design', 'Mobile App Development',
    'E-commerce Development', 'React JS', 'Laravel', 'SEO', 'AI Software',
  ],
}

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Website Development Company in Karad, Satara, Pune & Kolhapur | AB Tech Services
        </title>
        <meta
          name="description"
          content="AB Tech Services is a professional website development company in Maharashtra serving Karad, Satara, Pune & Kolhapur. We build modern websites, mobile apps, e-commerce stores and AI software. Call +91 7666287015."
        />
        <link rel="canonical" href={`${COMPANY.url}/`} />
        <meta property="og:title" content="AB Tech Services — Website Development Company in Maharashtra" />
        <meta property="og:description" content="Professional websites, mobile apps, e-commerce and AI software for businesses across Maharashtra — Karad, Satara, Pune & Kolhapur." />
        <meta property="og:url" content={`${COMPANY.url}/`} />
        <meta property="og:image" content={`${COMPANY.url}/assets/Ab.png`} />
        <meta name="twitter:title" content="Website Development Company in Maharashtra | AB Tech Services" />
        <meta name="twitter:description" content="Websites, mobile apps, AI software and automation for Karad, Satara, Pune & Kolhapur." />
        <meta name="twitter:image" content={`${COMPANY.url}/assets/Ab.png`} />
        <script type="application/ld+json">{JSON.stringify(localBusiness)}</script>
      </Head>

      <Hero />
      <About />
      <Services />
      <Solutions />
      <WhyChooseUs />
      <Technologies />
      <Process />
      <Guarantees />
      <Projects />
      <AreasWeServe />
      <FAQ />
      <CTA />
      <Contact />
    </>
  )
}
