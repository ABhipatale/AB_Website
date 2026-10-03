import { motion } from 'framer-motion'
import {
  Search, ClipboardList, PenTool, Code2, TestTube2, Rocket, LifeBuoy,
} from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { viewport, EASE } from '../../lib/motion'
import { grad } from '../../lib/palette'
import { PROCESS } from '../../lib/data'

const ICONS = [Search, ClipboardList, PenTool, Code2, TestTube2, Rocket, LifeBuoy]

export default function Process() {
  return (
    <section id="process" className="relative py-14 lg:py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Process"
          title="A proven path from"
          highlight="idea to launch"
          subtitle="A transparent, seven-step workflow that keeps you informed and in control at every stage."
        />

        <div className="relative mt-10">
          {/* Central animated line (desktop) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-line lg:block">
            <motion.span
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.6, ease: EASE }}
              className="block h-full w-full origin-top bg-gradient-to-b from-brand via-sky to-gold"
            />
          </div>
          {/* Left line (mobile) */}
          <div className="absolute left-[27px] top-0 h-full w-px bg-line lg:hidden">
            <motion.span
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 1.6, ease: EASE }}
              className="block h-full w-full origin-top bg-gradient-to-b from-brand via-sky to-gold"
            />
          </div>

          <ul className="space-y-6 lg:space-y-0">
            {PROCESS.map((step, i) => {
              const Icon = ICONS[i]
              const left = i % 2 === 0
              return (
                <li
                  key={step.title}
                  className="relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-12"
                >
                  {/* Node */}
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
                    className="absolute left-[14px] top-1 z-10 grid size-8 place-items-center rounded-full bg-white ring-4 ring-brand-soft lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
                  >
                    <span className="size-3.5 rounded-full bg-gradient-to-br from-brand to-sky" />
                  </motion.span>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: left ? -40 : 40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.6, ease: EASE }}
                    className={[
                      'ml-16 lg:ml-0',
                      left ? 'lg:col-start-1 lg:text-right' : 'lg:col-start-2',
                      // add vertical rhythm between rows on desktop
                      i === 0 ? '' : 'lg:mt-[-2.5rem]',
                      'lg:py-5',
                    ].join(' ')}
                  >
                    <div
                      className={[
                        'group hover-lift inline-flex w-full max-w-md gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft',
                        left ? 'lg:flex-row-reverse lg:text-right' : '',
                      ].join(' ')}
                    >
                      <span className={`grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${grad(i)} text-white shadow-[0_8px_18px_-6px_rgba(37,99,235,0.5)]`}>
                        <Icon className="size-5.5" />
                      </span>
                      <div>
                        <div className={['flex items-center gap-2', left ? 'lg:flex-row-reverse' : ''].join(' ')}>
                          <span className="font-poppins text-xs font-bold text-gold">
                            0{i + 1}
                          </span>
                          <h3 className="font-bold text-ink">{step.title}</h3>
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-muted">{step.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
