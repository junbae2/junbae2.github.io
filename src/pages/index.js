import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './home'
import About from './about'
import Layout from '../components/Layout'

const Pages = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/*<Navigation/>*/}
          <Route exact={true} path="/" element={<Home/>}/>
          {/*<main>*/}
          <Route path="/about" element={<About/>}/>
          {/*</main>*/}
          {/*<Layout>*/}
          {/*  <Route exact={true} path="/" element={<Home/>}/>*/}
          {/*  <Route path="/about" element={<About/>}/>*/}
          {/*</Layout>*/}
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Pages