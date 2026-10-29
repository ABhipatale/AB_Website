import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

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
  { title: 'Ask for a demo', desc: `Message us on WhatsApp and we will show you the ${name}.` },
  { title: 'Set up for you', desc: 'We set it up with your business details and discuss any changes you need.' },
  { title: 'Start using it', desc: 'Your team starts using it, with our support whenever you need help.' },
]

export default function ProductPage({ path }) {
  const p = pageByPath(path)
  const x = p.product
  const faqs = productFaqs(p)
  const others = PRODUCT_PAGES.filter((o) => o.path !== p.path)
  const demo = whatsappLink(`Hi ABnexa! I'd like a demo of the ${x.name}.`)
  const custom = enquire({ type: 'SaaS product demo', message: `I'm interested in a customised version of the ${x.name}.` })

  const schemas = [
    {
      '@type': 'SoftwareApplication',
      '@id': `${COMPANY.url}/${p.path}#software`,
      name: x.name,
      alternateName: p.h1,
      applicationCategory: 'BusinessApplication',
      description: x.desc,
      featureList: x.features,
      url: `${COMPANY.url}/${p.path}`,
      image: `${COMPANY.url}${x.image}`,
      publisher: business,
    },
    breadcrumbs([['Home', ''], [x.name, p.path]]),
    faqPage(faqs),
  ]

  return (
    <>
      <Seo title={p.metaTitle} description={p.metaDescription} path={p.path} imageAlt={x.imageAlt} schemas={schemas} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pb-20 pt-28 sm:pt-36">
        <div className="wrap">
          <Breadcrumb items={[['Home', '/'], ['Products', '/#products'], [x.name]]} />

          <div className="mt-10 grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="tag reveal flex flex-wrap items-center gap-3 text-muted">
                <span className="rule" /> SaaS by ABnexa · {x.audience}
              </p>
              <h1 className="reveal lines mt-6 font-display text-[2.4rem] font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.1rem]">
                <span className="ln">
                  <span style={{ '--d': '60ms' }}>{x.name}</span>
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
                  <WhatsAppIcon /> Request a demo <ArrowUpRight className="arrow size-4" />
                </a>
                <a href="#contact" onClick={custom} className="link font-semibold">
                  Ask about customization
                </a>
              </div>
            </div>

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
          </div>
        </div>
      </section>

      {/* ── Problems it solves ── */}
      <section className="bg-night-2 py-20 sm:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel n="01">Why it exists</SectionLabel>
            <h2 className="reveal mt-6 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Built to replace <span className="text-muted">registers and guesswork.</span>
            </h2>
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

      {/* ── Features ── */}
      <section className="py-20 sm:py-28">
        <div className="wrap">
          <SectionLabel n="02">What it does</SectionLabel>
          <h2 className="reveal mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Everything in one place, <span className="text-muted">nothing extra to learn.</span>
          </h2>
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
        </div>
      </section>

      <Process
        n="03"
        label="Getting started"
        heading={
          <>
            Up and running <span className="text-muted">in three steps.</span>
          </>
        }
        steps={STEPS(x.name)}
      />

      <FAQ items={faqs} id="product-faq" n="04" title={`${x.name} — questions, answered.`} />

      {/* ── Other products ── */}
      <section className="py-20 sm:py-24">
        <div className="wrap">
          <SectionLabel n="05">More from ABnexa</SectionLabel>
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
                    <span className="mt-1 block font-display font-semibold leading-snug">{o.product.name}</span>
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

      <Contact n="06" defaultType="SaaS product demo" defaultMessage={`I'd like a demo of the ${x.name}.`} />
    </>
  )
}
