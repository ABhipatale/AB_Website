import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import useLenis from './hooks/useLenis'
import Loader from './components/fx/Loader'
import ScrollProgress from './components/fx/ScrollProgress'
import FloatingActions from './components/fx/FloatingActions'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

/**
 * Global chrome shared by every route: smooth scroll, loader (home only),
 * scroll progress, navbar, footer and floating actions.
 */
export default function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  // City pages skip the intro loader and are visible immediately (better for
  // SEO and faster perceived load); the home page plays the loader once.
  const [loaded, setLoaded] = useState(!isHome)
  useEffect(() => {
    if (!isHome) setLoaded(true)
  }, [isHome])

  useLenis()

  return (
    <>
      {isHome && <Loader onDone={() => setLoaded(true)} />}

      <ScrollProgress />

      <Navbar />

      <main className={loaded ? 'opacity-100 transition-opacity duration-700' : 'opacity-0'}>
        <Outlet />
      </main>

      <Footer />
      <FloatingActions />
    </>
  )
}
