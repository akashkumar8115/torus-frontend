import api from './api'

const authService = {
  async register(name, email, password) {
    const response = await api.post('/auth/register', { name, email, password })
    if (response.data.token) {
      localStorage.setItem('token', response.data.token)
    }
    return response.data
  },

  async login(email, password) {
    const response = await api.post('/auth/login', { email, password })
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
      const response = await api.get('/auth/me')
      return response.data
    }
    return null
  },
}

export default authService