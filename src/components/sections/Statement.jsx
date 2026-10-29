import SectionLabel from '../ui/SectionLabel'
import { HIGHLIGHTS } from '../../lib/data'

/** Editorial brand statement — doubles as the "About" anchor. */
export default function Statement() {
  return (
    <section id="about" className="bg-night-2 py-20 text-fg sm:py-28">
      <div className="wrap">
        <SectionLabel n="01">
          About ABnexa
        </SectionLabel>

        <h2 className="reveal mt-8 max-w-5xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
          Not just another website.{' '}
          <span className="block text-muted">
            A better way to do <span className="text-gloss">business.</span>
          </span>
        </h2>

        <div className="mt-14 grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:ml-auto lg:max-w-3xl">
          <p className="reveal text-lg leading-relaxed text-fg/75">
            ABnexa is a software studio based in Karad, working with businesses across Maharashtra — Pune, Mumbai, Kolhapur, Satara and Sangli. We build websites, apps and custom software around how
            your business actually works — not around a template.
          </p>
          <p className="reveal text-lg leading-relaxed text-fg/75" style={{ '--d': '100ms' }}>
            Every project starts with a simple question: <em className="not-italic text-fg">what should this
            change for your business?</em> Then we design and build exactly that.
          </p>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-[1.5rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h, i) => (
            <li key={h.title} className="gloss reveal bg-night-2 p-6 sm:p-7" style={{ '--d': `${i * 70}ms` }}>
              <span className="tag text-orange">0{i + 1}</span>
              <h3 className="mt-4 font-display text-xl font-semibold">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{h.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
