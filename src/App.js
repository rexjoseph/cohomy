import React from 'react'
import Home from './pages/Home'
import { Routes, Route, Navigate } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  )
}

export default App