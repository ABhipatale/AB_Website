import Layout from './Layout'
import Home from './pages/Home'
import CityPage from './pages/CityPage'
import { CITIES } from './lib/cities'

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
    ],
  },
]
