import { ArrowRight, ArrowUpRight } from 'lucide-react'

import SectionLabel from '../ui/SectionLabel'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import { WORK, whatsappLink } from '../../lib/data'

const enquiry = (w) =>
  whatsappLink(`Hi Abnexa! I saw the ${w.name} on your website. I'd like something similar.`)

/**
 * Client work as an editorial project index — one full-width row per
 * project, closed by an invitation banner. Items without a public site
 * open a WhatsApp enquiry instead.
 */
export default function Work() {
  return (
    <section id="work" className="py-20 sm:py-28">
      <div className="wrap">
        <SectionLabel n="04">Selected work</SectionLabel>
        <div className="mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="reveal max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Built for real businesses <span className="text-gray">and working every day.</span>
          </h2>
          <p className="tag reveal text-gray">
            {String(WORK.length).padStart(2, '0')} projects · websites &amp; software
          </p>
        </div>

        <ul className="mt-12 border-t border-line">
          {WORK.map((w, i) => (
            <li key={w.name} className="reveal border-b border-line" style={{ '--d': `${i * 70}ms` }}>
              <a
                href={w.href ?? enquiry(w)}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-4 rounded-2xl px-2 py-6 transition-colors duration-300 hover:bg-white sm:px-4 lg:grid-cols-[2.5rem_5.5rem_minmax(0,1.1fr)_minmax(0,1.3fr)_auto] lg:gap-x-8 lg:py-7"
              >
                <span className="tag hidden text-gray transition-colors group-hover:text-orange lg:block">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <span className="grid size-16 place-items-center overflow-hidden rounded-2xl border border-line bg-paper-2 sm:size-20 lg:size-22">
                  <img
                    src={w.image}
                    alt={w.imageAlt}
                    width="80"
                    height="80"
                    loading="lazy"
                    className="size-[82%] rounded-xl object-contain transition-transform duration-500 ease-out-soft group-hover:scale-110"
                  />
                </span>

                <span className="min-w-0">
                  <span className="tag block text-orange">{w.kind}</span>
                  <span className="mt-1.5 block font-display text-xl font-semibold leading-snug sm:text-2xl">{w.name}</span>
                </span>

                <span className="col-span-2 text-[0.95rem] leading-relaxed text-gray lg:col-span-1">{w.desc}</span>

                <span className="col-span-2 flex items-center justify-between gap-4 lg:col-span-1 lg:justify-end">
                  <span className="tag inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-ink transition-colors group-hover:border-ink/30">
                    {!w.href && <WhatsAppIcon className="size-3.5" />}
                    {w.linkLabel ?? 'Ask for similar'}
                  </span>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-ink text-paper transition-colors duration-300 group-hover:bg-orange">
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* invitation  */}
        <a
          href="#contact"
          className="reveal group relative mt-10 flex flex-col justify-between gap-6 overflow-hidden rounded-[1.75rem] bg-ink p-8 text-paper sm:flex-row sm:items-center sm:p-10"
        >
          <img
            src="/brand/abnexa-mark-light.png"
            alt=""
            aria-hidden="true"
            width="512"
            height="512"
            loading="lazy"
            className="pointer-events-none absolute -right-10 -top-16 size-64 opacity-[0.07] transition-transform duration-700 ease-out-soft group-hover:rotate-12"
          />
          <span className="relative">
            <span className="tag block text-paper/50">Open slot</span>
            <span className="mt-2 block font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Your project <span className="text-orange">could be next.</span>
            </span>
          </span>
          <span className="btn btn-primary relative shrink-0 self-start whitespace-nowrap group-hover:!bg-paper group-hover:!text-ink sm:self-auto">
            Start a conversation <ArrowRight className="arrow size-4" />
          </span>
        </a>
      </div>
    </section>
  )
}
