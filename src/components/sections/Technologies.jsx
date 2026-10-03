import { motion } from 'framer-motion'
import {
  SiReact, SiLaravel, SiNodedotjs, SiPython, SiFlutter,
  SiDocker, SiMysql, SiMongodb, SiGreensock, SiTailwindcss,
} from 'react-icons/si'
import SectionHeading from '../ui/SectionHeading'
import { stagger, viewport, EASE } from '../../lib/motion'

// A small monogram tile stands in for marks react-icons v5 no longer ships.
const Monogram = (label, color) => (props) =>
  (
    <span
      {...props}
      className={`grid place-items-center rounded-lg text-[0.7rem] font-extrabold ${props.className || ''}`}
      style={{ color }}
    >
      {label}
    </span>
  )

const TECHS = [
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Laravel', Icon: SiLaravel, color: '#FF2D20' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'Flutter', Icon: SiFlutter, color: '#02569B' },
  { name: 'React Native', Icon: SiReact, color: '#087EA4' },
  { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
  { name: 'AWS', Icon: Monogram('AWS', '#FF9900'), color: '#FF9900' },
  { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'OpenAI', Icon: Monogram('AI', '#0f172a'), color: '#0F172A' },
  { name: 'GSAP', Icon: SiGreensock, color: '#0AE448' },
  { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
]

// Duplicate the list so the marquee can loop seamlessly.
const MARQUEE = [...TECHS, ...TECHS]

export default function Technologies() {
  return (
    <section id="technologies" className="relative py-14 lg:py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="Technologies"
          title="Built on a modern,"
          highlight="battle-tested stack"
          subtitle="We choose proven, future-proof tools so your product stays fast, secure and easy to evolve for years to come."
        />

        {/* Interactive grid */}
        <motion.div
          variants={stagger(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {TECHS.map(({ name, Icon, color }) => (
            <motion.div
              key={name}
              variants={{
                hidden: { opacity: 0, y: 18, scale: 0.95 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE } },
              }}
              className="group hover-lift flex flex-col items-center gap-3 rounded-2xl border border-line bg-white p-6 shadow-soft"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-surface">
                <Icon className="size-7" style={{ color }} />
              </span>
              <span className="text-xs font-semibold text-ink-soft">{name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Continuous marquee for a premium, alive feel */}
        <div className="mask-fade-edges relative mt-7 overflow-hidden">
          <div className="flex w-max animate-marquee gap-4 py-2">
            {MARQUEE.map(({ name, Icon, color }, i) => (
              <div
                key={`${name}-${i}`}
                className="flex shrink-0 items-center gap-2.5 rounded-full border border-line bg-white/70 px-5 py-2.5 shadow-soft backdrop-blur"
              >
                <Icon className="size-5" style={{ color }} />
                <span className="text-sm font-semibold text-ink-soft">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
