
import { createBrowserRouter, redirect } from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../components/Layout'
import Profile from '../pages/Profile'
import AboutUs from '../pages/AboutUs'
import Gallery from '../pages/Gallery'
import Login from '../pages/Login'
import Register from '../pages/Register'
// import { useDispatch, useSelector } from 'react-redux'
import TopGallery from '../pages/TopGallery'

// const dispatch = useDispatch();
// const profile = useSelector(state => state.user);

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
  },{
    loader: () => {
      const accessToken = localStorage.getItem('access_token')

      if (accessToken) {
          return redirect('/')
      }

      return null;
    },
    path: '/login',
    element: <Login />
  },
  {
    loader: () => {
      const accessToken = localStorage.getItem('access_token')

      if (accessToken) {
          return redirect('/')
      }

      return null;
    },
    path: '/register',
    element: <Register />
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
