import { motion } from 'framer-motion'
import { CheckCircle2, Target, Gem, HeartHandshake } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { stagger, fadeUp, slideRight, viewport } from '../../lib/motion'
import { grad } from '../../lib/palette'
import { CORE_SERVICES } from '../../lib/data'

const VALUES = [
  { icon: Target, title: 'Outcome-driven', desc: 'We measure success by your growth, not by hours billed.' },
  { icon: Gem, title: 'Craft & quality', desc: 'Pixel-perfect design and clean, maintainable engineering.' },
  { icon: HeartHandshake, title: 'True partnership', desc: 'A long-term partner invested in your roadmap.' },
]

const POINTS = [
  'Senior engineers on every project',
  'Transparent pricing & milestones',
  'On-time, reliable delivery',
  'A full year of post-launch support',
]

export default function About() {
  return (
    <section id="about" className="relative py-14 lg:py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="About Us"
          title="A premium technology partner for"
          highlight="ambitious companies"
          subtitle="AB Technology Solution is a full-service software studio. We blend elegant design with robust engineering to build digital products that look world-class and perform even better."
        />

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left — visual collage */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="relative"
          >
            <div className="relative rounded-3xl border border-line bg-surface p-6 shadow-soft">
              <div className="bg-dots absolute inset-0 rounded-3xl opacity-40" />
              <div className="relative grid grid-cols-2 gap-4">
                {CORE_SERVICES.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className={[
                      'group rounded-2xl border border-line bg-white p-4 shadow-soft',
                      i % 2 ? 'translate-y-4' : '',
                    ].join(' ')}
                  >
                    <span className={`grid size-11 place-items-center rounded-xl bg-gradient-to-br ${grad(i)} text-white shadow-[0_8px_18px_-6px_rgba(37,99,235,0.5)]`}>
                      <s.icon className="size-5" />
                    </span>
                    <p className="mt-3 text-sm font-bold text-ink">{s.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating accent badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass absolute -bottom-5 -right-4 flex items-center gap-3 rounded-2xl px-4 py-3"
            >
              <span className="grid size-10 place-items-center rounded-xl bg-gold text-ink">
                <Gem className="size-5" />
              </span>
              <div>
                <p className="font-poppins text-sm font-bold text-ink">100% Delivery</p>
                <p className="text-xs text-muted">On-time, every time</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — copy */}
          <motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={viewport}>
            <motion.p variants={fadeUp} className="text-lg leading-relaxed text-ink-soft">
              From your first line of code to launch and beyond, we act as a true extension of
              your team — combining strategy, design and engineering under one roof to ship
              products that move your business forward.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {POINTS.map((p) => (
                <div key={p} className="flex items-center gap-2.5 text-sm font-medium text-ink-soft">
                  <CheckCircle2 className="size-5 shrink-0 text-brand" />
                  {p}
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 space-y-4">
              {VALUES.map((v) => (
                <div
                  key={v.title}
                  className="group flex gap-4 rounded-2xl border border-line bg-white p-4 shadow-soft"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                    <v.icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-bold text-ink">{v.title}</p>
                    <p className="text-sm text-muted">{v.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
