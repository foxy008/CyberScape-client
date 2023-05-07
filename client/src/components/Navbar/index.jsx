import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.navbarLeft}>
            <div className={styles.icon}>Test</div>
          </div>
          <div className={styles.navbarRight}>
            <div>Home</div>
            <div>About Us</div>
            <div>Profile</div>
            <div>
                <button>
                    Log Out
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

