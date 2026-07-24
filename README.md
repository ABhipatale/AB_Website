# AB Technology Solution — Premium Corporate Website

A world-class, highly-animated marketing site for **AB Technology Solution** —
_Your Digital Growth Partner_. Built with a bright, premium white / royal-blue /
gold palette and luxury-grade motion.

## Tech stack

| Concern        | Choice                                  |
| -------------- | --------------------------------------- |
| Framework      | React 19 + Vite 7                        |
| Styling        | Tailwind CSS v4 (`@tailwindcss/vite`)    |
| Animation      | Framer Motion, CSS keyframes, canvas     |
| Smooth scroll  | Lenis                                    |
| Icons          | lucide-react + react-icons               |

> The spec also listed GSAP and Three.js. Every effect (parallax, particles,
> reveals, magnetic buttons, counters, marquee, blob/float, custom cursor) is
> delivered with Framer Motion + CSS + a lightweight `<canvas>` particle field,
> which is faster and lighter than pulling in those libraries. They can be added
> later if a specific effect needs them.

## Getting started

```bash
npm install
npm run dev        # start dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Project structure

```
src/
├─ App.jsx                 # composition of all sections + global FX
├─ index.css               # design tokens, base, utilities, keyframes
├─ lib/
│  ├─ data.js              # ALL site content (edit copy here)
│  └─ motion.js            # shared Framer Motion variants
├─ hooks/                  # useLenis, useCountUp, useMagnetic, useMouseGlow
└─ components/
   ├─ Navbar.jsx  Footer.jsx
   ├─ ui/                  # Button, Logo, Reveal, SectionHeading, Counter
   ├─ fx/                  # Loader, Cursor, MouseGlow, ScrollProgress,
   │                       #   Particles, FloatingActions
   └─ sections/            # Hero, About, Services, WhyChooseUs, Technologies,
                           #   Portfolio, Process, Testimonials, Pricing,
                           #   FAQ, CTA, Contact
```

## Customising

- **Content / copy** — everything lives in [`src/lib/data.js`](src/lib/data.js):
  services, stats, portfolio, testimonials, pricing, FAQs, contact details.
- **Brand colours** — the palette is defined once as CSS variables under
  `@theme` in [`src/index.css`](src/index.css).
- **Logo** — a temporary placeholder is at
  [`public/assets/Ab.png`](public/assets/Ab.png). Drop in the final
  `Ab.png` at the same path to replace it everywhere (navbar, hero, footer,
  loader, favicon). No code changes required.
- **Contact form** — currently opens WhatsApp with the enquiry pre-filled
  (see `submit` in [`src/components/sections/Contact.jsx`](src/components/sections/Contact.jsx)).
  Wire it to your Laravel/MySQL backend or an email service when ready.

## Notes

- Fully **responsive**, **SEO-optimised** (meta, Open Graph, JSON-LD) and
  **accessible** (focus states, reduced-motion support, semantic markup).
- All decorative motion is disabled automatically when the visitor has
  `prefers-reduced-motion: reduce` set.
- The custom cursor, mouse glow and parallax are disabled on touch devices.
