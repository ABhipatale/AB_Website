import { motion } from 'framer-motion'
import { ArrowRight, PhoneCall } from 'lucide-react'
import Button from '../ui/Button'
import Particles from '../fx/Particles'
import { fadeUp, stagger, viewport } from '../../lib/motion'
import { COMPANY } from '../../lib/data'

export default function CTA() {
  return (
    <section className="relative pb-8 pt-4">
      <div className="container-x">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="gradient-brand-animated relative overflow-hidden rounded-[2rem] px-8 py-12 text-center shadow-glow sm:px-14 sm:py-14"
        >
          <Particles className="opacity-40" density={30} />
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_70%)]" />
          <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-gold/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 size-64 rounded-full bg-sky/30 blur-3xl" />

          <motion.span
            variants={fadeUp}
            className="relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur"
          >
            <span className="size-1.5 rounded-full bg-gold" />
            {COMPANY.tagline}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="relative mx-auto mt-6 max-w-2xl text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl md:text-5xl"
          >
            Ready to grow your business with premium software?
          </motion.h2>

          <motion.p variants={fadeUp} className="relative mx-auto mt-4 max-w-xl text-base text-white/85 sm:text-lg">
            Let's turn your idea into a fast, elegant product your customers will love.
          </motion.p>

          <motion.div variants={fadeUp} className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="#contact" size="lg" variant="gold" icon={ArrowRight}>
              Start Your Project
            </Button>
            <Button
              href={`tel:${COMPANY.phoneRaw}`}
              size="lg"
              variant="outline"
              icon={PhoneCall}
              className="!bg-white/10 !text-white !border-white/30"
            >
              {COMPANY.phone}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
