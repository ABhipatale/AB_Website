import { motion } from 'framer-motion'
import { Check, Sparkles, ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { stagger, fadeUp, viewport } from '../../lib/motion'
import { PRICING } from '../../lib/data'

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-14 lg:py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent"
          highlight="pricing"
          subtitle="Clear plans with no hidden costs. Choose a starting point — we'll tailor the details to your project."
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-9 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3"
        >
          {PRICING.map((plan) => {
            const popular = plan.popular
            return (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                className={[
                  'relative flex flex-col rounded-3xl p-8',
                  popular
                    ? 'gradient-border bg-white shadow-glow lg:-mt-4 lg:mb-4'
                    : 'border border-line bg-white shadow-soft',
                ].join(' ')}
                data-active={popular ? 'true' : 'false'}
              >
                {popular && (
                  <span className="gradient-brand-animated absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                    <Sparkles className="size-3.5" /> Most Popular
                  </span>
                )}

                <div className="flex items-center justify-between">
                  <h3 className="font-poppins text-lg font-bold text-ink">{plan.name}</h3>
                  {popular && <span className="size-2.5 rounded-full bg-gold" />}
                </div>
                <p className="mt-1 text-sm text-muted">{plan.tagline}</p>

                <div className="mt-5 flex items-end gap-1.5">
                  <span className={[
                    'font-poppins text-4xl font-extrabold',
                    popular ? 'text-gradient' : 'text-ink',
                  ].join(' ')}>{plan.price}</span>
                  <span className="mb-1 text-sm text-muted">{plan.cadence}</span>
                </div>

                <div className="my-6 h-px w-full bg-line" />

                <ul className="flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-ink-soft">
                      <span
                        className={[
                          'mt-0.5 grid size-5 shrink-0 place-items-center rounded-full',
                          popular ? 'bg-brand text-white' : 'bg-brand-soft text-brand',
                        ].join(' ')}
                      >
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  href="#contact"
                  size="lg"
                  variant={popular ? 'primary' : 'outline'}
                  className="mt-8 w-full"
                  icon={ArrowRight}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-8 text-center text-sm text-muted"
        >
          All plans include responsive design, SEO best practices and post-launch support.
        </motion.p>
      </div>
    </section>
  )
}
