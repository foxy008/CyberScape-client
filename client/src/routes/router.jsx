
import { createBrowserRouter } from 'react-router-dom'
// import Homepage from '../pages/Home'

import Layout from '../components/Layout'
import Gallery from '../pages/Gallery'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Gallery />
  }
])

export default router