import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { stagger, fadeUp, viewport } from '../../lib/motion'
import { grad } from '../../lib/palette'
import { SERVICES } from '../../lib/data'

function ServiceCard({ icon: Icon, title, desc, tag, i }) {
  const g = grad(i)
  return (
    <motion.article
      variants={fadeUp}
      data-cursor
      className="group relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-soft"
    >
      {/* colourful top strip + corner glow */}
      <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${g}`} />
      <span className={`pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-gradient-to-br ${g} opacity-10 blur-2xl`} />

      <div className="flex items-start justify-between">
        <span className={`relative grid size-13 place-items-center rounded-2xl bg-gradient-to-br ${g} text-white shadow-[0_10px_22px_-8px_rgba(37,99,235,0.5)]`}>
          <Icon className="size-6" />
        </span>
        <span className="rounded-full border border-line px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-muted">
          {tag}
        </span>
      </div>

      <h3 className="mt-5 flex items-center gap-1 text-lg font-bold text-ink">
        {title}
        <ArrowUpRight className="size-4 text-brand" />
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>

      <span className={`mt-4 block h-0.5 w-10 rounded-full bg-gradient-to-r ${g}`} />
    </motion.article>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative py-14 lg:py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Services"
          title="Comprehensive solutions to"
          highlight="power your growth"
          subtitle="From a marketing site to a full enterprise platform — every service is engineered to premium standards and built to scale."
        />

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} {...s} i={i} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-8 flex flex-col items-center gap-4 rounded-3xl border border-line bg-surface px-8 py-6 text-center sm:flex-row sm:justify-between sm:text-left"
        >
          <div>
            <p className="text-xl font-bold text-ink">Not sure which service you need?</p>
            <p className="mt-1 text-sm text-muted">
              Book a free consultation and we'll map the right solution for your business.
            </p>
          </div>
          <Button href="#contact" size="lg" icon={ArrowUpRight}>
            Get Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
