// Regenerates public/sitemap.xml from the page lists before every build, so a
// new city, service or product page is never missing from the sitemap.
import { writeFileSync } from 'node:fs'
import { CITIES } from '../src/lib/cities.js'
import { SERVICE_PAGES, PRODUCT_PAGES } from '../src/lib/pages.js'

const SITE = 'https://abnexa.in'
const today = new Date().toISOString().slice(0, 10)

const urls = [
  { loc: `${SITE}/`, changefreq: 'weekly', priority: '1.0' },
  ...SERVICE_PAGES.map((p) => ({ loc: `${SITE}/${p.path}`, changefreq: 'monthly', priority: '0.9' })),
  ...PRODUCT_PAGES.map((p) => ({ loc: `${SITE}/${p.path}`, changefreq: 'monthly', priority: '0.8' })),
  ...CITIES.map((c) => ({ loc: `${SITE}/${c.path}`, changefreq: 'monthly', priority: '0.8' })),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml)
console.log(`sitemap.xml: ${urls.length} URLs`)
