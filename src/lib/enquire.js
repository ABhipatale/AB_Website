// Lets any CTA pre-fill the contact form. Links keep href="#contact", so
// the page still scrolls there; this only adds the project details.
export const ENQUIRE_EVENT = 'abx:enquire'

export const enquire = (detail) => () => window.dispatchEvent(new CustomEvent(ENQUIRE_EVENT, { detail }))
