import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import {
  ArrowRight, Play, Sparkles, ShieldCheck, BadgeCheck, Bot,
  CreditCard, Wand2, Rocket,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import Button from '../ui/Button'
import Particles from '../fx/Particles'
import { stagger, fadeUp, slideLeft, EASE } from '../../lib/motion'
import { COMPANY } from '../../lib/data'

// The last word of the headline cycles through our core capabilities.
const ROTATING = ['Business', 'Startup', 'Store', 'Brand']

const INTEGRATIONS = [
  { Icon: Bot, label: 'AI Integration' },
  { Icon: FaWhatsapp, label: 'WhatsApp' },
  { Icon: CreditCard, label: 'Razorpay' },
  { Icon: Wand2, label: 'Animated UI' },
]

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
      <svg
        className="absolute -bottom-2 left-0 w-full"
        height="12"
        viewBox="0 0 300 12"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M3 8C60 3 120 3 180 6C220 8 260 8 297 4"
          stroke="#2563eb"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.8 }}
        />
      </svg>
    </span>
  )
}

/* ── The banner shown on the laptop screen ── */
function ScreenPreview() {
  return (
    <img
      src="/assets/banner1.png"
      alt="AB Technology Solution — website showcase"
      width="1694"
      height="929"
      // native aspect ratio of banner1.png, so it fills the screen undistorted
      className="block aspect-[1694/929] w-full bg-white object-cover"
    />
  )
}

/* ── The mobile view of the same design, cropped from the banner ── */
function PhoneMockup() {
  return (
    <div className="overflow-hidden rounded-[1.1rem] border-4 border-slate-800 bg-slate-800 shadow-lift">
      <img
        src="/assets/banner-mobile.png"
        alt="AB Technology Solution — mobile view"
        width="426"
        height="897"
        // native aspect of the cropped mobile screen
        className="block aspect-[142/299] w-full rounded-[0.7rem] bg-white object-cover"
      />
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pb-14 pt-28 sm:pt-32 lg:pb-16"
    >
      {/* Refined light backdrop */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top,#000_5%,transparent_70%)]" />
      <div className="pointer-events-none absolute -left-32 -top-24 size-[480px] rounded-full bg-brand/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-24 top-0 size-[420px] rounded-full bg-sky/12 blur-[130px]" />
      <Particles className="opacity-40" />

      <div className="container-x relative grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-8">
        {/* ── Left: copy ── */}
        <motion.div variants={stagger(0.1)} initial="hidden" animate="show">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-semibold text-ink-soft shadow-soft"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Available for new projects
            <span className="mx-1 h-3 w-px bg-line" />
            <span className="flex items-center gap-1 text-brand">
              <Sparkles className="size-3" /> {COMPANY.tagline}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-5 text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-ink sm:text-[3.2rem] lg:text-[3.6rem]"
          >
            Create your <span className="text-gradient">business website</span> that grows your{' '}
            <RotatingWord />
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            Modern, dynamic, responsive and SEO-friendly websites, mobile apps and
            AI-powered software — engineered to premium standards to help your company
            scale faster.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-7 flex flex-wrap items-center gap-3">
            <Button href="#contact" size="lg" icon={ArrowRight}>
              Let's Build Your Success
            </Button>
            <Button href="#solutions" size="lg" variant="outline" icon={Play}>
              See What We Build
            </Button>
          </motion.div>

          {/* Upcoming software announcement */}
          <motion.div
            variants={fadeUp}
            className="mt-6 flex items-start gap-3 rounded-2xl border border-brand/20 bg-brand-soft/60 p-4"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 text-white">
              <Rocket className="size-4.5" />
            </span>
            <p className="text-sm leading-relaxed text-ink-soft">
              <span className="mr-2 rounded-full bg-brand px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-wide text-white">
                Coming Soon
              </span>
              Two new software products that <strong className="font-bold text-ink">automate
              any business</strong> — launching shortly.
            </p>
          </motion.div>

          {/* Smart integrations */}
          <motion.div variants={fadeUp} className="mt-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
              Powered with smart integrations
            </p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {INTEGRATIONS.map(({ Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white py-1.5 pl-1.5 pr-3.5 text-xs font-semibold text-ink-soft shadow-soft"
                >
                  <span className="grid size-6 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-sky-500 text-white">
                    <Icon className="size-3.5" />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Right: device mockups ── */}
        <motion.div variants={slideLeft} initial="hidden" animate="show" className="relative">
          {/* glow behind devices */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand/15 via-sky/10 to-transparent blur-2xl" />

          {/* Laptop */}
          <div className="relative mx-auto w-full max-w-[540px] animate-float-slow">
            <div className="rounded-[1.1rem] border-[8px] border-slate-800 bg-slate-800 shadow-lift">
              <div className="overflow-hidden rounded-md">
                <ScreenPreview />
              </div>
            </div>
            {/* laptop base */}
            <div className="mx-auto h-2.5 w-[112%] -translate-x-[5.4%] rounded-b-2xl bg-gradient-to-b from-slate-300 to-slate-400 shadow-md" />
            <div className="mx-auto h-1 w-[16%] rounded-b-lg bg-slate-400/70" />
          </div>

          {/* Floating phone */}
          <motion.div
            initial={{ opacity: 0, y: 30, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
            className="absolute -bottom-10 right-0 w-[30%] max-w-[150px] sm:-right-4"
          >
            <div className="animate-float-med">
              <PhoneMockup />
            </div>
          </motion.div>

          {/* Floating badge — 1 Year Support */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.7 }}
            className="absolute -left-2 bottom-6 sm:-left-6"
          >
            <div className="glass flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5 animate-float-med">
              <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 text-white">
                <ShieldCheck className="size-4.5" />
              </span>
              <div className="leading-tight">
                <p className="text-xs font-extrabold text-ink">1 Year</p>
                <p className="text-[0.65rem] text-muted">Support</p>
              </div>
            </div>
          </motion.div>

          {/* Floating badge — 100% Satisfaction */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.85 }}
            className="absolute -right-1 top-4 sm:-right-5"
          >
            <div className="glass flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5 animate-float-slow">
              <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 text-white">
                <BadgeCheck className="size-4.5" />
              </span>
              <div className="leading-tight">
                <p className="text-xs font-extrabold text-ink">100%</p>
                <p className="text-[0.65rem] text-muted">Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
