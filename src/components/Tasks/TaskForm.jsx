import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../services/api'
import styles from './TaskForm.module.css'

const TaskForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [status, setStatus] = useState('To Do')
  const [priority, setPriority] = useState('Medium')
  const [error, setError] = useState('')

  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      const fetchTask = async () => {
        try {
          const response = await axios.get(`https://torus-backend-s3ws.onrender.com/api/tasks/${id}`)
          const task = response.data
          setTitle(task.title)
          setDescription(task.description)
          setDueDate(task.dueDate.split('T')[0])
          setStatus(task.status)
          setPriority(task.priority)
        } catch (err) {
          setError('Failed to fetch task')
        }
      }
      fetchTask()
    }
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (id) {
        await axios.put(`https://torus-backend-s3ws.onrender.com/api/tasks/${id}`, { title, description, dueDate, status, priority })
      } else {
        await axios.post('https://torus-backend-s3ws.onrender.com/api/tasks', { title, description, dueDate, status, priority })
      }
      navigate('/')
    } catch (err) {
      setError('Failed to save task')
    }
  }

  return (
    <div className={styles.taskFormContainer}>
      <h2>{id ? 'Edit Task' : 'Create New Task'}</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className={styles.taskForm}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div>
          <label htmlFor="priority">Priority:</label>
          <select id="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <button type="submit">Save Task</button>
      </form>
    </div>
  )
}

export default TaskForm