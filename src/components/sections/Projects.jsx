import { motion } from 'framer-motion'
import { Rocket, Lock, ArrowUpRight, Globe, Smartphone, Bot } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { stagger, fadeUp, viewport } from '../../lib/motion'

/* ── Realistic mini previews (pure CSS/SVG, no external assets) ── */

function WebPreview() {
  return (
    <div className="absolute inset-x-5 bottom-0 top-6 overflow-hidden rounded-t-xl bg-white shadow-2xl">
      {/* browser chrome */}
      <div className="flex items-center gap-1 border-b border-line bg-surface px-2.5 py-1.5">
        <span className="size-1.5 rounded-full bg-red-300" />
        <span className="size-1.5 rounded-full bg-amber-300" />
        <span className="size-1.5 rounded-full bg-emerald-300" />
        <span className="ml-2 h-2 flex-1 rounded-full bg-white" />
      </div>
      {/* hero band */}
      <div className="bg-gradient-to-r from-blue-600 to-sky-500 px-3 py-3">
        <span className="block h-1.5 w-16 rounded bg-white/80" />
        <span className="mt-1.5 block h-2.5 w-28 rounded bg-white" />
        <span className="mt-2 block h-3 w-12 rounded-full bg-white/90" />
      </div>
      {/* cards */}
      <div className="grid grid-cols-3 gap-1.5 p-2.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded border border-line p-1.5">
            <span className="block size-3 rounded bg-gradient-to-br from-blue-600 to-sky-500" />
            <span className="mt-1 block h-1 w-full rounded bg-slate-200" />
            <span className="mt-0.5 block h-1 w-2/3 rounded bg-slate-100" />
          </div>
        ))}
      </div>
    </div>
  )
}

function MobilePreview() {
  return (
    <div className="absolute inset-0 flex items-end justify-center gap-3 px-6 pt-6">
      {/* back phone */}
      <div className="w-[34%] translate-y-4 overflow-hidden rounded-t-2xl border-[3px] border-b-0 border-slate-800 bg-white opacity-70 shadow-xl">
        <div className="bg-gradient-to-br from-blue-600 to-sky-500 p-2">
          <span className="block h-1 w-8 rounded bg-white/70" />
          <span className="mt-1 block h-1.5 w-12 rounded bg-white" />
        </div>
        <div className="space-y-1 p-1.5">
          <span className="block h-4 rounded bg-surface" />
          <span className="block h-1 w-3/4 rounded bg-slate-200" />
        </div>
      </div>
      {/* front phone */}
      <div className="w-[40%] overflow-hidden rounded-t-2xl border-[3px] border-b-0 border-slate-800 bg-white shadow-2xl">
        <div className="bg-gradient-to-br from-blue-600 to-sky-500 p-2.5">
          <span className="mx-auto block h-0.5 w-5 rounded bg-white/50" />
          <span className="mt-2 block h-1 w-10 rounded bg-white/70" />
          <span className="mt-1 block h-2 w-16 rounded bg-white" />
        </div>
        <div className="space-y-1.5 p-2">
          <div className="grid grid-cols-2 gap-1.5">
            <span className="block h-6 rounded bg-brand/10" />
            <span className="block h-6 rounded bg-sky/15" />
          </div>
          <span className="block h-1 w-3/4 rounded bg-slate-200" />
          <span className="block h-1 w-1/2 rounded bg-slate-200" />
        </div>
      </div>
    </div>
  )
}

function AIPreview() {
  return (
    <div className="absolute inset-x-5 bottom-0 top-6 overflow-hidden rounded-t-xl bg-white p-3 shadow-2xl">
      {/* assistant header */}
      <div className="flex items-center gap-1.5 border-b border-line pb-2">
        <span className="grid size-5 place-items-center rounded-md bg-gradient-to-br from-blue-600 to-sky-500">
          <Bot className="size-3 text-white" />
        </span>
        <span className="h-1.5 w-14 rounded bg-slate-300" />
        <span className="ml-auto size-1.5 rounded-full bg-emerald-400" />
      </div>
      {/* chat bubbles */}
      <div className="mt-2.5 space-y-2">
        <div className="flex justify-end">
          <span className="block h-4 w-20 rounded-lg rounded-br-sm bg-gradient-to-r from-blue-600 to-sky-500" />
        </div>
        <div className="space-y-1">
          <span className="block h-2.5 w-28 rounded-lg rounded-bl-sm bg-slate-100" />
          <span className="block h-2.5 w-20 rounded-lg bg-slate-100" />
        </div>
        <div className="flex justify-end">
          <span className="block h-3 w-14 rounded-lg rounded-br-sm bg-gradient-to-r from-blue-600 to-sky-500 opacity-70" />
        </div>
      </div>
      {/* input */}
      <div className="absolute inset-x-3 bottom-3 flex items-center gap-1.5 rounded-full border border-line px-2 py-1.5">
        <span className="h-1 flex-1 rounded bg-slate-200" />
        <span className="size-3.5 rounded-full bg-gradient-to-br from-blue-600 to-sky-500" />
      </div>
    </div>
  )
}

const PROJECTS = [
  {
    icon: Globe,
    title: 'Web Platform',
    desc: 'Corporate websites, dashboards and full SaaS platforms.',
    Preview: WebPreview,
    tint: 'from-blue-500/20 to-sky-400/10',
  },
  {
    icon: Smartphone,
    title: 'Mobile App',
    desc: 'Cross-platform iOS & Android apps with native feel.',
    Preview: MobilePreview,
    tint: 'from-sky-500/20 to-cyan-400/10',
  },
  {
    icon: Bot,
    title: 'AI Product',
    desc: 'Smart assistants and AI-powered automation tools.',
    Preview: AIPreview,
    tint: 'from-indigo-500/20 to-blue-400/10',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-14 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-surface to-white" />

      <div className="container-x">
        <SectionHeading
          eyebrow="Our Projects"
          title="Project showcase"
          highlight="coming soon"
          subtitle="We're putting the finishing touches on our first case studies. Real projects with real results will be published here shortly."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECTS.map(({ icon: Icon, title, desc, Preview, tint }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-3xl border border-line bg-white shadow-soft"
            >
              {/* Preview window */}
              <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${tint}`}>
                <div className="bg-grid absolute inset-0 opacity-40" />
                <Preview />

                {/* Frosted "coming soon" overlay */}
                <div className="absolute inset-0 grid place-items-center bg-white/45 backdrop-blur-[3px]">
                  <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide text-ink shadow-lift">
                    <Lock className="size-3.5 text-brand" />
                    Coming Soon
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="flex items-start gap-3.5 p-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-[0_10px_22px_-8px_rgba(37,99,235,0.5)]">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{desc}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-8 flex flex-col items-center gap-4 rounded-3xl border border-line bg-white px-8 py-6 text-center shadow-soft sm:flex-row sm:justify-between sm:text-left"
        >
          <div className="flex items-center gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white">
              <Rocket className="size-5.5" />
            </span>
            <div>
              <p className="text-xl font-bold text-ink">Want to be our next project?</p>
              <p className="mt-1 text-sm text-muted">
                Let's build something worth showcasing — your project could be featured here.
              </p>
            </div>
          </div>
          <Button href="#contact" size="lg" icon={ArrowUpRight}>
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
