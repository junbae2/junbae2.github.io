import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <link to="/about">About</link>
        </li>
      </ul>
    </div>
  )
}

export default Navigation