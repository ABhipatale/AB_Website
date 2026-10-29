import { useState } from 'react'
import { ArrowRight, Plus } from 'lucide-react'

import SectionLabel from '../ui/SectionLabel'
import Preview from '../ui/Preview'
import { SERVICE_GROUPS } from '../../lib/data'

const isDesktop = () => window.matchMedia('(min-width: 1024px)').matches

function Detail({ s, compact = false }) {
  return (
    <div>
      {!compact && <Preview variant={s.preview} className="w-full rounded-2xl bg-paper-2" />}
      <p className={`${compact ? '' : 'mt-6'} leading-relaxed text-gray`}>{s.desc}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {s.includes.map((x) => (
          <li key={x} className="rounded-full border border-line px-3 py-1 text-xs font-medium">
            {x}
          </li>
        ))}
      </ul>
      <a href="#contact" className="link mt-6 inline-flex items-center gap-2 text-sm font-semibold">
        {s.cta} <ArrowRight className="size-4" />
      </a>
    </div>
  )
}

/**
 * Editorial list: hover / focus / click a row to preview it on the right
 * (desktop). On smaller screens each row expands in place.
 */
export default function Services() {
  const [active, setActive] = useState(0)
  const current = SERVICE_GROUPS[active]

  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="wrap">
        <SectionLabel n="02">Services</SectionLabel>
        <h2 className="reveal mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          What we can build <span className="text-gray">for your business.</span>
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <ul className="border-t border-line">
            {SERVICE_GROUPS.map((s, i) => {
              const on = active === i
              return (
                <li key={s.title} className="reveal border-b border-line" style={{ '--d': `${i * 50}ms` }}>
                  <button
                    type="button"
                    onClick={() => setActive(on && !isDesktop() ? -1 : i)}
                    onMouseEnter={() => isDesktop() && setActive(i)}
                    onFocus={() => setActive(i)}
                    aria-expanded={on}
                    className="group flex w-full items-center gap-5 py-6 text-left"
                  >
                    <span className={`tag w-6 transition-colors ${on ? 'text-orange' : 'text-gray'}`}>
                      0{i + 1}
                    </span>
                    <span
                      className={`flex-1 font-display text-xl font-semibold transition-[color,transform] duration-300 sm:text-2xl ${
                        on ? 'translate-x-1 text-ink' : 'text-ink/55 group-hover:text-ink'
                      }`}
                    >
                      {s.title}
                    </span>
                    <span
                      className={`grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                        on ? 'rotate-45 border-orange bg-orange text-white' : 'border-line'
                      }`}
                    >
                      <Plus className="size-4" />
                    </span>
                  </button>

                  {/* inline detail on mobile / tablet */}
                  <div className={`grid transition-[grid-template-rows] duration-500 ease-out-soft lg:hidden ${on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <div className="pb-7 pl-11">
                        <Detail s={s} compact />
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          {/* sticky preview on desktop */}
          <div className="hidden lg:block">
            <div className="sticky top-28" aria-live="polite">
              {current && <Detail s={current} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
