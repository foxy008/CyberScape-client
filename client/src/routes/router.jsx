
import { createBrowserRouter, redirect } from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../components/Layout'
import Profile from '../pages/Profile'
import AboutUs from '../pages/AboutUs'
import Gallery from '../pages/Gallery'
import TopGallery from '../pages/TopGallery'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/gallery',
        element: <Gallery />
      },
      {
        path: '/profile',
        loader: () => {
          const accessToken = localStorage.getItem('access_token')

          if (!accessToken) {
              return redirect('/')
          }

          return null;
        },
        element: <Profile />
      },
      {
        path: '/about',
        element: <AboutUs />
      },

    ]
  },
  {
    path: '/top',
    loader: () => {
      const accessToken = localStorage.getItem('access_token')

      if (!accessToken) {
          return redirect('/')
      }

      return null;
    },
    element: <TopGallery />
  }
])

export default router
