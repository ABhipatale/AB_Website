import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'
import './index.css'

// vite-react-ssg drives rendering: it hydrates on the client and pre-renders
// each route to static HTML at build time. `createRoot` must be exported.
export const createRoot = ViteReactSSG({ routes })
