import SectionLabel from '../ui/SectionLabel'
import { Mark } from '../ui/Logo'
import { VALUES } from '../../lib/data'

export default function Why() {
  return (
    <section id="why" className="py-20 sm:py-28">
      <div className="wrap grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionLabel n="06">Why ABnexa</SectionLabel>
          <h2 className="reveal mt-6 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            A small team that <span className="text-orange">cares</span> about the details.
          </h2>
          <Mark className="reveal mt-12 hidden size-28 opacity-90 lg:block" />
        </div>

        <ul className="border-t border-line">
          {VALUES.map((v, i) => (
            <li
              key={v.title}
              className="reveal group grid gap-2 border-b border-line py-7 sm:grid-cols-[2.5rem_14rem_1fr] sm:gap-6"
              style={{ '--d': `${i * 50}ms` }}
            >
              <span className="tag pt-1.5 text-gray transition-colors group-hover:text-orange">0{i + 1}</span>
              <h3 className="font-display text-xl font-semibold">{v.title}</h3>
              <p className="leading-relaxed text-gray">{v.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
