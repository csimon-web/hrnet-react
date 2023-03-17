import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo192.png'
import styles from './styles.module.css'

function NavBar() {
  const location = useLocation()

  return (
    <header className={styles.header}>
      <div className={styles.left_menu}>
        <img src={logo} alt="logo HRnet" className={styles.logo_img} />
        <div className={styles.logo_name}>HRNet</div>
      </div>
      <nav className={styles.right_menu}>
        {location.pathname === '/' ? (
          <div
            className={`${styles.nav_item} ${styles.item_1} ${styles.active}`}
          >
            Home
          </div>
        ) : (
          <div className={`${styles.nav_item} ${styles.item_1}`}>
            <Link to="/">Home</Link>
          </div>
        )}
        {location.pathname === '/employees-list' ? (
          <div
            className={`${styles.nav_item} ${styles.item_2} ${styles.active}`}
          >
            View Current Employees
          </div>
        ) : (
          <div className={`${styles.nav_item} ${styles.item_2}`}>
            <Link to="/employees-list">View Current Employees</Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default NavBar
