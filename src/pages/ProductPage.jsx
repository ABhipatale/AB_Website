import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from 'lucide-react'

import Seo, { business, breadcrumbs, faqPage } from '../components/Seo'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionLabel from '../components/ui/SectionLabel'
import WhatsAppIcon from '../components/ui/WhatsAppIcon'
import { Orbit, tintBg } from '../components/sections/Products'
import Process from '../components/sections/Process'
import FAQ from '../components/sections/FAQ'
import Contact from '../components/sections/Contact'
import { COMPANY, whatsappLink } from '../lib/data'
import { PRODUCT_PAGES, pageByPath, productFaqs } from '../lib/pages'
import { enquire } from '../lib/enquire'

const STEPS = (name) => [
  { title: 'Ask for a free demo', desc: `Message us on WhatsApp and we will show you ${name}.` },
  { title: 'Set up for you', desc: 'We set it up with your business details and discuss any changes you need.' },
  { title: 'Start using it', desc: 'Your team starts using it, with our support whenever you need help.' },
]

const shot = (brand, src) => `/assets/${brand.toLowerCase()}/${brand.toLowerCase()}-${src}.webp`

/** A real app screenshot in a simple phone frame. */
function Phone({ src, alt, eager = false, className = '' }) {
  return (
    <div className={`gloss overflow-hidden rounded-[2rem] border-[6px] border-[#232323] bg-black ${className}`}>
      <img
        src={src}
        alt={alt}
        width="600"
        height="1290"
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : undefined}
        className="block h-auto w-full"
      />
    </div>
  )
}

/** Swipeable row of screenshots; arrow buttons scroll it on desktop. */
function ScreenGallery({ brand, screens }) {
  const row = useRef(null)
  const move = (dir) => row.current?.scrollBy({ left: dir * row.current.clientWidth * 0.8, behavior: 'smooth' })
  return (
    <div className="relative mt-12">
      <ul
        ref={row}
        tabIndex={0}
        aria-label={`${brand} app screens`}
        className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-6 [scrollbar-width:thin] sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0"
      >
        {screens.map((s) => (
          <li key={s.src} className="w-[68%] shrink-0 snap-start sm:w-[42%] lg:w-[calc((100%-3.75rem)/4)]">
            <Phone src={shot(brand, s.src)} alt={`${brand} ${s.title.toLowerCase()} screen — ${s.desc}`} />
            <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">{s.desc}</p>
          </li>
        ))}
      </ul>
      <div className="mt-2 hidden justify-end gap-2 lg:flex">
        {[
          [-1, ArrowLeft, 'Previous screens'],
          [1, ArrowRight, 'Next screens'],
        ].map(([dir, Icon, label]) => (
          <button
            key={label}
            type="button"
            onClick={() => move(dir)}
            aria-label={label}
            className="grid size-11 place-items-center rounded-full border border-line transition-colors hover:border-orange hover:text-orange"
          >
            <Icon className="size-4" />
          </button>
        ))}
      </div>
    </div>
  )
}

