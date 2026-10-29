// Google Analytics 4, loaded only when VITE_GA_ID is set at build time
// (see .env.example). Without it every call here is a silent no-op.
const GA_ID = import.meta.env.VITE_GA_ID

export function initAnalytics() {
  if (!GA_ID || window.gtag) return
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID)
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(s)
}

export function track(event, params = {}) {
  window.gtag?.('event', event, params)
}

// One listener covers every WhatsApp, call and email link on the site.
export function trackContactClicks() {
  const onClick = (e) => {
    const a = e.target.closest?.('a[href]')
    if (!a) return
    const href = a.getAttribute('href')
    const where = { page_path: location.pathname, link_text: a.textContent.trim().slice(0, 60) }
    if (href.includes('wa.me/')) track('whatsapp_click', where)
    else if (href.startsWith('tel:')) track('phone_click', where)
    else if (href.startsWith('mailto:')) track('email_click', where)
  }
  document.addEventListener('click', onClick)
  return () => document.removeEventListener('click', onClick)
}
