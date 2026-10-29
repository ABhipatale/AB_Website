import Layout from './Layout'
import Home from './pages/Home'
import CityPage from './pages/CityPage'
import ServicePage from './pages/ServicePage'
import ProductPage from './pages/ProductPage'
import { CITIES } from './lib/cities'
import { SERVICE_PAGES, PRODUCT_PAGES } from './lib/pages'

// Route table consumed by vite-react-ssg. Each entry with a concrete `path`
// is pre-rendered to its own static HTML file at build time.
export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      ...CITIES.map((city) => ({
        path: city.path,
        element: <CityPage slug={city.slug} />,
      })),
      ...SERVICE_PAGES.map((p) => ({ path: p.path, element: <ServicePage path={p.path} /> })),
      ...PRODUCT_PAGES.map((p) => ({ path: p.path, element: <ProductPage path={p.path} /> })),
    ],
  },
]
