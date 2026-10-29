import { Head } from 'vite-react-ssg'
import { COMPANY } from '../lib/data'

const SHARE_IMAGE = `${COMPANY.url}/assets/Ab.png`

/** Title, description, canonical, social tags and JSON-LD for one page. */
export default function Seo({ title, description, path, imageAlt, schemas = [] }) {
  const url = `${COMPANY.url}/${path}`
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={SHARE_IMAGE} />
      <meta property="og:image:alt" content={imageAlt ?? title} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={SHARE_IMAGE} />
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify({ '@context': 'https://schema.org', ...s })}
        </script>
      ))}
    </Head>
  )
}

// The business every page points back to (full details live on the home page).
export const business = {
  '@type': 'ProfessionalService',
  '@id': `${COMPANY.url}/#business`,
  name: COMPANY.name,
  url: COMPANY.url,
  telephone: COMPANY.phoneRaw,
  address: {
    '@type': 'PostalAddress',
    addressLocality: COMPANY.baseCity,
    addressRegion: COMPANY.region,
    postalCode: '415110',
    addressCountry: COMPANY.countryCode,
  },
}

export const breadcrumbs = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
    item: `${COMPANY.url}/${path}`,
  })),
})

export const faqPage = (faqs) => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
})
