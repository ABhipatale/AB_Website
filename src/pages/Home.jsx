import { Head } from 'vite-react-ssg'

import Hero from '../components/sections/Hero'
import Statement from '../components/sections/Statement'
import Services from '../components/sections/Services'
import Products from '../components/sections/Products'
import Work from '../components/sections/Work'
import Process from '../components/sections/Process'
import Why from '../components/sections/Why'
import FAQ from '../components/sections/FAQ'
import Areas from '../components/sections/Areas'
import Contact from '../components/sections/Contact'

import { COMPANY, FAQS, SERVICES } from '../lib/data'
import { SERVED_AREAS } from '../lib/cities'

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${COMPANY.url}/#business`,
  name: COMPANY.name,
  alternateName: COMPANY.alternateNames,
  image: `${COMPANY.url}/assets/Ab.png`,
  logo: `${COMPANY.url}/brand/abnexa-logo-square.png`,
  url: COMPANY.url,
  telephone: COMPANY.phoneRaw,
  email: COMPANY.email,
  priceRange: '₹₹',
  slogan: COMPANY.tagline,
  address: {
    '@type': 'PostalAddress',
    addressLocality: COMPANY.baseCity,
    addressRegion: COMPANY.region,
    postalCode: '415110',
    addressCountry: COMPANY.countryCode,
  },
  geo: { '@type': 'GeoCoordinates', latitude: 17.2893, longitude: 74.1809 },
  areaServed: SERVED_AREAS.map((a) => ({ '@type': 'City', name: a })),
  knowsAbout: [
    'Web Development', 'Website Design', 'Mobile App Development',
    'E-commerce Development', 'React JS', 'Laravel', 'SEO', 'AI Software',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web development services',
    itemListElement: SERVICES.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title, description: s.desc },
    })),
  },
}

// Mirrors the visible FAQ section, so it is eligible for FAQ rich results.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Website & Software Development Company in Karad | ABnexa</title>
        <meta
          name="description"
          content="ABnexa builds websites, apps, custom software and SEO for businesses in Karad, Satara, Pune, Kolhapur & Sangli. Call 96 89 03 03 01 for a free quote."
        />
        <meta
          name="keywords"
          content="Abnexa, abnexa.in, AB Technology Solution, website development company Karad, website developer Satara, web design Pune, website developer Kolhapur, website developer Sangli, mobile app development Maharashtra, e-commerce website development, AI software company"
        />
        <link rel="canonical" href={`${COMPANY.url}/`} />
        <meta property="og:title" content="Website & Software Development Company in Karad | ABnexa" />
        <meta property="og:description" content="ABnexa builds websites, apps, custom software and SEO for businesses in Karad, Satara, Pune, Kolhapur & Sangli. Call 96 89 03 03 01 for a free quote." />
        <meta property="og:url" content={`${COMPANY.url}/`} />
        <meta property="og:image" content={`${COMPANY.url}/assets/Ab.png`} />
        <meta name="twitter:title" content="Website & Software Development Company in Karad | ABnexa" />
        <meta name="twitter:description" content="ABnexa builds websites, apps, custom software and SEO for businesses in Karad, Satara, Pune, Kolhapur & Sangli. Call 96 89 03 03 01 for a free quote." />
        <meta name="twitter:image" content={`${COMPANY.url}/assets/Ab.png`} />
        <meta property="og:image:alt" content="ABnexa — website & software development company in Karad, Maharashtra" />
        <script type="application/ld+json">{JSON.stringify(localBusiness)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Head>

      <Hero />
      <Statement />
      <Services />
      <Products />
      <Work />
      <Process />
      <Why />
      <FAQ items={FAQS} />
      <Areas />
      <Contact />
    </>
  )
}
