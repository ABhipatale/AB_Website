import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Play, Sparkles, ShieldCheck, TrendingUp, Rocket } from 'lucide-react'
import {
  SiReact, SiLaravel, SiNodedotjs, SiTailwindcss, SiDocker, SiMysql,
} from 'react-icons/si'
import Button from '../ui/Button'
import Counter from '../ui/Counter'
import Particles from '../fx/Particles'
import useTilt from '../../hooks/useTilt'
import { stagger, fadeUp, slideLeft, EASE } from '../../lib/motion'
import { FACTS } from '../../lib/data'

const ROTATING = ['Business', 'Startup', 'Store', 'Brand']

const TECH = [
  { Icon: SiReact, color: '#61DAFB', name: 'React' },
  { Icon: SiLaravel, color: '#FF2D20', name: 'Laravel' },
  { Icon: SiNodedotjs, color: '#5FA04E', name: 'Node' },
  { Icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind' },
  { Icon: SiDocker, color: '#2496ED', name: 'Docker' },
  { Icon: SiMysql, color: '#4479A1', name: 'MySQL' },
]

function useMouseParallax() {
  const [p, setP] = useState({ x: 0, y: 0 })
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const onMove = (e) => {
      setP({ x: (e.clientX / window.innerWidth - 0.5) * 2, y: (e.clientY / window.innerHeight - 0.5) * 2 })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])
  return p
}

function RotatingWord() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % ROTATING.length), 2600)
    return () => clearInterval(id)
  }, [])
  return (
    <span className="relative inline-block">
      <motion.span
        key={i}
        initial={{ y: '0.65em', opacity: 0, filter: 'blur(8px)' }}
        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.6, ease: EASE }}
        className="text-gradient inline-block"
      >
        {ROTATING[i]}
      </motion.span>
      <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none" aria-hidden="true">
        <motion.path
          d="M3 8C60 3 120 3 180 6C220 8 260 8 297 4"
          stroke="url(#uline)" strokeWidth="4" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.8 }}
        />
        <defs>
          <linearGradient id="uline" x1="0" y1="0" x2="300" y2="0">
            <stop stopColor="#2563eb" /><stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  )
}

