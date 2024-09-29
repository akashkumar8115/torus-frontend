import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import styles from './TaskSummary.module.css'

const TaskSummary = () => {
  const [summary, setSummary] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await api.get('/tasks/summary')
        setSummary(response.data)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch task summary')
        setLoading(false)
      }
    }
    fetchSummary()
  }, [])

  if (loading) return <div className={styles.loading}>Loading...</div>
  if (error) return <div className={styles.error}>{error}</div>

  return (
    <div className={styles.summaryContainer}>
      <h2>Task Summary</h2>
      <ul className={styles.summaryList}>
        {summary.map((item) => (
          <li key={item._id} className={styles.summaryItem}>
            <span className={styles.status}>{item._id}:</span> {item.count}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskSummary