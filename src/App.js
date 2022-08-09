import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from './components/GlobalStyle'
import Pages from './pages'

const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Pages/>
    </div>
  )
}

const app = document.getElementById('app')
ReactDOM.render(<App/>, app)