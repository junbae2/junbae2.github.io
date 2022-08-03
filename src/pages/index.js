// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
//
// import Home from './home'
// import About from './about'
// import Layout from '../components/Layout'
//
// const Pages = () => {
//   return (
//     <BrowserRouter>
//       <Layout>
//         <Routes>
//           <Route exact={true} path="/" element={<Home/>}/>
//           <Route path="/about" element={<About/>}/>
//         </Routes>
//       </Layout>
//     </BrowserRouter>
//   )
// }
//
// export default Pages

import ReactDOM from 'react-dom'
import { App } from '../App'

const app = document.getElementById('app')
ReactDOM.render(<App/>, app)