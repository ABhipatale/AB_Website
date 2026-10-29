import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowUpRight, X } from 'lucide-react'

import { Logo, Mark, HomeLink } from './ui/Logo'
import { COMPANY, NAV_LINKS } from '../lib/data'

/**
 * Floating corner navigation: the brand mark sits top-left, a compact
 * "Menu" pill top-right. Both slide away while scrolling down and return
 * on scroll up. The menu opens as a panel from the right edge.
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
    const focusables = panelRef.current.querySelectorAll('a, button')
    focusables[1]?.focus()
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
      buttonRef.current?.focus()
    }
  }, [open])

  const pill = `transition-[transform,background-color,box-shadow] duration-500 ease-out-soft ${
    hidden && !open ? '-translate-y-24' : 'translate-y-0'
  } ${scrolled ? 'bg-paper/90 shadow-[0_8px_30px_-12px_rgba(21,21,21,0.25)] backdrop-blur-md' : 'bg-transparent'}`

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

      {/* actions — top right */}
      <div className={`fixed right-3 top-3 z-50 flex items-center gap-1 rounded-full p-1 sm:right-5 sm:top-5 ${pill}`}>
        <a href="/#contact" className="link mx-3 hidden text-sm font-semibold md:inline">
          Let&apos;s talk
        </a>
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="site-menu"
          className="group flex h-11 items-center gap-3 rounded-full bg-ink pl-5 pr-4 text-sm font-semibold text-paper transition-colors hover:bg-orange"
        >
          Menu
          <span aria-hidden="true" className="flex flex-col gap-[5px]">
            <span className="block h-[2px] w-5 bg-current transition-transform group-hover:translate-x-0.5" />
            <span className="block h-[2px] w-3.5 bg-orange transition-all group-hover:w-5 group-hover:bg-current" />
          </span>
        </button>
      </div>

      {/* menu panel */}
      <div
        className={`fixed inset-0 z-[60] ${open ? 'visible' : 'invisible'}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          tabIndex={-1}
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-500 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <nav
          id="site-menu"
          ref={panelRef}
          aria-label="Main"
          className={`absolute inset-y-0 right-0 flex w-full max-w-md flex-col overflow-y-auto bg-ink text-paper transition-transform duration-500 ease-out-soft sm:rounded-l-[2rem] ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 pt-6">
            <Mark light className="size-10" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid size-11 place-items-center rounded-full border border-line-dark transition-colors hover:border-orange hover:text-orange"
              aria-label="Close menu"
            >
              <X className="size-5" />
            </button>
          </div>

          <ul className="mt-10 flex-1 px-6">
            {NAV_LINKS.map((l, i) => (
              <li
                key={l.href}
                className={`border-b border-line-dark transition-[opacity,transform] duration-500 ease-out-soft ${
                  open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: open ? `${120 + i * 45}ms` : '0ms' }}
              >
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-4 py-4 font-display text-3xl font-semibold transition-colors hover:text-orange"
                >
                  <span className="tag text-orange">0{i + 1}</span>
                  {l.label}
                  <ArrowUpRight className="ml-auto size-5 self-center opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="space-y-2 px-6 pb-8 pt-10 text-sm text-paper/70">
            <p className="tag text-paper/40">Get in touch</p>
            <a href={`tel:${COMPANY.phoneRaw}`} className="block hover:text-orange">
              {COMPANY.phone}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="block hover:text-orange">
              {COMPANY.email}
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
