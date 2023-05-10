
import { createBrowserRouter, redirect } from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../components/Layout'
import Profile from '../pages/Profile'
import AboutUs from '../pages/AboutUs'
import Gallery from '../pages/Gallery'
import TopGallery from '../pages/TopGallery'
import News from '../pages/News'
import { fetchProfile } from '../helpers/userMethods'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/news',
        element: <News />
      },
      {
        path: '/gallery',
        element: <Gallery />
      },
      {
        path: '/about',
        element: <AboutUs />
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
        path: '/top',
        loader: () => {
          const accessToken = localStorage.getItem('access_token')

          if (!accessToken) {
            return redirect('/')
          }

          return fetchProfile()
          .then(response => {
            const { isVerified, quota } = response;
            console.log({ isVerified, quota });

            if (quota < 1) {
              return redirect('/')
            }

            if (!isVerified) {
              return redirect('/')
            }

            return null;
          })
        },
        element: <TopGallery />
      }
    ]
  },

])

export default router
