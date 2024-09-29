import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
    <div className={styles.container}>
      <p>&copy; 2023 Task Management App. All rights reserved.</p>
      <nav className={styles.footerNav}>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/privacy">Privacy Policy</a>
      </nav>
    </div>
  </footer>
  )
}

export default Footer