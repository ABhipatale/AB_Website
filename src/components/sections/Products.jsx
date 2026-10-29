import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'

import SectionLabel from '../ui/SectionLabel'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import { PRODUCTS, whatsappLink } from '../../lib/data'
import { enquire } from '../../lib/enquire'

// a faint glow in the product's own colour on charcoal
export const tintBg = (tint, a = '2e') => ({
  background: `radial-gradient(circle at 50% 45%, ${tint}${a} 0%, transparent 62%), var(--color-panel)`,
})

/** Thin concentric rings behind the product logo — echoes the hero orbit. */
export function Orbit() {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className="absolute inset-0 m-auto size-[125%] text-fg/[0.09]">
      <circle cx="100" cy="100" r="62" fill="none" stroke="currentColor" />
      <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeDasharray="2 5" />
      <circle cx="100" cy="100" r="98" fill="none" stroke="currentColor" />
      <circle cx="100" cy="20" r="2.5" className="fill-orange" />
    </svg>
  )
}

/**
 * Product showcase: pick a product on the left (or on top, on phones) and
 * its details open in the large panel. Accessible tabs with arrow keys.
 */
export default function Products() {
  const [active, setActive] = useState(0)
  const tabs = useRef([])

  const onKey = (e) => {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key]
    if (!step) return
    e.preventDefault()
    const next = (active + step + PRODUCTS.length) % PRODUCTS.length
    setActive(next)
    tabs.current[next]?.focus()
  }

  return (
    <section id="products" className="bg-night-2 py-20 sm:py-28">
      <div className="wrap">
        <SectionLabel n="03">SaaS products</SectionLabel>
        <div className="mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="reveal max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Our SaaS products, <span className="text-muted">ready to run your business.</span>
          </h2>
          <p className="reveal max-w-sm text-muted">
            Ready-to-use software built and maintained by ABnexa. Ask for a demo or a version tailored to you.
          </p>
        </div>

        <div className="reveal mt-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
          {/* product picker */}
          <div className="flex flex-col gap-3">
            <div role="tablist" aria-label="SaaS products" aria-orientation="vertical" className="flex flex-col gap-3" onKeyDown={onKey}>
              {PRODUCTS.map((p, i) => {
                const on = active === i
                return (
                  <button
                    key={p.name}
                    ref={(el) => (tabs.current[i] = el)}
                    type="button"
                    role="tab"
                    id={`product-tab-${i}`}
                    aria-selected={on}
                    aria-controls={`product-panel-${i}`}
                    tabIndex={on ? 0 : -1}
                    onClick={() => setActive(i)}
                    className={`group relative flex items-center gap-4 overflow-hidden rounded-2xl border p-3 pr-5 text-left transition-[background-color,border-color,box-shadow] duration-300 sm:p-4 ${
                      on
                        ? 'gloss border-line bg-panel'
                        : 'border-transparent hover:border-line hover:bg-panel/60'
                    }`}
                  >
                    <span
                      className={`absolute inset-y-3 left-0 w-[3px] rounded-r bg-orange transition-transform duration-300 ${
                        on ? 'scale-y-100' : 'scale-y-0'
                      }`}
                    />
                    <span className="grid size-14 shrink-0 place-items-center rounded-xl ring-1 ring-line sm:size-16" style={tintBg(p.tint, '40')}>
                      <img src={p.image} alt="" width="64" height="64" loading="lazy" className="size-10 object-contain sm:size-12" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className={`tag block ${on ? 'text-orange' : 'text-muted'}`}>0{i + 1} · {p.audience}</span>
                      <span className="mt-1 block font-display text-base font-semibold leading-snug sm:text-lg">{p.name}</span>
                    </span>
                    <ArrowRight
                      className={`size-4 shrink-0 transition-[transform,opacity] duration-300 ${
                        on ? 'translate-x-0 text-orange opacity-100' : '-translate-x-1 opacity-0 group-hover:opacity-60'
                      }`}
                    />
                  </button>
                )
              })}
            </div>

            <a
              href="#contact"
              onClick={enquire({ type: 'Custom software / web app' })}
              className="mt-2 hidden rounded-2xl border border-dashed border-muted/40 p-5 transition-colors hover:border-orange hover:bg-orange-soft lg:block"
            >
              <span className="tag text-muted">Need something different?</span>
              <span className="mt-1 flex items-center gap-2 font-display text-lg font-semibold">
                We build custom software too <ArrowRight className="size-4 text-orange" />
              </span>
            </a>
          </div>

          {/* detail panel */}
          {PRODUCTS.map((p, i) => (
            <article
              key={p.name}
              role="tabpanel"
              id={`product-panel-${i}`}
              aria-labelledby={`product-tab-${i}`}
              hidden={active !== i}
              className="gloss overflow-hidden rounded-[1.75rem] border border-line bg-panel"
            >
              <div className="relative grid aspect-[4/3] place-items-center overflow-hidden sm:aspect-[2/1] border-b border-line" style={tintBg(p.tint)}>
                <div className="relative grid size-40 place-items-center sm:size-52">
                  <Orbit />
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    width="208"
                    height="208"
                    loading="lazy"
                    className="relative size-32 object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.55)] sm:size-40"
                  />
                </div>
                <span className="tag absolute left-5 top-5 text-muted">0{i + 1} / 0{PRODUCTS.length}</span>
                <span className="tag absolute right-5 top-5 rounded-full border border-line bg-night/70 px-2.5 py-1 text-fg">SaaS</span>
              </div>

              <div className="p-6 sm:p-9">
                <p className="tag text-orange">{p.audience}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                  {p.brand && <span className="text-gloss">{p.brand} </span>}
                  {p.brand ? <span className="text-muted">— {p.name}</span> : p.name}
                </h3>
                <p className="mt-3 max-w-xl leading-relaxed text-muted sm:text-lg">{p.desc}</p>

                <ul className="mt-6 grid gap-3 border-t border-line pt-6 sm:grid-cols-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 font-medium">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-orange-soft text-orange">
                        <Check className="size-3.5" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <a
                    href={whatsappLink(`Hi ABnexa! I'd like a free demo of ${p.brand ?? `the ${p.name}`}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <WhatsAppIcon /> Request a demo
                    <ArrowUpRight className="arrow size-4" />
                  </a>
                  <a
                    href="#contact"
                    onClick={enquire({
                      type: 'Custom software / web app',
                      message: `I'm interested in a customised version of the ${p.name}.`,
                    })}
                    className="link text-sm font-semibold"
                  >
                    Ask about customization
                  </a>
                  <Link to={p.page} className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-orange">
                    View product <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
