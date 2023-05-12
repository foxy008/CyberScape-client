
import { createBrowserRouter, redirect } from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../components/Layout'
import Profile from '../pages/Profile'
import AboutUs from '../pages/AboutUs'
import Gallery from '../pages/Gallery'
import TopGallery from '../pages/TopGallery'
import News from '../pages/News'
import { fetchProfile } from '../helpers/userMethods'
import Swal from 'sweetalert2';

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
            Swal.fire({
              title: 'You need to login first to access your profile.',
              icon: 'error',
              background: '#191c29',
              color: '#ef9afa',
              confirmButtonColor: 'rgb(239 68 68)'
            })
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
            Swal.fire({
              title: 'You need to login first to access our top gallery.',
              icon: 'error',
              background: '#191c29',
              color: '#ef9afa',
              confirmButtonColor: 'rgb(239 68 68)'
            })
            return redirect('/')
          }

          return fetchProfile()
          .then(response => {
            const { isVerified, quota } = response;
            // console.log({ isVerified, quota });

            if (quota < 1) {
              Swal.fire({
                title: 'You need at least 1 credit to access our top gallery.',
                icon: 'error',
                background: '#191c29',
                color: '#ef9afa',
                confirmButtonColor: 'rgb(239 68 68)'
              })
              return redirect('/')
            }

            if (!isVerified) {
              Swal.fire({
                title: 'You need at verify your account first to access our top gallery',
                icon: 'error',
                background: '#191c29',
                color: '#ef9afa',
                confirmButtonColor: 'rgb(239 68 68)'
              })
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
