import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import useReveal from './hooks/useReveal'
import Splash from './components/Splash'
import Header from './components/Header'
import Footer from './components/Footer'
import { initAnalytics, trackContactClicks } from './lib/analytics'

/** Global chrome shared by every route. */
export default function Layout() {
  const { pathname, hash } = useLocation()
  useReveal(pathname)

  useEffect(() => {
    initAnalytics()
    return trackContactClicks()
  }, [])

  // a new page starts at the top (links to a #section keep their target)
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div id="top">
      <Splash />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
