import { useEffect, useState } from 'react'
import { ArrowRight, Check, Mail, Phone } from 'lucide-react'

import WhatsAppIcon from '../ui/WhatsAppIcon'
import { COMPANY, PROJECT_TYPES, BUDGETS, whatsappLink } from '../../lib/data'
import { ENQUIRE_EVENT } from '../../lib/enquire'
import { track } from '../../lib/analytics'

const EMPTY = { name: '', email: '', phone: '', type: '', budget: '', message: '' }

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  if (v.phone && !/^[+\d][\d\s-]{7,15}$/.test(v.phone.trim())) e.phone = 'Please enter a valid phone number.'
  if (!v.type) e.type = 'Please choose a project type.'
  if (v.message.trim().length < 10) e.message = 'Tell us a little about the project (10+ characters).'
  return e
}

function compose(v) {
  return [
    `Hi Abnexa! I'd like to start a project.`,
    ``,
    `Name: ${v.name.trim()}`,
    `Email: ${v.email.trim()}`,
    v.phone && `Phone: ${v.phone.trim()}`,
    `Project type: ${v.type}`,
    v.budget && `Budget: ${v.budget}`,
    ``,
    v.message.trim(),
  ]
    .filter((l) => l !== false && l !== '')
    .join('\n')
}

function Field({ id, label, optional, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="flex justify-between text-sm font-medium text-fg/80">
        {label}
        {optional && <span className="text-muted">Optional</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-err`} className="mt-1.5 text-sm text-orange">
          {error}
        </p>
      )}
    </div>
  )
}

const input =
  'mt-2 block w-full rounded-xl border bg-night px-4 py-3 shadow-[inset_0_2px_8px_rgb(0_0_0/0.6)] text-fg placeholder:text-fg/45 transition-colors focus:border-orange focus:outline-none'

/**
 * There is no backend, so a valid enquiry opens WhatsApp with every field
 * pre-filled. If the window is blocked we offer an email fallback instead.
 */
export default function Contact({ n = '08', defaultType = '', defaultMessage = '' }) {
  const [v, setV] = useState({ ...EMPTY, type: defaultType, message: defaultMessage })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sent | blocked

  // a service or product CTA picked the project type — never overwrite
  // something the visitor already typed
  useEffect(() => {
    const onEnquire = ({ detail }) => {
      setStatus('idle')
      setErrors({})
      setV((s) => ({
        ...s,
        type: detail.type ?? s.type,
        message: s.message.trim() ? s.message : (detail.message ?? s.message),
      }))
    }
    window.addEventListener(ENQUIRE_EVENT, onEnquire)
    return () => window.removeEventListener(ENQUIRE_EVENT, onEnquire)
  }, [])

  const set = (k) => (e) => {
    setV((s) => ({ ...s, [k]: e.target.value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const submit = (e) => {
    e.preventDefault()
    const found = validate(v)
    setErrors(found)
    const first = Object.keys(found)[0]
    if (first) {
      document.getElementById(`c-${first}`)?.focus()
      return
    }
    // no "noopener" feature here: with it, window.open always returns null
    // and a blocked popup could not be detected
    const win = window.open(whatsappLink(compose(v)), '_blank')
    if (win) win.opener = null
    setStatus(win ? 'sent' : 'blocked')
    track('generate_lead', { method: win ? 'whatsapp' : 'blocked_popup', project_type: v.type, page_path: location.pathname })
  }

  const mailto = `mailto:${COMPANY.email}?subject=${encodeURIComponent(`New project enquiry — ${v.name}`)}&body=${encodeURIComponent(compose(v))}`

  const a11y = (k) => ({
    id: `c-${k}`,
    'aria-invalid': !!errors[k],
    'aria-describedby': errors[k] ? `c-${k}-err` : undefined,
    className: `${input} ${errors[k] ? 'border-orange' : 'border-line'}`,
  })

  return (
    <section id="contact" className="bg-night-2 py-20 text-fg sm:py-28">
      <div className="wrap grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="tag reveal flex items-center gap-3 text-muted">
            <span className="text-orange">{n}</span>
            <span className="rule" /> Contact
          </p>
          <h2 className="reveal mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">
            Have an idea?{' '}
            <span className="text-gloss block">Let&apos;s make it real.</span>
          </h2>
          <p className="reveal mt-8 max-w-md text-lg leading-relaxed text-fg/65">
            Tell us what you have in mind. We&apos;ll reply with honest advice, a clear plan and a fixed quote.
          </p>

          <ul className="reveal mt-10 space-y-4">
            <li>
              <a href={`tel:${COMPANY.phoneRaw}`} className="group inline-flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-full border border-line transition-colors group-hover:border-orange group-hover:text-orange">
                  <Phone className="size-4" />
                </span>
                <span className="font-display text-lg">{COMPANY.phone}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${COMPANY.email}`} className="group inline-flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-full border border-line transition-colors group-hover:border-orange group-hover:text-orange">
                  <Mail className="size-4" />
                </span>
                <span className="font-display text-lg">{COMPANY.email}</span>
              </a>
            </li>
            <li>
              <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-full border border-line transition-colors group-hover:border-orange group-hover:text-orange">
                  <WhatsAppIcon />
                </span>
                <span className="font-display text-lg">Chat on WhatsApp</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="gloss reveal rounded-[1.75rem] border border-line bg-panel p-6 sm:p-9">
          {status === 'idle' ? (
            <form noValidate onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
              <Field id="c-name" label="Name" error={errors.name}>
                <input {...a11y('name')} value={v.name} onChange={set('name')} autoComplete="name" placeholder="Your name" />
              </Field>
              <Field id="c-email" label="Email" error={errors.email}>
                <input {...a11y('email')} type="email" value={v.email} onChange={set('email')} autoComplete="email" placeholder="you@company.com" />
              </Field>
              <Field id="c-phone" label="Phone" optional error={errors.phone}>
                <input {...a11y('phone')} type="tel" value={v.phone} onChange={set('phone')} autoComplete="tel" placeholder="+91" />
              </Field>
              <Field id="c-type" label="Project type" error={errors.type}>
                <select {...a11y('type')} value={v.type} onChange={set('type')}>
                  <option value="">Choose one</option>
                  {PROJECT_TYPES.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </Field>
              <div className="sm:col-span-2">
                <Field id="c-budget" label="Estimated budget" optional>
                  <select {...a11y('budget')} value={v.budget} onChange={set('budget')}>
                    <option value="">Prefer not to say</option>
                    {BUDGETS.map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field id="c-message" label="Project description" error={errors.message}>
                  <textarea
                    {...a11y('message')}
                    rows={5}
                    value={v.message}
                    onChange={set('message')}
                    placeholder="What are you building, and what should it achieve?"
                  />
                </Field>
              </div>
              <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" className="btn btn-primary justify-center">
                  Start a Conversation <ArrowRight className="arrow size-4" />
                </button>
                <p className="text-xs text-muted">Opens WhatsApp with your details filled in.</p>
              </div>
            </form>
          ) : (
            <div role="status" className="flex min-h-[26rem] flex-col justify-center">
              <span className="grid size-14 place-items-center rounded-full bg-orange text-night">
                <Check className="size-6" />
              </span>
              <h3 className="mt-6 font-display text-3xl font-semibold">
                {status === 'sent' ? 'Almost there!' : 'One more step'}
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-fg/65">
                {status === 'sent'
                  ? 'WhatsApp opened in a new tab with your message ready — just press send. We usually reply the same working day.'
                  : 'Your browser blocked the WhatsApp window. Use one of the options below to send your enquiry.'}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={whatsappLink(compose(v))} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <WhatsAppIcon /> Open WhatsApp
                </a>
                <a href={mailto} className="btn border border-line hover:border-orange">
                  <Mail className="size-4" /> Send by email instead
                </a>
              </div>
              <button
                type="button"
                onClick={() => {
                  setV(EMPTY)
                  setStatus('idle')
                }}
                className="link mt-8 self-start text-sm text-muted"
              >
                Start a new enquiry
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
