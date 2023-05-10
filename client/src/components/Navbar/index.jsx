import { useDispatch, useSelector } from 'react-redux';
import styles from './navbar.module.css'
import { useEffect } from 'react';
import { Link, redirect, useNavigate } from "react-router-dom";
import Login from '../../pages/Login';
import axios from 'axios'
import { fetchUser } from '../../actions/usersCreators';

export default function Navbar() {
  const profile = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => localStorage.access_token ? dispatch(fetchUser()) : null, []);

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
    }
  }

  useEffect(() => {
  }, [profile])

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
              : <div className="dropdown">
              <label tabIndex={0} className="btn m-1">{ profile.firstName } {profile.lastName} </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li className='disabled'><p>Balance: { profile.quota }</p></li>
                  <li><a onClick={handlePayment}>Top Up</a></li>
                  <li>
                    <Link to='/profile'>
                        Profile
                    </Link>
                  </li>
                  <li>
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
