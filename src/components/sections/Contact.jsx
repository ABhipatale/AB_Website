import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Phone, Mail, MapPin, Send, CheckCircle2, Loader2, ArrowRight,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading'
import { stagger, fadeUp, slideRight, slideLeft, viewport } from '../../lib/motion'
import { COMPANY } from '../../lib/data'

const CHANNELS = [
  { icon: Phone, label: 'Call us', value: COMPANY.phone, href: `tel:${COMPANY.phoneRaw}`, tint: 'text-brand bg-brand-soft' },
  { icon: FaWhatsapp, label: 'WhatsApp', value: 'Chat with us', href: COMPANY.whatsapp, tint: 'text-emerald-600 bg-emerald-50' },
  { icon: Mail, label: 'Email us', value: COMPANY.email, href: `mailto:${COMPANY.email}`, tint: 'text-sky bg-sky/10' },
  { icon: MapPin, label: 'Based in', value: 'India · Serving worldwide', href: '#', tint: 'text-gold bg-gold/15' },
]

const SERVICE_OPTIONS = [
  'Web Development', 'Mobile App', 'AI Solution',
  'Business Automation', 'CRM / ERP', 'Other',
]

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink-soft">{label}</span>
      {children}
    </label>
  )
}

const inputCls =
  'w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink shadow-sm transition-colors placeholder:text-muted/70 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/10'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: SERVICE_OPTIONS[0], message: '' })

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // No backend wired up yet — simulate, then hand off to WhatsApp so the
    // enquiry actually reaches the team.
    setTimeout(() => {
      setStatus('sent')
      const text = encodeURIComponent(
        `Hi AB Technology Solution!%0A%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AService: ${form.service}%0A%0A${form.message}`,
      )
      window.open(`${COMPANY.whatsapp}?text=${text}`, '_blank', 'noopener')
      setTimeout(() => setStatus('idle'), 4000)
    }, 1200)
  }

  return (
    <section id="contact" className="relative overflow-hidden py-14 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-surface" />
      <div className="pointer-events-none absolute -left-20 top-1/3 size-72 rounded-full bg-brand/10 blur-[110px]" />

      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          highlight="great together"
          subtitle="Tell us about your project and we'll get back within one business day with a clear plan and quote."
        />

        <div className="mt-9 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left — channels + map */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {CHANNELS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-line bg-white p-4 shadow-soft"
                >
                  <span className={`grid size-11 shrink-0 place-items-center rounded-xl ${c.tint}`}>
                    <c.icon className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold text-muted">{c.label}</span>
                    <span className="block truncate text-sm font-bold text-ink">{c.value}</span>
                  </span>
                </a>
              ))}
            </div>

            {/* Map */}
            <div className="relative flex-1 overflow-hidden rounded-3xl border border-line shadow-soft">
              <iframe
                title="AB Technology Solution location"
                src="https://www.google.com/maps?q=India&output=embed"
                className="h-full min-h-[260px] w-full grayscale-[0.2]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <form
              onSubmit={submit}
              className="relative overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-lift sm:p-8"
            >
              <div className="bg-dots pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(circle_at_top_right,#000,transparent_60%)]" />

              <motion.div
                variants={stagger(0.08)}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                className="relative grid gap-4 sm:grid-cols-2"
              >
                <motion.div variants={fadeUp}>
                  <Field label="Full name">
                    <input required value={form.name} onChange={update('name')} className={inputCls} placeholder="Your name" />
                  </Field>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <Field label="Email">
                    <input required type="email" value={form.email} onChange={update('email')} className={inputCls} placeholder="you@company.com" />
                  </Field>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <Field label="Phone">
                    <input value={form.phone} onChange={update('phone')} className={inputCls} placeholder="+91 00000 00000" />
                  </Field>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <Field label="Service">
                    <select value={form.service} onChange={update('service')} className={inputCls}>
                      {SERVICE_OPTIONS.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </Field>
                </motion.div>
                <motion.div variants={fadeUp} className="sm:col-span-2">
                  <Field label="Project details">
                    <textarea required rows={4} value={form.message} onChange={update('message')} className={`${inputCls} resize-none`} placeholder="Tell us about your project, goals and timeline…" />
                  </Field>
                </motion.div>

                <motion.div variants={fadeUp} className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={status !== 'idle'}
                    className="gradient-brand-animated group relative flex h-13 w-full items-center justify-center gap-2 overflow-hidden rounded-full px-7 font-grotesk font-semibold text-white shadow-[0_12px_32px_-8px_rgba(37,99,235,0.6)] disabled:opacity-90"
                  >
                    {status === 'idle' && (
                      <>
                        Send Message
                        <Send className="size-4" />
                      </>
                    )}
                    {status === 'sending' && (
                      <>
                        <Loader2 className="size-5 animate-spin" /> Sending…
                      </>
                    )}
                    {status === 'sent' && (
                      <>
                        <CheckCircle2 className="size-5" /> Opening WhatsApp…
                      </>
                    )}
                  </button>
                  <p className="mt-3 text-center text-xs text-muted">
                    Prefer chat? Submitting opens WhatsApp with your details pre-filled.
                  </p>
                </motion.div>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
