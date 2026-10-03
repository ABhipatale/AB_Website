import { motion } from 'framer-motion'
import { useLocation, Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowUpRight, Heart } from 'lucide-react'
import {
  FaWhatsapp, FaLinkedinIn, FaInstagram, FaFacebookF, FaXTwitter, FaGithub,
} from 'react-icons/fa6'
import Logo from './ui/Logo'
import { FOOTER_LINKS, FOOTER_SERVICES, COMPANY } from '../lib/data'
import { fadeUp, stagger, viewport } from '../lib/motion'
import { CITIES } from '../lib/cities'

const SOCIALS = [
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaXTwitter, href: '#', label: 'X' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaGithub, href: '#', label: 'GitHub' },
]

export default function Footer() {
  const year = 2026 // build-time constant; update per release
  const isHome = useLocation().pathname === '/'
  // From a city page, section links point back to the home page (/#section).
  const hrefFor = (hash) => (isHome ? hash : `/${hash}`)

  return (
    <footer className="relative overflow-hidden border-t border-line bg-white">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,#000,transparent_60%)]" />

      <div className="container-x relative">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid gap-8 py-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]"
        >
          {/* Brand */}
          <motion.div variants={fadeUp}>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              {COMPANY.name} builds powerful digital solutions for modern businesses —
              premium websites, apps, AI software and automation that help you scale.
            </p>
            <div className="mt-6 flex gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-xl border border-line bg-white text-ink-soft shadow-soft"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={fadeUp}>
            <h4 className="font-poppins text-sm font-bold uppercase tracking-wider text-ink">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={hrefFor(l.href)}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-brand"
                  >
                    <span className="h-px w-3 bg-brand" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp}>
            <h4 className="font-poppins text-sm font-bold uppercase tracking-wider text-ink">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href={hrefFor('#services')}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-brand"
                  >
                    <span className="h-px w-3 bg-brand" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp}>
            <h4 className="font-poppins text-sm font-bold uppercase tracking-wider text-ink">
              Get in touch
            </h4>
            <ul className="mt-5 space-y-4">
              <li>
                <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-start gap-3 text-sm text-muted transition-colors">
                  <Phone className="mt-0.5 size-4 shrink-0 text-brand" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-3 text-sm text-muted transition-colors">
                  <Mail className="mt-0.5 size-4 shrink-0 text-brand" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-sm text-muted">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
                  India · Serving clients worldwide
                </span>
              </li>
            </ul>

            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366]/10 px-4 py-2 text-sm font-semibold text-emerald-700"
            >
              <FaWhatsapp className="size-4" /> Chat on WhatsApp
              <ArrowUpRight className="size-3.5" />
            </a>
          </motion.div>
        </motion.div>

        {/* City pages — internal links for local SEO */}
        <nav aria-label="Website developer by city" className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line py-5 text-sm">
          <span className="font-semibold text-ink">Website developer in:</span>
          {CITIES.map((c) => (
            <Link key={c.slug} to={`/${c.path}`} className="text-muted transition-colors hover:text-brand">
              {c.name}
            </Link>
          ))}
        </nav>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-line py-6 sm:flex-row">
          <p className="text-sm text-muted">
            © {year} {COMPANY.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-muted">
            Crafted with <Heart className="size-4 fill-red-500 text-red-500" /> in India
          </p>
          <div className="flex gap-5 text-sm text-muted">
            <a href="#" className="transition-colors">Privacy</a>
            <a href="#" className="transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