export default function ProductPage({ path }) {
  const p = pageByPath(path)
  const x = p.product
  const brand = x.brand
  const label = brand ? `${brand} — ${x.name}` : x.name
  const faqs = productFaqs(p)
  const others = PRODUCT_PAGES.filter((o) => o.path !== p.path)
  const demo = whatsappLink(`Hi ABnexa! I'd like a free demo of ${brand ?? `the ${x.name}`}.`)
  const custom = enquire({ type: 'SaaS product demo', message: `I'm interested in a customised version of ${brand ?? `the ${x.name}`}.` })

  // section numbers follow whichever sections this product has
  let n = 0
  const next = () => String(++n).padStart(2, '0')

  const schemas = [
    {
      '@type': 'SoftwareApplication',
      '@id': `${COMPANY.url}/${p.path}#software`,
      name: brand ?? x.name,
      alternateName: brand ? [x.name, p.h1] : p.h1,
      applicationCategory: 'BusinessApplication',
      description: x.desc,
      featureList: p.featureGroups ? p.featureGroups.flatMap((g) => g.items) : x.features,
      url: `${COMPANY.url}/${p.path}`,
      image: brand ? `${COMPANY.url}${shot(brand, 'dashboard')}` : `${COMPANY.url}${x.image}`,
      ...(brand && { operatingSystem: 'Web, Android, iOS', inLanguage: ['mr', 'hi', 'en'] }),
      ...(p.pricing && {
        offers: p.pricing.map((pl) => ({
          '@type': 'Offer',
          name: `${brand} ${pl.name}`,
          price: pl.price.replace(/[^\d]/g, ''),
          priceCurrency: 'INR',
        })),
      }),
      publisher: business,
    },
    breadcrumbs([['Home', ''], [label, p.path]]),
    faqPage(faqs),
  ]

  return (
    <>
      <Seo title={p.metaTitle} description={p.metaDescription} path={p.path} imageAlt={x.imageAlt} schemas={schemas} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pb-20 pt-28 sm:pt-36">
        <div className="wrap">
          <Breadcrumb items={[['Home', '/'], ['Products', '/#products'], [brand ?? x.name]]} />

          <div className="mt-10 grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="tag reveal flex flex-wrap items-center gap-3 text-muted">
                <span className="rule" /> {brand ? `${x.name} by ABnexa` : 'SaaS by ABnexa'} · {x.audience}
              </p>
              <h1 className="reveal lines mt-6 font-display text-[2.4rem] font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.1rem]">
                <span className="ln">
                  <span style={{ '--d': '60ms' }}>{brand ?? x.name}</span>
                </span>{' '}
                <span className="ln">
                  <span className="text-gloss text-[0.62em] leading-tight" style={{ '--d': '170ms' }}>
                    {p.h1}
                  </span>
                </span>
              </h1>
              <p className="reveal mt-8 max-w-xl text-lg leading-relaxed text-muted" style={{ '--d': '260ms' }}>
                {x.desc}
              </p>
              <div className="reveal mt-10 flex flex-wrap items-center gap-x-8 gap-y-5" style={{ '--d': '340ms' }}>
                <a href={demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <WhatsAppIcon /> {brand ? 'Free demo — click here' : 'Request a demo'} <ArrowUpRight className="arrow size-4" />
                </a>
                {x.appUrl ? (
                  <a href={x.appUrl} target="_blank" rel="noopener" className="link font-semibold">
                    Open the {brand} app
                  </a>
                ) : (
                  <a href="#contact" onClick={custom} className="link font-semibold">
                    Ask about customization
                  </a>
                )}
              </div>
              {p.pricing && (
                <p className="reveal mt-6 text-sm text-muted" style={{ '--d': '400ms' }}>
                  From <span className="font-semibold text-fg">{p.pricing[0].price}{p.pricing[0].per}</span> · free demo · no auto-debit
                </p>
              )}
            </div>

            {brand ? (
              <div className="reveal relative mx-auto w-full max-w-[19rem]" style={{ '--d': '200ms' }}>
                <div aria-hidden="true" className="absolute -inset-10 rounded-full opacity-70 blur-2xl" style={tintBg(x.tint, '40')} />
                <Phone src={shot(brand, 'dashboard')} alt={`${brand} app dashboard showing today's jars, cash and udhari`} eager className="relative" />
                <span className="gloss absolute -left-6 bottom-10 flex items-center gap-2 rounded-2xl border border-line bg-panel px-3 py-2 sm:-left-12">
                  <img src={x.image} alt="" width="32" height="32" className="size-8 object-contain" />
                  <span className="text-xs font-semibold leading-tight">
                    {brand}
                    <span className="block font-normal text-muted">by ABnexa</span>
                  </span>
                </span>
              </div>
            ) : (
              <div
                className="reveal gloss relative grid aspect-[4/3] place-items-center overflow-hidden rounded-[1.75rem] border border-line"
                style={{ ...tintBg(x.tint), '--d': '200ms' }}
              >
                <div className="relative grid size-48 place-items-center sm:size-60">
                  <Orbit />
                  <img
                    src={x.image}
                    alt={x.imageAlt}
                    width="240"
                    height="240"
                    fetchPriority="high"
                    className="relative size-36 object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.55)] sm:size-44"
                  />
                </div>
                <span className="tag absolute right-5 top-5 rounded-full border border-line bg-night/70 px-2.5 py-1">SaaS</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Problems it solves ── */}
      <section className="bg-night-2 py-20 sm:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel n={next()}>Why it exists</SectionLabel>
            <h2 className="reveal mt-6 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Built to replace <span className="text-muted">registers and guesswork.</span>
            </h2>
            {p.audienceList && (
              <div className="reveal mt-10">
                <h3 className="tag text-muted">Who uses {brand}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.audienceList.map((a) => (
                    <li key={a} className="rounded-full border border-line bg-panel px-3 py-1.5 text-sm text-fg/85">
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <ol className="border-t border-line">
            {p.problems.map((t, i) => (
              <li key={t} className="reveal flex gap-5 border-b border-line py-6" style={{ '--d': `${i * 60}ms` }}>
                <span className="tag pt-1 text-orange">0{i + 1}</span>
                <span className="text-lg leading-relaxed text-fg/85">{t}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Real app screens ── */}
      {p.screens && (
        <section className="py-20 sm:py-28">
          <div className="wrap">
            <SectionLabel n={next()}>Inside the app</SectionLabel>
            <div className="mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <h2 className="reveal max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                See {brand} <span className="text-muted">in action.</span>
              </h2>
              <p className="reveal max-w-sm text-sm text-muted">Real screens from the {brand} app. Customer names and numbers are sample data.</p>
            </div>
            <ScreenGallery brand={brand} screens={p.screens} />
          </div>
        </section>
      )}

      {/* ── Features ── */}
      <section className={`py-20 sm:py-28 ${p.screens ? 'bg-night-2' : ''}`}>
        <div className="wrap">
          <SectionLabel n={next()}>What it does</SectionLabel>
          <h2 className="reveal mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Everything in one place, <span className="text-muted">nothing extra to learn.</span>
          </h2>
          {p.featureGroups ? (
            <>
              <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {p.featureGroups.map((g, i) => (
                  <li key={g.title} className="gloss reveal rounded-[1.5rem] border border-line bg-panel p-7" style={{ '--d': `${(i % 3) * 70}ms` }}>
                    <span className="tag text-orange">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="mt-4 font-display text-xl font-semibold">{g.title}</h3>
                    <ul className="mt-5 space-y-3">
                      {g.items.map((it) => (
                        <li key={it} className="flex gap-3 text-sm leading-relaxed text-fg/80">
                          <Check className="mt-0.5 size-4 shrink-0 text-orange" strokeWidth={3} />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
              {p.extras && (
                <ul className="reveal mt-8 flex flex-wrap gap-2">
                  {p.extras.map((e) => (
                    <li key={e} className="rounded-full border border-line px-3.5 py-1.5 text-sm text-fg/80">
                      {e}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <ul className="mt-14 grid gap-4 md:grid-cols-3">
              {x.features.map((f, i) => (
                <li key={f} className="gloss reveal rounded-[1.5rem] border border-line bg-panel p-7" style={{ '--d': `${i * 80}ms` }}>
                  <span className="grid size-11 place-items-center rounded-full border border-orange/50 font-mono text-sm text-orange">
                    0{i + 1}
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold">{f}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{p.featureDetail[i]}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* ── Pricing ── */}
      {p.pricing && (
        <section className="py-20 sm:py-28">
          <div className="wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionLabel n={next()}>Pricing</SectionLabel>
              <h2 className="reveal mt-6 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Simple plans. <span className="text-muted">Every feature included.</span>
              </h2>
              <ul className="reveal mt-8 space-y-3">
                {p.pricingIncludes.map((it) => (
                  <li key={it} className="flex gap-3 leading-relaxed text-fg/80">
                    <Check className="mt-1 size-4 shrink-0 text-orange" strokeWidth={3} />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {p.pricing.map((pl, i) => (
                <li
                  key={pl.name}
                  className={`gloss reveal relative flex flex-col rounded-[1.75rem] border bg-panel p-7 ${pl.best ? 'border-orange/70' : 'border-line'}`}
                  style={{ '--d': `${i * 80}ms` }}
                >
                  {pl.best && (
                    <span className="tag absolute right-5 top-5 rounded-full bg-orange px-2.5 py-1 text-night">Best value</span>
                  )}
                  <span className="tag text-muted">{pl.name}</span>
                  <span className="mt-4 font-display text-5xl font-bold tracking-tight">
                    {pl.price}
                    <span className="ml-1 text-base font-medium text-muted">{pl.per}</span>
                  </span>
                  <span className="mt-2 text-sm text-muted">{pl.note}</span>
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn mt-8 justify-center ${pl.best ? 'btn-primary' : 'btn-dark'}`}
                  >
                    Start with a free demo
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <Process
        n={next()}
        label="Getting started"
        heading={
          <>
            Up and running <span className="text-muted">in three steps.</span>
          </>
        }
        steps={STEPS(brand ?? `the ${x.name}`)}
      />

      <FAQ items={faqs} id="product-faq" n={next()} title={`${brand ?? x.name} — questions, answered.`} />

      {/* ── Other products ── */}
      <section className="py-20 sm:py-24">
        <div className="wrap">
          <SectionLabel n={next()}>More from ABnexa</SectionLabel>
          <h2 className="reveal mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">Our other SaaS products</h2>
          <ul className="mt-10 grid gap-3 md:grid-cols-3">
            {others.map((o) => (
              <li key={o.path} className="reveal">
                <Link
                  to={`/${o.path}`}
                  className="gloss group flex h-full items-center gap-4 rounded-2xl border border-line bg-panel p-4 pr-5 transition-colors hover:border-orange/60"
                >
                  <span className="grid size-14 shrink-0 place-items-center rounded-xl ring-1 ring-line" style={tintBg(o.product.tint, '40')}>
                    <img src={o.product.image} alt="" width="48" height="48" loading="lazy" className="size-10 object-contain" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="tag block text-muted">{o.product.audience}</span>
                    <span className="mt-1 block font-display font-semibold leading-snug">{o.product.brand ?? o.product.name}</span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-orange transition-transform group-hover:rotate-45" />
                </Link>
              </li>
            ))}
            <li className="reveal">
              <Link
                to="/services/custom-software-development"
                className="group flex h-full flex-col justify-center rounded-2xl border border-dashed border-muted/40 p-5 transition-colors hover:border-orange hover:bg-orange-soft"
              >
                <span className="tag text-muted">Need something different?</span>
                <span className="mt-1 flex items-center gap-2 font-display text-lg font-semibold">
                  We build custom software too <ArrowRight className="size-4 text-orange" />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <Contact n={next()} defaultType="SaaS product demo" defaultMessage={`I'd like a free demo of ${brand ?? `the ${x.name}`}.`} />
    </>
  )
}
