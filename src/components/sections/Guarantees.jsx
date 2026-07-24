import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { stagger, fadeUp, viewport } from '../../lib/motion'
import { grad } from '../../lib/palette'
import { GUARANTEES } from '../../lib/data'

export default function Guarantees() {
  return (
    <section id="promise" className="relative overflow-hidden py-14 lg:py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 size-[560px] -translate-x-1/2 rounded-full bg-brand/5 blur-[130px]" />

      <div className="container-x">
        <SectionHeading
          eyebrow="The AB Promise"
          title="What you can"
          highlight="count on"
          subtitle="We're a new-generation studio, so instead of borrowed logos we lead with real commitments — the things every client gets, in writing."
        />

        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {GUARANTEES.map((g, i) => (
            <motion.div
              key={g.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-soft"
            >
              <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${grad(i)}`} />
              <span className={`grid size-12 place-items-center rounded-xl bg-gradient-to-br ${grad(i)} text-white shadow-[0_8px_20px_-6px_rgba(37,99,235,0.6)]`}>
                <g.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{g.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{g.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Signed-promise strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto mt-7 flex max-w-2xl items-center justify-center gap-3 rounded-full border border-line bg-surface px-6 py-3 text-center text-sm font-medium text-ink-soft"
        >
          <ShieldCheck className="size-5 shrink-0 text-brand" />
          Every project is backed by these commitments — no fine print.
        </motion.div>
      </div>
    </section>
  )
}
