import { useState } from 'react'
import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  MapPin, Phone, ArrowRight, Check, Plus, Star, ArrowUpRight,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'

import Button from '../components/ui/Button'
import { stagger, fadeUp, viewport, EASE } from '../lib/motion'
import { grad } from '../lib/palette'
import { SERVICES, REASONS, COMPANY } from '../lib/data'
import { getCity, cityFaqs, cityKeywords, CITIES } from '../lib/cities'

export default function CityPage({ slug }) {
  const city = getCity(slug)
  const faqs = cityFaqs(city)
  const [open, setOpen] = useState(0)

  const pageUrl = `${COMPANY.url}/${city.path}`
  const title = `Website Developer in ${city.name} | Web Development Company — ${COMPANY.name}`
  const description = `Looking for a website developer in ${city.name}? ${COMPANY.name} builds modern, responsive, SEO-friendly websites, e-commerce stores, mobile apps & custom software for ${city.name} businesses. Call ${COMPANY.phone}.`

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${pageUrl}#business`,
    name: `${COMPANY.name} — ${city.name}`,
    image: `${COMPANY.url}/assets/Ab.png`,
    url: pageUrl,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: COMPANY.region,
      postalCode: city.pin,
      addressCountry: COMPANY.countryCode,
    },
    geo: { '@type': 'GeoCoordinates', latitude: city.geo.lat, longitude: city.geo.lng },
    areaServed: [city.name, ...city.nearby].map((n) => ({ '@type': 'City', name: n })),
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
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${COMPANY.url}/assets/Ab.png`} />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Head>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white pb-16 pt-32 sm:pt-36">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top,#000_5%,transparent_70%)]" />
        <div className="pointer-events-none absolute -right-24 -top-24 size-[420px] rounded-full bg-brand/10 blur-[130px]" />

        <div className="container-x relative">
          {/* breadcrumb */}
          <nav className="mb-6 flex items-center gap-1.5 text-sm text-muted" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand">Home</Link>
            <span>/</span>
            <span className="font-semibold text-ink">{city.name}</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div variants={stagger(0.1)} initial="hidden" animate="show">
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-semibold text-brand shadow-soft"
              >
                <MapPin className="size-3.5" /> Serving {city.name}, {COMPANY.region}
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="mt-6 text-[2.3rem] font-extrabold leading-[1.06] tracking-tight text-ink sm:text-5xl"
              >
                Website Developer in <span className="text-gradient">{city.name}</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {city.intro}
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="#city-contact" size="lg" icon={ArrowRight}>
                  Get Free Consultation
                </Button>
                <Button href={`tel:${COMPANY.phoneRaw}`} size="lg" variant="outline" icon={Phone}>
                  {COMPANY.phone}
                </Button>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-6 flex items-center gap-2 text-sm text-muted">
                <span className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
                </span>
                Premium quality for {city.name} businesses
              </motion.div>
            </motion.div>

            {/* banner visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="relative"
            >
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-brand/15 to-sky/10 blur-2xl" />
              <div className="overflow-hidden rounded-2xl border border-line shadow-lift">
                <img
                  src="/assets/banner1.png"
                  alt={`Website development in ${city.name} — AB Technology Solution`}
                  width="1694"
                  height="929"
                  className="block aspect-[1694/929] w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Services in {city} ── */}
      <section className="relative py-14 lg:py-20">
        <div className="container-x">
          <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={viewport} className="mx-auto max-w-2xl text-center">
            <motion.h2 variants={fadeUp} className="text-3xl font-extrabold text-ink sm:text-4xl">
              Web development services in <span className="text-gradient">{city.name}</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-muted">
              Everything a {city.name} business needs to launch, grow and stand out online — built to premium standards.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-line bg-white p-5 shadow-soft"
              >
                <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${grad(i)}`} />
                <div className="flex items-center gap-3">
                  <span className={`grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${grad(i)} text-white`}>
                    <s.icon className="size-5" />
                  </span>
                  <h3 className="font-bold text-ink">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Why choose us in {city} ── */}
      <section className="relative overflow-hidden py-14 lg:py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-soft/40 to-white" />
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
              Why {city.name} businesses choose us
            </h2>
          </div>
          <motion.div
            variants={stagger(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {REASONS.map((r, i) => (
              <motion.div key={r.title} variants={fadeUp} className="rounded-2xl border border-line bg-white p-5 shadow-soft">
                <span className={`grid size-11 place-items-center rounded-xl bg-gradient-to-br ${grad(i)} text-white`}>
                  <r.icon className="size-5" />
                </span>
                <p className="mt-3 font-bold text-ink">{r.title}</p>
                <p className="mt-1 text-sm text-muted">{r.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ + Map ── */}
      <section className="relative py-14 lg:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
              {city.name} — frequently asked questions
            </h2>
            <div className="mt-8 space-y-3">
              {faqs.map((f, i) => {
                const isOpen = open === i
                return (
                  <div key={f.q} className={`overflow-hidden rounded-2xl border bg-white ${isOpen ? 'border-brand/30 shadow-soft' : 'border-line'}`}>
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="font-semibold text-ink">{f.q}</span>
                      <span className={`grid size-7 shrink-0 place-items-center rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 bg-brand text-white' : 'bg-brand-soft text-brand'}`}>
                        <Plus className="size-4" />
                      </span>
                    </button>
                    {isOpen && <p className="px-5 pb-4 text-sm leading-relaxed text-muted">{f.a}</p>}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Map + areas */}
          <div>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Areas we serve near {city.name}</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {nearbyLinks.map((n) =>
                n.to ? (
                  <Link key={n.name} to={`/${n.to}`} className="inline-flex items-center gap-1 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-semibold text-ink-soft shadow-soft hover:text-brand">
                    <MapPin className="size-3.5 text-brand" /> {n.name}
                  </Link>
                ) : (
                  <span key={n.name} className="inline-flex items-center gap-1 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium text-muted">
                    <MapPin className="size-3.5 text-brand" /> {n.name}
                  </span>
                ),
              )}
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl border border-line shadow-soft">
              <iframe
                title={`AB Technology Solution — ${city.name}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(`${city.name}, ${COMPANY.region}, India`)}&output=embed`}
                className="h-[320px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section id="city-contact" className="relative py-14 lg:py-20">
        <div className="container-x">
          <div className="gradient-brand-animated relative overflow-hidden rounded-[2rem] px-8 py-14 text-center text-white shadow-glow sm:px-16">
            <div className="bg-grid-light pointer-events-none absolute inset-0 opacity-20" />
            <h2 className="relative text-3xl font-extrabold sm:text-4xl">
              Ready to build your website in {city.name}?
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-white/85">
              Get a free consultation and a clear, fixed quote for your {city.name} business.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href={`tel:${COMPANY.phoneRaw}`} size="lg" variant="gold" icon={Phone}>
                Call {COMPANY.phone}
              </Button>
              <Button
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="outline"
                icon={FaWhatsapp}
                className="!border-white/30 !bg-white/10 !text-white"
              >
                WhatsApp Us
              </Button>
            </div>
            <p className="relative mt-6 flex items-center justify-center gap-2 text-sm text-white/80">
              <MapPin className="size-4" /> {COMPANY.name} · {city.name}, {COMPANY.region}, {COMPANY.country}
            </p>
          </div>

          {/* internal links to other city pages */}
          <div className="mt-10 rounded-3xl border border-line bg-surface p-6">
            <p className="text-sm font-bold uppercase tracking-wide text-muted">We also build websites in</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {CITIES.filter((c) => c.slug !== city.slug).map((c) => (
                <Link
                  key={c.slug}
                  to={`/${c.path}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink-soft shadow-soft hover:text-brand"
                >
                  Website Developer in {c.name}
                  <ArrowUpRight className="size-3.5 text-brand" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
