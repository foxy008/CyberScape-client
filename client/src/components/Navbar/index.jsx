import { useDispatch, useSelector } from 'react-redux';
import styles from './navbar.module.css'
import { useEffect } from 'react';
import { Link, redirect, useNavigate } from "react-router-dom";
import Login from '../../pages/Login';
import axios from 'axios'
import { fetchUser } from '../../actions/usersCreators';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

export default function Navbar() {
  const profile = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    localStorage.access_token ? dispatch(fetchUser()) : null
  }, []);

  function handleLogout() {
    localStorage.removeItem('access_token');

    dispatch({
      type: 'user/fetch',
      payload: {}
    })

    navigate('/');
  }

  async function handlePayment() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/users/payment`, {
        headers: {
          access_token: localStorage.access_token
        }
      });

      console.log(response);
      await snap.pay(response.data.token);
    } catch (error) {
      console.log(error);
      MySwal.fire({
        text: error.response.data.message,
        icon: 'error',
        background: '#191c29',
        color: '#ef9afa'
      })
    }
  }

  return (
    <>
      {
            !profile ? null: console.log(profile, '<-- profile')
            // Buat cek apakah profile dapet di fetch, uncomment kalo ngak mau keliatan di console
      }
      <div className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.navbarLeft}>
            <div className={styles.logo}>
              <img src='/assets/cyberscape-logo-nav.png'/>
            </div>
          </div>
          <div className={styles.navbarRight}>
            <Link to='/'>
              <button className="btn">
                Home
              </button>
            </Link>

            <Link to='/about'>
              <button className="btn">
                About
              </button>
            </Link>
            {
              !profile.firstName ?
              // <Link to='/login'>
              //   <button className="btn">
              //     Log In
              //   </button>
              // </Link>
              <label htmlFor="login-modal" className="btn">Log In</label>
              : <div className="dropdown dropdown-end  text-neutral-content w-50">
              <label tabIndex={0} className="btn m-1">{ profile.firstName } {profile.lastName} </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-neutral rounded-box">
                  <li className='text-lime-500'><p>Credit: { profile.quota }</p></li>
                  <li><a onClick={handlePayment} className='hover:bg-neutral-focus'>Top Up</a></li>
                  <li className='hover:bg-neutral-focus'>
                    <Link to='/profile'>
                        Profile
                    </Link>
                  </li>
                  <li className='hover:bg-neutral-focus'>
                    <a onClick={handleLogout}>Sign Out</a>
                  </li>
                </ul>
              </div>
            }
            {/* {
              !profile ?
              <div>
                <button className={styles.btn}>
                    Log In
                </button>
              </div> :
              <div>
                <button className={styles.btn}>
                    Log Out
                </button>
              </div>
            } */}

          </div>
        </div>
      </div>
      <Login />
    </>
  );
}
