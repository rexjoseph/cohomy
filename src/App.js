import React from 'react'
import Home from './pages/Home'
import { Routes, Route, Navigate } from 'react-router-dom'
import Register from './pages/Register'
import { useSelector } from 'react-redux'
import Login from './pages/Login'
import Profile from './pages/Auth/Profile'
import NotFound from './pages/NotFound'
import Terms from './pages/Terms'

const App = () => {
  const user = useSelector(state => state.user.currentUser);
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/sign-up" element={ user ? <Navigate to="/profile" /> : <Register />} />
      <Route path="/sign-in" element={ user ? <Navigate to="/profile" /> : <Login />} />
      <Route path="/profile" element= { user ? <Profile /> : <Navigate to="/login" /> } />
      <Route path="/terms" element={<Terms />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App