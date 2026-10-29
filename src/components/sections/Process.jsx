import SectionLabel from '../ui/SectionLabel'
import { PROCESS } from '../../lib/data'

/** Four connected steps; the orange line draws across as the section enters. */
export default function Process() {
  return (
    <section id="process" className="bg-night-2 py-20 text-fg sm:py-28">
      <div className="wrap">
        <SectionLabel n="05">
          The ABnexa process
        </SectionLabel>
        <h2 className="reveal mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Clear steps. <span className="text-muted">No surprises.</span>
        </h2>

        <ol className="reveal relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          {/* connecting line (desktop: horizontal, mobile: vertical) */}
          <span aria-hidden="true" className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-line md:left-0 md:top-[7px] md:h-px md:w-full" />
          <span aria-hidden="true" className="progress-line absolute left-0 top-[7px] hidden h-px w-full bg-orange md:block" />

          {PROCESS.map((p, i) => (
            <li key={p.title} className="relative pl-10 md:pl-0 md:pt-12">
              <span className="absolute left-0 top-0 grid size-[15px] place-items-center rounded-full border border-orange bg-night-2">
                <span className="size-[5px] rounded-full bg-orange" />
              </span>
              <p className="tag text-orange">0{i + 1}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold">{p.title}</h3>
              <p className="mt-3 max-w-[16rem] leading-relaxed text-muted">{p.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
