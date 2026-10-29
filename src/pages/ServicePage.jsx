import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'

import Seo, { business, breadcrumbs, faqPage } from '../components/Seo'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionLabel from '../components/ui/SectionLabel'
import Preview from '../components/ui/Preview'
import WhatsAppIcon from '../components/ui/WhatsAppIcon'
import Process from '../components/sections/Process'
import FAQ from '../components/sections/FAQ'
import Contact from '../components/sections/Contact'
import { COMPANY, PRODUCTS, WORK, whatsappLink } from '../lib/data'
import { CITIES } from '../lib/cities'
import { SERVICE_PAGES, pageByPath } from '../lib/pages'
import { enquire } from '../lib/enquire'

export default function ServicePage({ path }) {
  const p = pageByPath(path)
  const work = WORK.filter((w) => p.work.includes(w.name))
  const related = p.related.map(pageByPath)
  const ask = enquire({ type: p.type })

  const schemas = [
    {
      '@type': 'Service',
      '@id': `${COMPANY.url}/${p.path}#service`,
      name: p.name,
      serviceType: p.name,
      description: p.metaDescription,
      url: `${COMPANY.url}/${p.path}`,
      provider: business,
      areaServed: { '@type': 'State', name: COMPANY.region },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: p.name,
        itemListElement: p.includes.map((x) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: x.title, description: x.desc },
        })),
      },
    },
    breadcrumbs([['Home', ''], [p.name, p.path]]),
    faqPage(p.faqs),
  ]

  return (
    <>
      <Seo title={p.metaTitle} description={p.metaDescription} path={p.path} imageAlt={`${p.name} — ${COMPANY.name}`} schemas={schemas} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pb-20 pt-28 sm:pt-36">
        <div className="wrap">
          <Breadcrumb items={[['Home', '/'], ['Services', '/#services'], [p.name]]} />

          <div className="mt-10 grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="tag reveal flex items-center gap-3 text-muted">
                <span className="rule" /> {p.eyebrow}
              </p>
              <h1 className="reveal lines mt-6 font-display text-[2.4rem] font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.1rem]">
                <span className="ln">
                  <span style={{ '--d': '60ms' }}>{p.h1[0]}</span>
                </span>{' '}
                <span className="ln">
                  <span className="text-gloss" style={{ '--d': '170ms' }}>
                    {p.h1[1]}
                  </span>
                </span>
              </h1>
              <p className="reveal mt-8 max-w-xl text-lg leading-relaxed text-muted" style={{ '--d': '260ms' }}>
                {p.intro}
              </p>
              <div className="reveal mt-10 flex flex-wrap items-center gap-x-8 gap-y-5" style={{ '--d': '340ms' }}>
                <a href="#contact" onClick={ask} className="btn btn-primary">
                  {p.cta} <ArrowRight className="arrow size-4" />
                </a>
                <a
                  href={whatsappLink(`Hi ABnexa! I'd like to know more about ${p.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link inline-flex items-center gap-2 font-semibold"
                >
                  <WhatsAppIcon /> Ask on WhatsApp
                </a>
              </div>
            </div>

            <div className="reveal gloss relative rounded-[1.75rem] border border-line bg-panel p-5 sm:p-7" style={{ '--d': '200ms' }}>
              <span className="tag absolute left-6 top-5 text-muted">{p.groupTitle}</span>
              <Preview variant={p.preview} className="mt-6 w-full" />
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.includes.slice(0, 4).map((x) => (
                  <li key={x.title} className="rounded-full border border-line bg-night/60 px-3 py-1 text-xs font-medium">
                    {x.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── What's included ── */}
      <section className="bg-night-2 py-20 sm:py-28">
        <div className="wrap">
          <SectionLabel n="01">What&apos;s included</SectionLabel>
          <h2 className="reveal mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Everything you need, <span className="text-muted">nothing you don&apos;t.</span>
          </h2>
          {p.honesty && (
            <p className="reveal mt-6 max-w-2xl border-l-2 border-orange pl-5 leading-relaxed text-fg/80">{p.honesty}</p>
          )}
          <ul className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {p.includes.map((x, i) => (
              <li key={x.title} className="gloss reveal bg-panel p-6 sm:p-7" style={{ '--d': `${i * 60}ms` }}>
                <span className="tag text-orange">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-display text-xl font-semibold">{x.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{x.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Who it's for + real work ── */}
      <section className="py-20 sm:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel n="02">Who it&apos;s for</SectionLabel>
            <h2 className="reveal mt-6 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Built for businesses <span className="text-muted">like yours.</span>
            </h2>
            <p className="reveal mt-6 max-w-md text-lg leading-relaxed text-muted">{p.audienceNote}</p>
          </div>
          <div>
            <ul className="grid border-t border-line sm:grid-cols-2 sm:gap-x-8">
              {p.audience.map((a, i) => (
                <li key={a} className="reveal flex items-center gap-3 border-b border-line py-4" style={{ '--d': `${i * 40}ms` }}>
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-orange-soft text-orange">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  {a}
                </li>
              ))}
            </ul>

            {work.length > 0 && (
              <div className="reveal mt-12">
                <p className="tag text-muted">Related work by ABnexa</p>
                <ul className="mt-4 grid gap-3">
                  {work.map((w) => (
                    <li key={w.name}>
                      <a
                        href={w.href ?? '/#work'}
                        {...(w.href ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="gloss group flex items-center gap-4 rounded-2xl border border-line bg-panel p-3 pr-5 transition-colors hover:border-orange/60"
                      >
                        <span className="grid size-14 shrink-0 place-items-center overflow-hidden rounded-xl border border-line bg-night">
                          <img src={w.image} alt={w.imageAlt} width="56" height="56" loading="lazy" className="size-[82%] rounded-lg object-contain" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="tag block text-orange">{w.kind}</span>
                          <span className="mt-1 block font-display font-semibold">{w.name}</span>
                        </span>
                        <ArrowUpRight className="size-4 shrink-0 text-orange transition-transform group-hover:rotate-45" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <Process n="03" />

      <FAQ items={p.faqs} id="service-faq" n="04" title={`${p.name} — questions, answered.`} />

      {/* ── Keep exploring (internal links) ── */}
      <section className="py-20 sm:py-24">
        <div className="wrap">
          <SectionLabel n="05">Keep exploring</SectionLabel>
          <h2 className="reveal mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">Related services</h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {related.map((r) => (
              <li key={r.path} className="reveal">
                <Link
                  to={`/${r.path}`}
                  className="gloss group flex h-full items-center justify-between gap-6 rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-orange/60"
                >
                  <span>
                    <span className="tag block text-muted">{r.eyebrow}</span>
                    <span className="mt-2 block font-display text-xl font-semibold">{r.name}</span>
                  </span>
                  <ArrowUpRight className="size-5 shrink-0 text-orange transition-transform group-hover:rotate-45" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="reveal mt-12 grid gap-8 border-t border-line pt-8 lg:grid-cols-2">
            <p className="text-sm leading-relaxed text-muted">
              <span className="tag mb-2 block text-fg/80">All services</span>
              {SERVICE_PAGES.filter((s) => s.path !== p.path).map((s, i, all) => (
                <span key={s.path}>
                  <Link to={`/${s.path}`} className="text-fg/85 transition-colors hover:text-orange">
                    {s.name}
                  </Link>
                  {i < all.length - 1 && ' · '}
                </span>
              ))}
            </p>
            <p className="text-sm leading-relaxed text-muted">
              <span className="tag mb-2 block text-fg/80">Our SaaS products</span>
              {PRODUCTS.map((x, i) => (
                <span key={x.name}>
                  <Link to={x.page} className="text-fg/85 transition-colors hover:text-orange">
                    {x.name}
                  </Link>
                  {i < PRODUCTS.length - 1 && ' · '}
                </span>
              ))}
              <span className="mt-4 block">
                Based in {COMPANY.baseCity}, working with businesses in{' '}
                {CITIES.map((c, i) => (
                  <span key={c.slug}>
                    <Link to={`/${c.path}`} className="text-fg/85 transition-colors hover:text-orange">
                      {c.name}
                    </Link>
                    {i < CITIES.length - 2 ? ', ' : i === CITIES.length - 2 ? ' and ' : '.'}
                  </span>
                ))}
              </span>
            </p>
          </div>
        </div>
      </section>

      <Contact n="06" defaultType={p.type} />
    </>
  )
}
