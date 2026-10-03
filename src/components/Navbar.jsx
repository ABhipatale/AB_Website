import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ArrowRight } from 'lucide-react'
import Logo from './ui/Logo'
import Button from './ui/Button'
import { NAV_LINKS, COMPANY } from '../lib/data'

export default function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  // Anchor links smooth-scroll on the home page; from a city page they point
  // back to the relevant home section (e.g. "/#services").
  const hrefFor = (hash) => (isHome ? hash : `/${hash}`)

  // Glass state on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy for active link — only meaningful on the single-page home route
  useEffect(() => {
    if (!isHome) return
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [isHome])

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="fixed inset-x-0 top-0 z-[90] flex justify-center px-3 pt-3 sm:px-5 sm:pt-4"
      >
        <nav
          className={[
            'flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5',
            scrolled
              ? 'glass shadow-lift'
              : 'border border-transparent bg-white/40 backdrop-blur-sm',
          ].join(' ')}
        >
          <a href={hrefFor('#home')} aria-label={COMPANY.name} className="shrink-0">
            <Logo />
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = isHome && active === link.href
              return (
                <li key={link.href}>
                  <a
                    href={hrefFor(link.href)}
                    className={[
                      'relative rounded-full px-3.5 py-2 text-sm font-semibold transition-colors',
                      isActive ? 'text-brand' : 'text-ink-soft hover:text-brand',
                    ].join(' ')}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-brand-soft"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-ink-soft xl:flex"
            >
              <Phone className="size-4" />
              {COMPANY.phone}
            </a>
            <Button href={hrefFor('#contact')} size="md" className="hidden sm:inline-flex" icon={ArrowRight}>
              Get Started
            </Button>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid size-10 place-items-center rounded-xl border border-line bg-white text-ink lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[95] bg-ink/30 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 right-0 z-[96] flex w-[82%] max-w-sm flex-col bg-white p-6 shadow-2xl lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid size-10 place-items-center rounded-xl border border-line bg-white text-ink"
                >
                  <X className="size-5" />
                </button>
              </div>

              <ul className="mt-8 flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.1 }}
                  >
                    <a
                      href={hrefFor(link.href)}
                      onClick={() => setOpen(false)}
                      className={[
                        'flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-semibold transition-colors',
                        isHome && active === link.href
                          ? 'bg-brand-soft text-brand'
                          : 'text-ink',
                      ].join(' ')}
                    >
                      {link.label}
                      <ArrowRight className="size-4 opacity-40" />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-3 pt-6">
                <Button href={hrefFor('#contact')} onClick={() => setOpen(false)} size="lg" className="w-full" icon={ArrowRight}>
                  Get Started
                </Button>
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="flex items-center justify-center gap-2 rounded-full border border-line py-3 text-sm font-semibold text-ink-soft"
                >
                  <Phone className="size-4" /> {COMPANY.phone}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
