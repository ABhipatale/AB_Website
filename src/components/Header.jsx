import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowUpRight, MessageCircle, X } from 'lucide-react'

import { Logo, HomeLink } from './ui/Logo'
import { COMPANY, NAV_LINKS } from '../lib/data'

/**
 * Floating corner navigation: the brand mark sits top-left, "Let's talk"
 * and a compact "Menu" pill top-right. The brand slides away while scrolling down and returns
 * on scroll up; the actions stay put. The menu opens full-screen.
 */
export default function Header() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const buttonRef = useRef(null)
  const panelRef = useRef(null)
  const { pathname } = useLocation()

  // hide on scroll down, show on scroll up
  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      setHidden(y > 320 && y > last)
      last = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close on route change
  useEffect(() => setOpen(false), [pathname])

  // lock scroll, focus first link, close on Escape, keep focus inside
  useEffect(() => {
    if (!open) return
    const root = document.documentElement
    root.style.overflow = 'hidden'
    // the toggle button comes just before the nav, so it starts the trap
    const focusables = [buttonRef.current, ...panelRef.current.querySelectorAll('a')]
    focusables[2]?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
      if (e.key === 'Tab') {
        const first = focusables[0]
        const lastEl = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          lastEl.focus()
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      root.style.overflow = ''
      document.removeEventListener('keydown', onKey)
      if (panelRef.current?.contains(document.activeElement)) buttonRef.current?.focus()
    }
  }, [open])

  const pill = `transition-[transform,background-color,box-shadow] duration-500 ease-out-soft ${
    hidden && !open ? '-translate-y-24' : 'translate-y-0'
  } ${scrolled ? 'glass bg-night-2/60' : 'bg-transparent'}`

  return (
    <header>
      <a
        href="#main"
        className="btn btn-dark sr-only fixed left-4 top-4 z-[70] focus:not-sr-only focus:px-6"
      >
        Skip to content
      </a>

      {/* brand — top left */}
      <div className={`fixed left-3 top-3 z-50 rounded-full sm:left-5 sm:top-5 ${pill}`}>
        <HomeLink className="flex h-12 items-center rounded-full px-3">
          <Logo className="h-8 w-auto sm:h-9" />
        </HomeLink>
      </div>

      {/* actions — top right; stays visible so "Let's talk" is always one tap away */}
      <div
        className={`fixed right-3 top-3 z-[65] flex items-center gap-1 rounded-full p-1 transition-[background-color,box-shadow] duration-500 sm:right-5 sm:top-5 ${
          open ? 'bg-transparent' : scrolled ? 'glass bg-night-2/60' : ''
        }`}
      >
        {!open && (
          <a
            href="/#contact"
            className="mx-1 flex h-11 items-center gap-2 rounded-full px-3 text-sm font-semibold transition-colors hover:text-orange sm:mx-2"
          >
            <span className="size-2 rounded-full bg-orange max-[379px]:hidden" aria-hidden="true" />
            <MessageCircle className="size-5 text-orange min-[380px]:hidden" aria-hidden="true" />
            <span className="max-[379px]:sr-only">Let&apos;s talk</span>
          </a>
        )}
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className={`group flex h-11 items-center gap-3 rounded-full pl-5 pr-4 text-sm font-semibold transition-colors ${
            open ? 'border border-line text-fg hover:border-orange hover:text-orange' : 'bg-linear-to-b from-white to-[#dcdcdc] text-night shadow-[inset_0_1px_0_#fff,0_10px_24px_-12px_rgb(255_255_255/0.35)] hover:from-[#ff9443] hover:to-[#ec6600]'
          }`}
        >
          {open ? 'Close' : 'Menu'}
          {open ? (
            <X className="size-4" aria-hidden="true" />
          ) : (
            <span aria-hidden="true" className="flex flex-col gap-[5px]">
              <span className="block h-[2px] w-5 bg-current transition-transform group-hover:translate-x-0.5" />
              <span className="block h-[2px] w-3.5 bg-orange transition-all group-hover:w-5 group-hover:bg-current" />
            </span>
          )}
        </button>
      </div>

      {/* full-screen menu — opens as a circle growing from the Menu button */}
      <nav
        id="site-menu"
        ref={panelRef}
        aria-label="Main"
        aria-hidden={!open}
        inert={!open}
        className={`menu fixed inset-0 z-[60] overflow-y-auto bg-night text-fg ${open ? 'is-open' : ''}`}
      >
        {/* geometric detail echoing the AB monogram */}
        <svg
          viewBox="0 0 400 400"
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[30vmin] -right-[25vmin] size-[95vmin] text-fg/[0.06]"
        >
          <circle cx="200" cy="200" r="198" fill="none" stroke="currentColor" />
          <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeDasharray="2 6" />
          <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" />
          <line x1="0" y1="200" x2="400" y2="200" stroke="currentColor" />
          <line x1="200" y1="0" x2="200" y2="400" stroke="currentColor" />
          <circle cx="200" cy="2" r="4" className="fill-orange" />
        </svg>

        <div className="wrap relative flex min-h-full flex-col pb-10 pt-6">
          <HomeLink className="flex h-12 w-max items-center" onClick={() => setOpen(false)}>
            <Logo className="h-8 w-auto sm:h-9" />
          </HomeLink>

          <div className="mt-12 grid flex-1 gap-14 lg:mt-16 lg:grid-cols-[1.5fr_0.5fr] lg:items-end">
            <ul className="border-t border-line">
              {NAV_LINKS.map((l, i) => (
                <li key={l.href} className="menu-item border-b border-line" style={{ '--i': i }}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-5 py-3 font-display text-4xl font-semibold tracking-tight transition-colors hover:text-orange focus-visible:text-orange sm:gap-8 sm:text-6xl lg:py-4 lg:text-7xl"
                  >
                    <span className="tag w-7 shrink-0 text-muted transition-colors group-hover:text-orange">0{i + 1}</span>
                    <span>{l.label}</span>
                    <span
                      aria-hidden="true"
                      className="ml-auto hidden h-px w-0 bg-orange transition-[width] duration-500 ease-out-soft group-hover:w-24 group-focus-visible:w-24 sm:block"
                    />
                    <ArrowUpRight className="size-6 shrink-0 -translate-x-2 opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:size-8" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="menu-item space-y-8" style={{ '--i': NAV_LINKS.length }}>
              <div>
                <p className="tag text-muted">Start a project</p>
                <p className="mt-3 font-display text-2xl font-semibold leading-snug">
                  Have an idea? <span className="text-gloss">Let&apos;s make it real.</span>
                </p>
                <a href="/#contact" onClick={() => setOpen(false)} className="btn btn-primary mt-5">
                  Send an enquiry <ArrowUpRight className="arrow size-4" />
                </a>
              </div>
              <div className="space-y-2 text-fg/70">
                <p className="tag text-muted">Get in touch</p>
                <a href={`tel:${COMPANY.phoneRaw}`} className="block hover:text-orange">
                  {COMPANY.phone}
                </a>
                <a href={`mailto:${COMPANY.email}`} className="block hover:text-orange">
                  {COMPANY.email}
                </a>
                <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="block hover:text-orange">
                  WhatsApp
                </a>
              </div>
              <p className="tag text-muted">
                {COMPANY.baseCity}, {COMPANY.region}
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
