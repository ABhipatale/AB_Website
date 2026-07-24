import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, MessageCircleQuestion } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { stagger, fadeUp, viewport, EASE } from '../../lib/motion'
import { FAQS, COMPANY } from '../../lib/data'

function Item({ q, a, isOpen, onToggle }) {
  return (
    <motion.div
      variants={fadeUp}
      className={[
        'overflow-hidden rounded-2xl border bg-white transition-colors duration-300',
        isOpen ? 'border-brand/30 shadow-soft' : 'border-line',
      ].join(' ')}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-semibold text-ink">{q}</span>
        <span
          className={[
            'grid size-8 shrink-0 place-items-center rounded-full transition-all duration-300',
            isOpen ? 'rotate-45 bg-brand text-white' : 'bg-brand-soft text-brand',
          ].join(' ')}
        >
          <Plus className="size-4" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="relative py-14 lg:py-20">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* Left — heading + CTA */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title="Questions?"
              highlight="Answered."
              subtitle="Everything you need to know before we start. Can't find your answer? We're one message away."
            />
            <div className="mt-8 rounded-3xl border border-line bg-surface p-6">
              <span className="grid size-11 place-items-center rounded-xl bg-brand text-white">
                <MessageCircleQuestion className="size-5" />
              </span>
              <p className="mt-4 font-bold text-ink">Still have questions?</p>
              <p className="mt-1 text-sm text-muted">
                Talk to our team and get clarity on scope, timeline and cost.
              </p>
              <Button href={`tel:${COMPANY.phoneRaw}`} variant="outline" size="md" className="mt-4">
                Call {COMPANY.phone}
              </Button>
            </div>
          </div>

          {/* Right — accordion */}
          <motion.div
            variants={stagger(0.07)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="space-y-3"
          >
            {FAQS.map((f, i) => (
              <Item
                key={f.q}
                {...f}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
