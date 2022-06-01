import React from 'react'
import Navigation from './Navigation'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header/>
      <div>
        <Navigation/>
        <main>{children}</main>
      </div>
    </React.Fragment>
  )
}

export default Layout