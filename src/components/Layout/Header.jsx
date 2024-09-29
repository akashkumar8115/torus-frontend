import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import authService from '../../services/authService'
import styles from './Header.module.css'
const Header = () => {
  const { user, setUser } = useContext(AuthContext)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogout = () => {
    authService.logout()
    setUser(null)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.logo}>Task Manager</h1>
          <button className={styles.menuToggle} onClick={toggleMenu}>
            ☰
          </button>
          <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
            <ul className={styles.navList}>
              <li><Link to="/home" onClick={toggleMenu}>Home</Link></li>
              {user ? (
                <>
                  <li><Link to="/task/new" onClick={toggleMenu}>New Task</Link></li>
                  <li><Link to="/summary" onClick={toggleMenu}>Summary</Link></li>
                  <li><button onClick={() => { handleLogout(); toggleMenu(); }} className={styles.logoutButton}>Logout</button></li>
                </>
              ) : (
                <>
                  <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
                  <li><Link to="/register" onClick={toggleMenu}>Register</Link></li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
      {/* <Home /> */}
    </div>
  )
}

export default Header