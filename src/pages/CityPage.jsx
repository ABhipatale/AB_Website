import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Phone } from 'lucide-react'

import FAQ from '../components/sections/FAQ'
import WhatsAppIcon from '../components/ui/WhatsAppIcon'
import { COMPANY } from '../lib/data'
import { SERVICE_PAGES, pageByPath } from '../lib/pages'
import { getCity, cityFaqs, cityKeywords, CITIES } from '../lib/cities'

export default function CityPage({ slug }) {
  const city = getCity(slug)
  const faqs = cityFaqs(city)

  const pageUrl = `${COMPANY.url}/${city.path}`
  const title = `Website Developer in ${city.name} — Web Development | ${COMPANY.name}`
  const description = `Website developer in ${city.name}: ${COMPANY.name} builds fast, SEO-ready websites, online stores, apps and custom software for ${city.name} businesses. Call ${COMPANY.phone}.`

  // Honest LocalBusiness: the real base address is Karad; each city page
  // declares the city (and nearby towns) as the area served — no fake offices.
  const localBusinessSchema = {
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
    address: {
      '@type': 'PostalAddress',
      addressLocality: COMPANY.baseCity,
      addressRegion: COMPANY.region,
      postalCode: '415110',
      addressCountry: COMPANY.countryCode,
    },
    geo: { '@type': 'GeoCoordinates', latitude: 17.2893, longitude: 74.1809 },
    areaServed: [city.name, ...city.nearby].map((n) => ({ '@type': 'City', name: n })),
  }

  // City-specific service offering, linked to the business above.
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: `Website Development in ${city.name}`,
    serviceType: 'Website Development',
    description,
    url: pageUrl,
    provider: { '@id': `${COMPANY.url}/#business` },
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: { '@type': 'State', name: COMPANY.region },
      geo: { '@type': 'GeoCoordinates', latitude: city.geo.lat, longitude: city.geo.lng },
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${COMPANY.url}/` },
      { '@type': 'ListItem', position: 2, name: `Website Developer in ${city.name}`, item: pageUrl },
    ],
  }

  // link nearby cities to their own page when one exists
  const nearbyLinks = city.nearby.map((n) => ({
    name: n,
    to: CITIES.find((c) => c.name === n)?.path,
  }))

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={cityKeywords(city)} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${COMPANY.url}/assets/Ab.png`} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${COMPANY.url}/assets/Ab.png`} />
        <meta property="og:image:alt" content={`Website developer in ${city.name} — ${COMPANY.name}`} />
        <meta name="geo.placename" content={`${city.name}, ${COMPANY.region}`} />
        <meta name="geo.position" content={`${city.geo.lat};${city.geo.lng}`} />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Head>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pb-16 pt-28 sm:pt-36">
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="tag reveal flex items-center gap-2 text-muted">
            <Link to="/" className="hover:text-orange">Home</Link>
            <span>/</span>
            <span className="text-fg">{city.name}</span>
          </nav>

          <div className="mt-8 grid items-end gap-12 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="tag reveal flex items-center gap-3 text-muted">
                <span className="rule" /> Serving {city.name}, {COMPANY.region}
              </p>
              <h1 className="reveal mt-6 font-display text-[2.6rem] font-bold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
                Website Developer in <span className="text-gloss">{city.name}</span>
              </h1>
              <p className="reveal mt-8 max-w-2xl text-lg leading-relaxed text-muted">{city.intro}</p>
              <div className="reveal mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
                <a href="#city-contact" className="btn btn-primary">
                  Get Free Consultation <ArrowRight className="arrow size-4" />
                </a>
                <a href={`tel:${COMPANY.phoneRaw}`} className="link inline-flex items-center gap-2 font-semibold">
                  <Phone className="size-4" /> {COMPANY.phone}
                </a>
              </div>
            </div>
            <div className="reveal hidden lg:block">
              <img src="/brand/abnexa-mark-light.png" alt="" aria-hidden="true" width="512" height="512" className="ring-a ml-auto w-full max-w-xs" />
              <p className="tag mt-6 text-right text-muted">
                {city.geo.lat.toFixed(2)}°N · {city.geo.lng.toFixed(2)}°E
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Local, city-specific content (unique per page) ── */}
      <section className="bg-night-2 py-20 text-fg sm:py-24">
        <div className="wrap grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="reveal font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Website design &amp; development company in <span className="text-gloss">{city.name}</span>
            </h2>
            {city.about.map((para) => (
              <p key={para.slice(0, 24)} className="reveal mt-6 text-lg leading-relaxed text-fg/70">
                {para}
              </p>
            ))}
          </div>

          <div className="space-y-10">
            <div className="reveal">
              <h3 className="tag text-muted">Businesses we build for in {city.name}</h3>
              <ul className="mt-4 border-t border-line">
                {city.industries.map((ind) => (
                  <li key={ind} className="flex items-center gap-3 border-b border-line py-3">
                    <span className="size-1.5 rounded-full bg-orange" /> {ind}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal">
              <h3 className="tag text-muted">Areas we cover in {city.name}</h3>
              <p className="mt-2 text-sm text-muted">Website development across {city.district}, including:</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {city.localities.map((l) => (
                  <li key={l} className="rounded-full border border-line px-3 py-1.5 text-sm text-fg/80">
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── What we build for {city} businesses (unique per city) ── */}
      <section className="py-20 sm:py-24">
        <div className="wrap">
          <h2 className="reveal max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            What we build for <span className="text-gloss">{city.name}</span> businesses
          </h2>
          <ul className="mt-12 grid gap-4 lg:grid-cols-3">
            {city.projects.map((pr, i) => (
              <li key={pr.title} className="reveal" style={{ '--d': `${i * 70}ms` }}>
                <Link
                  to={`/${pr.to}`}
                  className="gloss group flex h-full flex-col rounded-[1.5rem] border border-line bg-panel p-7 transition-colors hover:border-orange/60"
                >
                  <span className="tag text-orange">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-4 font-display text-xl font-semibold leading-snug">{pr.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{pr.text}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-fg/85 transition-colors group-hover:text-orange">
                    {pageByPath(pr.to).name ?? pageByPath(pr.to).product.name} <ArrowUpRight className="size-3.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── How we work with {city} clients ── */}
      <section className="bg-night-2 py-20 sm:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="reveal font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              How we work with {city.name} clients
            </h2>
            <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-fg/70">{city.working}</p>
          </div>
          <div className="reveal">
            <h3 className="tag text-muted">All services</h3>
            <ul className="mt-4 border-t border-line">
              {SERVICE_PAGES.map((sp) => (
                <li key={sp.path} className="border-b border-line">
                  <Link
                    to={`/${sp.path}`}
                    className="group flex items-center justify-between py-3.5 font-medium transition-colors hover:text-orange"
                  >
                    {sp.name}
                    <ArrowUpRight className="size-4 text-orange transition-transform group-hover:rotate-45" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FAQ items={faqs} id="city-faq" n={null} title={`${city.name} — frequently asked questions`} />

      {/* ── Nearby + map ── */}
      <section className="py-20 sm:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="reveal font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Areas we serve near {city.name}
            </h2>
            <ul className="mt-8 flex flex-wrap gap-2">
              {nearbyLinks.map((n) => (
                <li key={n.name}>
                  {n.to ? (
                    <Link
                      to={`/${n.to}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-semibold transition-colors hover:border-orange hover:text-orange"
                    >
                      {n.name} <ArrowUpRight className="size-3.5 text-orange" />
                    </Link>
                  ) : (
                    <span className="inline-flex rounded-full border border-line px-4 py-2 text-sm text-muted">{n.name}</span>
                  )}
                </li>
              ))}
            </ul>

            <p className="mt-12 leading-relaxed text-muted">
              We also work with businesses in{' '}
              {CITIES.filter((c) => c.slug !== city.slug).map((c, i, all) => (
                <span key={c.slug}>
                  <Link to={`/${c.path}`} className="font-semibold text-fg/90 underline decoration-line underline-offset-4 transition-colors hover:text-orange">
                    {c.name}
                  </Link>
                  {i < all.length - 2 ? ', ' : i === all.length - 2 ? ' and ' : '.'}
                </span>
              ))}
            </p>
          </div>

          <div className="reveal overflow-hidden rounded-[1.5rem] border border-line">
            <iframe
              title={`${COMPANY.name} — ${city.name}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(`${city.name}, ${COMPANY.region}, India`)}&output=embed`}
              className="h-[360px] w-full grayscale lg:h-full lg:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section id="city-contact" className="bg-night-2 py-20 text-fg sm:py-28">
        <div className="wrap">
          <h2 className="reveal max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Ready to build your website in <span className="text-gloss">{city.name}?</span>
          </h2>
          <p className="reveal mt-6 max-w-xl text-lg text-fg/65">
            Get a free consultation and a clear, fixed quote for your {city.name} business.
          </p>
          <div className="reveal mt-10 flex flex-wrap gap-3">
            <a href={`tel:${COMPANY.phoneRaw}`} className="btn btn-primary">
              <Phone className="size-4" /> Call {COMPANY.phone}
            </a>
            <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="btn border border-line hover:border-orange">
              <WhatsAppIcon /> WhatsApp Us
            </a>
            <a href="/#contact" className="btn border border-line hover:border-orange">
              Send project details <ArrowRight className="arrow size-4" />
            </a>
          </div>
          <p className="tag mt-10 text-muted">
            {COMPANY.name} · {city.name}, {COMPANY.region}, {COMPANY.country}
          </p>
        </div>
      </section>
    </>
  )
}
