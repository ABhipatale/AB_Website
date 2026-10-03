import { motion } from 'framer-motion'
import { Check, ArrowUpRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { stagger, fadeUp, viewport } from '../../lib/motion'
import { grad } from '../../lib/palette'
import { SOLUTIONS } from '../../lib/data'

export default function Solutions() {
  return (
    <section id="solutions" className="relative overflow-hidden py-14 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-surface to-white" />

      <div className="container-x">
        <SectionHeading
          eyebrow="What We Build"
          title="The kind of software"
          highlight="we deliver"
          subtitle="From marketing sites to full platforms, here's what we design and engineer for our clients — built to premium standards, top to bottom."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SOLUTIONS.map((s, i) => {
            const g = grad(i)
            return (
              <motion.article
                key={s.title}
                variants={fadeUp}
                className="group hover-lift relative flex flex-col overflow-hidden rounded-3xl border border-line bg-white p-7 shadow-soft"
              >
                {/* colourful top strip + corner glow */}
                <span className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${g}`} />
                <div className={`pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-gradient-to-br ${g} opacity-15 blur-2xl`} />

                <div className="flex items-center justify-between">
                  <span className={`grid size-14 place-items-center rounded-2xl bg-gradient-to-br ${g} text-white shadow-[0_12px_26px_-8px_rgba(37,99,235,0.5)]`}>
                    <s.icon className="size-7" />
                  </span>
                  <ArrowUpRight className="size-5 text-brand" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>

                <ul className="mt-5 space-y-2 border-t border-line pt-5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm font-medium text-ink-soft">
                      <span className={`grid size-5 shrink-0 place-items-center rounded-full bg-gradient-to-br ${g} text-white`}>
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </motion.div>

        {/* Honest note + CTA (no fabricated case studies) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-8 flex flex-col items-center gap-4 rounded-3xl border border-line bg-white px-8 py-6 text-center shadow-soft sm:flex-row sm:justify-between sm:text-left"
        >
          <div>
            <p className="text-xl font-bold text-ink">Have a project in mind?</p>
            <p className="mt-1 text-sm text-muted">
              Tell us what you want to build and we'll walk you through exactly how we'd approach it.
            </p>
          </div>
          <Button href="#contact" size="lg" icon={ArrowUpRight}>
            Discuss Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
