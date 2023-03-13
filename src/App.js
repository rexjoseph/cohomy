import React from 'react'
import Home from './pages/Home'
import { Routes, Route, Navigate } from 'react-router-dom'
import Register from './pages/Register'
import { useSelector } from 'react-redux'
import Login from './pages/Login'
import Profile from './pages/Auth/Profile'
import NotFound from './pages/NotFound'
import Terms from './pages/Terms'
import About from './pages/About'
import Product from './pages/Product'
import Experiences from './pages/Experiences'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import SDP from './pages/SDP'
import Students from './pages/Students'
import SupportResources from './pages/SupportResources'

const App = () => {
  const user = useSelector(state => state.user.currentUser);
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/sign-up" element={ user ? <Navigate to="/profile" /> : <Register />} />
      <Route path="/sign-in" element={ user ? <Navigate to="/profile" /> : <Login />} />
      <Route path="/profile" element= { user ? <Profile /> : <Navigate to="/login" /> } />
      <Route path="product" element={<Product />} />
      <Route path="experiences" element={<Experiences />} />
      {/* <Route path="/for-sdp" element={<SDP />} />
      <Route path="/for-students" element={<Students />} /> */}
      <Route path="/about-us" element={<About />} />
      <Route path="/terms" element={<Terms />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/support-resources" element={<SupportResources />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App