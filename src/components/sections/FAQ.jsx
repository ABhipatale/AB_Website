import { useState } from 'react'
import { Plus } from 'lucide-react'

import SectionLabel from '../ui/SectionLabel'

/** Accordion — answers stay in the DOM so they match the FAQ schema. */
export default function FAQ({ items, title = 'Questions, answered.', n = '07', id = 'faq' }) {
  const [open, setOpen] = useState(0)

  return (
    <section id={id} className="bg-paper-2 py-20 sm:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionLabel n={n}>FAQ</SectionLabel>
          <h2 className="reveal mt-6 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {title}
          </h2>
        </div>

        <ul className="border-t border-line">
          {items.map((f, i) => {
            const on = open === i
            return (
              <li key={f.q} className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(on ? -1 : i)}
                    aria-expanded={on}
                    aria-controls={`${id}-a${i}`}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-lg font-semibold"
                  >
                    {f.q}
                    <span
                      className={`grid size-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                        on ? 'rotate-45 border-orange bg-orange text-white' : 'border-gray/40'
                      }`}
                    >
                      <Plus className="size-4" />
                    </span>
                  </button>
                </h3>
                <div
                  id={`${id}-a${i}`}
                  className={`grid transition-[grid-template-rows] duration-500 ease-out-soft ${on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 leading-relaxed text-gray">{f.a}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
