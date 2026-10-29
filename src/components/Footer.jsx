import { Link } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'

import { Logo, HomeLink } from './ui/Logo'
import WhatsAppIcon from './ui/WhatsAppIcon'
import { COMPANY, NAV_LINKS, PRODUCTS } from '../lib/data'
import { SERVICE_PAGES } from '../lib/pages'
import { CITIES } from '../lib/cities'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-line bg-night text-fg">
      <div className="wrap pb-8 pt-16 sm:pt-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_0.9fr]">
          <div>
            <HomeLink className="inline-block">
              <Logo className="h-11 w-auto" />
            </HomeLink>
            <p className="mt-6 max-w-sm text-muted">
              Websites, apps and custom software for businesses across Maharashtra — designed and built in Karad.
            </p>
          </div>

          <nav aria-label="Services">
            <p className="tag text-muted">Services</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICE_PAGES.map((p) => (
                <li key={p.path}>
                  <Link to={`/${p.path}`} className="text-fg/75 transition-colors hover:text-orange">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Products and pages">
            <p className="tag text-muted">SaaS products</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {PRODUCTS.map((p) => (
                <li key={p.name}>
                  <Link to={p.page} className="text-fg/75 transition-colors hover:text-orange">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="tag mt-8 text-muted">Explore</p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2.5 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-fg/75 transition-colors hover:text-orange">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="tag text-muted">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={`tel:${COMPANY.phoneRaw}`} className="text-fg/75 hover:text-orange">
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="text-fg/75 hover:text-orange">
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-fg/75 hover:text-orange"
                >
                  <WhatsAppIcon /> WhatsApp
                </a>
              </li>
              <li className="text-muted">
                {COMPANY.baseCity}, {COMPANY.region}, {COMPANY.country}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-6">
          <p className="tag text-muted">Website developer in</p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {CITIES.map((c) => (
              <li key={c.slug}>
                <Link to={`/${c.path}`} className="text-fg/70 transition-colors hover:text-orange">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* oversized wordmark */}
        <p
          aria-hidden="true"
          className="pointer-events-none mt-12 select-none font-display text-[22vw] font-bold leading-[0.8] tracking-tighter text-fg/[0.04] lg:text-[15rem]"
        >
          AB<span className="text-orange/[0.1]">nexa</span>
        </p>

        <div className="mt-6 flex flex-col-reverse items-start justify-between gap-4 text-xs text-muted sm:flex-row sm:items-center">
          <p>
            © {year} {COMPANY.name} · {COMPANY.tagline}. All rights reserved.
          </p>
          <a href="#top" className="group inline-flex items-center gap-2 hover:text-orange">
            Back to top
            <span className="grid size-8 place-items-center rounded-full border border-line transition-colors group-hover:border-orange">
              <ArrowUp className="size-3.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
