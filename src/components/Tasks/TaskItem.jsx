import React from 'react'
import { Link } from 'react-router-dom'
import styles from './TaskItem.module.css'

const TaskItem = ({ task }) => {
    return (
        <div className={styles.taskItem}>
            <h3>{task.title}</h3>
            <p>Status: <span className={styles[task.status.toLowerCase().replace(' ', '')]}>{task.status}</span></p>
            <p>Priority: <span className={styles[task.priority.toLowerCase()]}>{task.priority}</span></p>
            <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
            <Link to={`/task/edit/${task._id}`} className={styles.editButton}>Edit</Link>
        </div>
    )
}

export default TaskItem