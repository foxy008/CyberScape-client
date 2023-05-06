
import { createBrowserRouter } from 'react-router-dom'
import Homepage from '../pages/Home'

import Layout from '../components/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  }
])

export default router