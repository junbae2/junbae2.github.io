import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={Home}/>
        <Route path="/about" element={About}/>
      </Routes>
    </div>
  )
}

export default App