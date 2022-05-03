import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './home'
import About from './about'

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact={true} path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Pages