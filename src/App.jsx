import { useState } from 'react'
import useLenis from './hooks/useLenis'

import Loader from './components/fx/Loader'
import Cursor from './components/fx/Cursor'
import MouseGlow from './components/fx/MouseGlow'
import ScrollProgress from './components/fx/ScrollProgress'
import FloatingActions from './components/fx/FloatingActions'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Solutions from './components/sections/Solutions'
import WhyChooseUs from './components/sections/WhyChooseUs'
import Technologies from './components/sections/Technologies'
import Process from './components/sections/Process'
import Guarantees from './components/sections/Guarantees'
import Pricing from './components/sections/Pricing'
import FAQ from './components/sections/FAQ'
import CTA from './components/sections/CTA'
import Contact from './components/sections/Contact'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  useLenis()

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />
      <Cursor />
      <MouseGlow />
      <ScrollProgress />

      <Navbar />

      <main className={loaded ? 'opacity-100 transition-opacity duration-700' : 'opacity-0'}>
        <Hero />
        <About />
        <Services />
        <Solutions />
        <WhyChooseUs />
        <Technologies />
        <Process />
        <Guarantees />
        <Pricing />
        <FAQ />
        <CTA />
        <Contact />
      </main>

      <Footer />
      <FloatingActions />
    </>
  )
}
