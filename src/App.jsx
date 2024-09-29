import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Login from './components/Auth/Login.jsx'
import Register from './components/Auth/Register'
import TaskList from './components/Tasks/TaskList'
import TaskForm from './components/Tasks/TaskForm.jsx'
import TaskSummary from './components/Tasks/TaskSummary'
import PrivateRoute from './components/PrivateRoute'
import './App.css'
import Home from "./components/Home/Home"
function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<PrivateRoute><TaskList /></PrivateRoute>} />
          <Route path="/task/new" element={<PrivateRoute><TaskForm /></PrivateRoute>} />
          <Route path="/task/edit/:id" element={<PrivateRoute><TaskForm /></PrivateRoute>} />
          <Route path="/summary" element={<PrivateRoute><TaskSummary /></PrivateRoute>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
