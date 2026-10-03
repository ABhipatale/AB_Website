import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, ArrowUpRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { stagger, fadeUp, viewport } from '../../lib/motion'
import { grad } from '../../lib/palette'
import { CITIES, SERVED_AREAS } from '../../lib/cities'

export default function AreasWeServe() {
  const primaryNames = CITIES.map((c) => c.name)
  const secondary = SERVED_AREAS.filter((a) => !primaryNames.includes(a))

  return (
    <section id="areas" className="relative overflow-hidden py-14 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-surface to-white" />

      <div className="container-x">
        <SectionHeading
          eyebrow="Areas We Serve"
          title="Website development across"
          highlight="Maharashtra"
          subtitle="Based in Karad, we build websites, apps and software for businesses across Maharashtra and beyond. Explore our dedicated city pages."
        />

        {/* Primary cities — dedicated pages */}
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5"
        >
          {CITIES.map((c, i) => (
            <motion.div key={c.slug} variants={fadeUp}>
              <Link
                to={`/${c.path}`}
                className="group hover-lift relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-soft"
              >
                <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${grad(i)}`} />
                <span className={`grid size-12 place-items-center rounded-xl bg-gradient-to-br ${grad(i)} text-white shadow-[0_10px_22px_-8px_rgba(37,99,235,0.5)]`}>
                  <MapPin className="size-5.5" />
                </span>
                <h3 className="mt-4 flex items-center gap-1 text-lg font-bold text-ink">
                  {c.name}
                  <ArrowUpRight className="size-4 text-brand" />
                </h3>
                <p className="mt-1 text-sm text-muted">Website Developer in {c.name}</p>
                <span className="mt-3 text-xs font-semibold text-brand">{c.district}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Secondary areas — chips */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-8 rounded-3xl border border-line bg-white p-6 shadow-soft"
        >
          <p className="text-sm font-bold uppercase tracking-wide text-muted">
            We also serve
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {secondary.map((a) => (
              <span
                key={a}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium text-ink-soft"
              >
                <MapPin className="size-3.5 text-brand" /> {a}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
