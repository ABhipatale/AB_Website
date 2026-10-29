import { Outlet, useLocation } from 'react-router-dom'

import useReveal from './hooks/useReveal'
import Splash from './components/Splash'
import Header from './components/Header'
import Footer from './components/Footer'

/** Global chrome shared by every route. */
export default function Layout() {
  const { pathname } = useLocation()
  useReveal(pathname)

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
