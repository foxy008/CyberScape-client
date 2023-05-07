
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Gallery from '../pages/Gallery'
import AllCollections from '../pages/AllCollections'
import News from '../pages/News'
import Layout from '../components/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/gallery',
    element: <Gallery />
  },
  {
    path: '/all-collections',
    element: <AllCollections />
  },
  {
    path: '/news',
    element: <News />
  },
])

export default router