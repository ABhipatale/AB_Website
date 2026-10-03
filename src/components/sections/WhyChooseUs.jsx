import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import Counter from '../ui/Counter'
import { stagger, fadeUp, zoomIn, viewport } from '../../lib/motion'
import { grad } from '../../lib/palette'
import { FACTS, REASONS } from '../../lib/data'

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative overflow-hidden py-14 lg:py-20">
      {/* Tinted band */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-soft/40 to-white" />
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-50 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_70%)]" />

      <div className="container-x">
        {/* Counters */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {FACTS.map((s, i) => (
            <motion.div
              key={s.label}
              variants={zoomIn}
              className="group relative overflow-hidden rounded-3xl border border-line bg-white/85 p-6 text-center shadow-soft backdrop-blur"
            >
              <span className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${grad(i)}`} />
              <p className="font-poppins text-4xl font-extrabold sm:text-5xl">
                <span className="text-gradient">
                  <Counter value={s.value} suffix={s.suffix} />
                </span>
              </p>
              <p className="mt-2 text-sm font-semibold text-muted">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Reasons */}
        <div className="mt-12">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Everything you need in a"
            highlight="technology partner"
            subtitle="We obsess over the details that make software feel premium — and back it with the reliability enterprises expect."
          />

          <motion.div
            variants={stagger(0.07)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {REASONS.map((r, i) => (
              <motion.div
                key={r.title}
                variants={fadeUp}
                className="group hover-lift relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-soft"
              >
                <span className={`pointer-events-none absolute -right-6 -top-6 size-20 rounded-full bg-gradient-to-br ${grad(i)} opacity-10 blur-xl`} />
                <span className={`relative grid size-12 place-items-center rounded-xl bg-gradient-to-br ${grad(i)} text-white shadow-[0_8px_20px_-6px_rgba(37,99,235,0.6)]`}>
                  <r.icon className="size-5.5" />
                </span>
                <p className="relative mt-4 font-bold text-ink">{r.title}</p>
                <p className="relative mt-1 text-sm leading-relaxed text-muted">{r.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
