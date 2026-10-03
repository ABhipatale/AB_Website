import { motion } from 'framer-motion'
import { ArrowUpRight, Globe, Smartphone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading'
import { stagger, fadeUp, viewport } from '../../lib/motion'
import { COMPANY } from '../../lib/data'

// Apps aren't public, so their cards open a WhatsApp enquiry instead.
const whatsappFor = (name) =>
  `${COMPANY.whatsapp}?text=${encodeURIComponent(`Hi AB Tech Services! I'm interested in the ${name}. Please share more details.`)}`

export const WORK = [
  {
    type: 'Website',
    icon: Globe,
    title: 'Hotel Atithi, Karad',
    desc: 'Official restaurant website for Hotel Atithi in Karad — fast, mobile-friendly and SEO-ready, showcasing the hotel and helping guests find and contact it online.',
    image: '/assets/atithilogo.png',
    imageAlt: 'Hotel Atithi Karad logo — website by AB Tech Services',
    href: 'https://hotelatithikarad.in',
    linkLabel: 'hotelatithikarad.in',
  },
  {
    type: 'Website',
    icon: Globe,
    title: 'Hotel Mamacha Mala',
    desc: 'Responsive restaurant website for Hotel Mamacha Mala — a clean, modern online presence built to showcase the hotel and bring in more customers.',
    image: '/assets/logo.png',
    imageAlt: 'Hotel Mamacha Mala logo — website by AB Tech Services',
    href: 'https://mamacha-mala.vercel.app/',
    linkLabel: 'Visit website',
  },
  {
    type: 'Application',
    icon: Smartphone,
    title: 'Jar Management System',
    desc: 'Water-jar delivery management application for water suppliers — manage customers, daily jar deliveries and payments in one place.',
    image: '/assets/banner.jpg',
    imageAlt: 'Jar Management System for water suppliers — app by AB Tech Services',
    cover: true,
    href: whatsappFor('Jar Management System'),
    linkLabel: 'Enquire on WhatsApp',
    whatsapp: true,
  },
  {
    type: 'Application',
    icon: Smartphone,
    title: 'Face Detection System',
    desc: 'AI-powered face detection application that detects and recognises faces from camera or images — for attendance, security and access control.',
    image: '/assets/face-detection-logo.svg',
    imageAlt: 'Face Detection System logo — app by AB Tech Services',
    href: whatsappFor('Face Detection System'),
    linkLabel: 'Enquire on WhatsApp',
    whatsapp: true,
  },
]

export default function OurWork() {
  return (
    <section id="our-work" className="relative py-14 lg:py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Work"
          title="Websites & apps we've"
          highlight="delivered"
          subtitle="Real products built by AB Tech Services for real businesses — from restaurant websites to custom business applications."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {WORK.map((w) => (
            <motion.a
              key={w.title}
              variants={fadeUp}
              href={w.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group hover-lift relative flex flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-soft"
            >
              {/* Logo / preview */}
              <div className="relative grid h-48 place-items-center overflow-hidden bg-surface">
                <img
                  src={w.image}
                  alt={w.imageAlt}
                  loading="lazy"
                  className={
                    w.cover
                      ? 'h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                      : 'size-32 rounded-2xl object-contain transition-transform duration-500 group-hover:scale-105'
                  }
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-ink shadow-sm backdrop-blur">
                  <w.icon className="size-3 text-brand" />
                  {w.type}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-ink">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{w.desc}</p>

                <span
                  className={[
                    'mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold',
                    w.whatsapp ? 'text-emerald-600' : 'text-brand',
                  ].join(' ')}
                >
                  {w.whatsapp && <FaWhatsapp className="size-4" />}
                  {w.linkLabel}
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/**
 * Compact one-row version of the work showcase, shown above the About
 * section. Uses the same WORK data and links as the full section.
 */
export function OurWorkStrip() {
  return (
    <section className="relative pt-10 lg:pt-14">
      <div className="container-x">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center text-xs font-bold uppercase tracking-[0.16em] text-muted"
        >
          Our recent work
        </motion.p>

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {WORK.map((w) => (
            <motion.a
              key={w.title}
              variants={fadeUp}
              href={w.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group hover-lift flex items-center gap-3 rounded-2xl border border-line bg-white p-3 shadow-soft"
            >
              <img
                src={w.image}
                alt={w.imageAlt}
                loading="lazy"
                className={[
                  'size-12 shrink-0 rounded-xl',
                  w.cover ? 'object-cover' : 'object-contain',
                ].join(' ')}
              />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-bold text-ink">{w.title}</span>
                <span className="mt-0.5 flex items-center gap-1 text-xs text-muted">
                  <w.icon className="size-3 text-brand" />
                  {w.type}
                </span>
              </span>
              {w.whatsapp ? (
                <FaWhatsapp className="size-4 shrink-0 text-emerald-600" />
              ) : (
                <ArrowUpRight className="size-4 shrink-0 text-brand transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              )}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
