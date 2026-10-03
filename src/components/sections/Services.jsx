import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { stagger, fadeUp, viewport } from '../../lib/motion'
import { grad } from '../../lib/palette'
import useMouseGlow from '../../hooks/useMouseGlow'
import ServiceArt from '../ui/ServiceArt'
import { SERVICES } from '../../lib/data'

function ServiceCard({ icon: Icon, title, desc, tag, art, i }) {
  const g = grad(i)
  const glowRef = useMouseGlow()
  return (
    <motion.article
      ref={glowRef}
      variants={fadeUp}
      data-cursor
      className="group hover-lift spotlight relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-soft"
    >
      {/* illustration banner */}
      <div className="relative h-36 overflow-hidden">
        <ServiceArt art={art} title={title} />
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-wide text-ink shadow-sm backdrop-blur">
          {tag}
        </span>
      </div>

      {/* body with overlapping icon chip */}
      <div className="relative flex flex-1 flex-col px-6 pb-6">
        <span className="relative -mt-7 grid size-14 place-items-center rounded-2xl border border-line bg-white text-brand shadow-lift">
          <Icon className="size-6" />
        </span>

        <h3 className="mt-4 flex items-center gap-1 text-lg font-bold text-ink">
          {title}
          <ArrowUpRight className="size-4 text-brand transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>

        <span className={`mt-4 block h-0.5 w-10 rounded-full bg-gradient-to-r ${g} transition-all duration-300 group-hover:w-16`} />
      </div>
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
          {/* (illustrations are original SVG art — no external images) */}
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
