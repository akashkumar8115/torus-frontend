import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import TaskItem from './TaskItem'
import styles from './TaskList.module.css'
import axios from 'axios'

const TaskList = () => {
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('https://torus-backend-s3ws.onrender.com/api/tasks')
                setTasks(response.data.tasks)
                setLoading(false)
            } catch (err) {
                setError('Failed to fetch tasks')
                setLoading(false)
            }
        }
        fetchTasks()
    }, [])

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>

    return (
        <div className={styles.taskListContainer}>
            <h2>Tasks</h2>
            <Link to="/task/new" className={styles.newTaskButton}>Create New Task</Link>
            {tasks.map((task) => (
                <TaskItem key={task._id} task={task} />
            ))}
        </div>
    )
}

export default TaskList
