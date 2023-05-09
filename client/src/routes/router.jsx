
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
import News from '../pages/News'


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
        path: '/news',
        element: <News />
      },
      {
        path: '/gallery',
        element: <Gallery />
      },
      {
        path: '/profile',
        loader: () => localStorage.access_Token ? null : redirect('/login'),
        element: <Profile />
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path: '/top',
        loader: () => {
          // dispatch(fetchUser())
          // .then(() => profile.quota > 0 ? null: redirect('/'))
          // .catch(error => console.log(error))
        },
        element: <TopGallery />
      }
    ]
  },{
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
])

export default router