export default function Hero() {
  const wrap = useRef(null)
  const tiltRef = useTilt({ max: 7 })
  const parallax = useMouseParallax()
  const { scrollYProgress } = useScroll({ target: wrap, offset: ['start start', 'end start'] })
  const yVisual = useTransform(scrollYProgress, [0, 1], [0, 90])
  const px = (d) => parallax.x * d
  const py = (d) => parallax.y * d

  return (
    <section
      id="home"
      ref={wrap}
      className="relative flex min-h-screen items-center overflow-hidden bg-white pb-20 pt-32 sm:pt-36"
    >
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-aurora-1 absolute -left-[10%] -top-[15%] size-[46vw] rounded-full bg-brand/12 blur-[130px]" />
        <div className="animate-aurora-2 absolute right-[-8%] top-[-6%] size-[42vw] rounded-full bg-cyan-400/14 blur-[130px]" />
        <div className="animate-aurora-3 absolute bottom-[-18%] left-[30%] size-[40vw] rounded-full bg-indigo-400/10 blur-[130px]" />
      </div>
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top,#000_5%,transparent_70%)]" />
      <Particles className="opacity-40" />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* ── Left: copy ── */}
        <motion.div variants={stagger(0.09)} initial="hidden" animate="show">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-4 py-1.5 text-xs font-semibold text-ink-soft shadow-soft backdrop-blur"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Available for new projects
            <span className="mx-1 h-3 w-px bg-line" />
            <span className="flex items-center gap-1 text-brand"><Sparkles className="size-3" /> AB Tech Services</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-ink sm:text-[3.2rem] lg:text-[3.7rem]"
          >
            Building powerful <span className="text-gradient">digital solutions</span> for your{' '}
            <RotatingWord />
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            We design and engineer premium websites, mobile apps, AI-powered software and
            business automation — crafted to world-class standards to help modern businesses
            grow faster.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="#contact" size="lg" icon={ArrowRight}>Start Your Project</Button>
            <Button href="#solutions" size="lg" variant="outline" icon={Play}>See What We Build</Button>
          </motion.div>

          {/* Honest stat counters */}
          <motion.div variants={fadeUp} className="mt-10 grid max-w-lg grid-cols-3 gap-4">
            {FACTS.slice(0, 3).map((s) => (
              <div key={s.label} className="border-l-2 border-line pl-3">
                <p className="font-poppins text-2xl font-extrabold text-ink sm:text-3xl">
                  <span className="text-gradient"><Counter value={s.value} suffix={s.suffix} /></span>
                </p>
                <p className="mt-0.5 text-xs font-medium text-muted">{s.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Tech strip */}
          <motion.div variants={fadeUp} className="mt-8">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-muted">Built on a modern stack</p>
            <div className="mt-3 flex flex-wrap items-center gap-4">
              {TECH.map(({ Icon, color, name }) => (
                <span key={name} title={name} className="grid size-9 place-items-center rounded-xl border border-line bg-white shadow-soft transition-transform duration-300 hover:-translate-y-1">
                  <Icon className="size-5" style={{ color }} />
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Right: device showcase ── */}
        <motion.div style={{ y: yVisual }} variants={slideLeft} initial="hidden" animate="show" className="relative">
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand/15 via-cyan-400/10 to-transparent blur-2xl" />

          {/* Laptop with the banner, tilts toward cursor */}
          <div ref={tiltRef} className="tilt relative mx-auto w-full max-w-[540px]">
            <div className="rounded-[1.1rem] border-[8px] border-slate-800 bg-slate-800 shadow-lift">
              <div className="overflow-hidden rounded-md bg-white">
                <img
                  src="/assets/banner1.png"
                  alt="AB Tech Services — website & app showcase"
                  width="1694" height="929" fetchPriority="high"
                  className="block aspect-[1694/929] w-full object-cover"
                />
              </div>
            </div>
            <div className="mx-auto h-2.5 w-[112%] -translate-x-[5.4%] rounded-b-2xl bg-gradient-to-b from-slate-300 to-slate-400 shadow-md" />
            <div className="mx-auto h-1 w-[16%] rounded-b-lg bg-slate-400/70" />
          </div>

          {/* Floating phone */}
          <motion.div
            initial={{ opacity: 0, y: 30, x: 20 }} animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
            style={{ transform: `translate3d(${px(18)}px, ${py(18)}px, 0)` }}
            className="absolute -bottom-10 right-0 w-[30%] max-w-[150px] sm:-right-4"
          >
            <div className="animate-float-med overflow-hidden rounded-[1.1rem] border-4 border-slate-800 bg-slate-800 shadow-lift">
              <img src="/assets/banner-mobile.png" alt="AB Tech Services — mobile view" width="426" height="897" className="block aspect-[142/299] w-full rounded-[0.7rem] object-cover" />
            </div>
          </motion.div>

          {/* Floating glass: 1 Year Support */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.7 }}
            style={{ transform: `translate3d(${px(28)}px, ${py(28)}px, 0)` }}
            className="absolute -left-2 bottom-8 sm:-left-6"
          >
            <div className="glass flex animate-float-slow items-center gap-2.5 rounded-2xl px-3.5 py-2.5">
              <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white"><ShieldCheck className="size-4.5" /></span>
              <div className="leading-tight"><p className="text-xs font-extrabold text-ink">1 Year</p><p className="text-[0.65rem] text-muted">Free Support</p></div>
            </div>
          </motion.div>

          {/* Floating glass: growth metric */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.85 }}
            style={{ transform: `translate3d(${px(-22)}px, ${py(-22)}px, 0)` }}
            className="absolute -right-1 top-6 sm:-right-6"
          >
            <div className="glass flex animate-float-med items-center gap-2.5 rounded-2xl px-3.5 py-2.5">
              <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 text-white"><TrendingUp className="size-4.5" /></span>
              <div className="leading-tight"><p className="text-xs font-extrabold text-ink">Conversion-first</p><p className="text-[0.65rem] text-muted">SEO-ready builds</p></div>
            </div>
          </motion.div>

          {/* Floating chip: rocket */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: EASE, delay: 1 }}
            style={{ transform: `translate3d(${px(34)}px, ${py(34)}px, 0)` }}
            className="absolute left-6 top-2 hidden sm:block"
          >
            <div className="grid size-11 animate-float-slow place-items-center rounded-2xl border border-line bg-white shadow-lift">
              <Rocket className="size-5 text-brand" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
