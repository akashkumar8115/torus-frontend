import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import authService from '../../services/authService'


const Home = () => {
    function tasknew() {
        // if (authService.isAuthenticated()) {
        //     window.location.href = '/task/new'
        // } else {
        //     window.location.href = '/login'
        // }


    }
    return (
        <div className={styles.home}>
            <section className={styles.hero}>
                <h1>Welcome to Task Manager</h1>
                <p>Organize your tasks efficiently and boost your productivity</p>
                <Link className={styles.ctaButton} onClick={tasknew}>Get Started</Link>
            </section>
            <section className={styles.features}>
                <h2>Key Features</h2>
                <div className={styles.featureGrid}>
                    <div className={styles.featureCard}>
                        <h3>Create Tasks</h3>
                        <p>Easily add new tasks with details</p>
                    </div>
                    <div className={styles.featureCard}>
                        <h3>Track Progress</h3>
                        <p>Monitor your task completion status</p>
                    </div>
                    <div className={styles.featureCard}>
                        <h3>Prioritize</h3>
                        <p>Set task priorities to focus on what matters</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
