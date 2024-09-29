import axios from 'axios'
import api from './api'

const authService = {
  async register(name, email, password) {
    const response = await axios.post('https://torus-backend-s3ws.onrender.com/api/auth/register', { name, email, password })
    if (response.data.token) {
      localStorage.setItem('token', response.data.token)
    }
    return response.data
  },

  async login(email, password) {
    const response = await axios.post('https://torus-backend-s3ws.onrender.com/api/auth/login', { email, password })
    if (response.data.token) {
      localStorage.setItem('token', response.data.token)
    }
    return response.data
  },

  logout() {
    localStorage.removeItem('token')
  },

  async getCurrentUser() {
    const token = localStorage.getItem('token')
    if (token) {
      const response = await axios.get('https://torus-backend-s3ws.onrender.com/api/auth/me')
      return response.data
    }
    return null
  },
}

export default authService
