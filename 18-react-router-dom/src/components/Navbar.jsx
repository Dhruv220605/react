import React from 'react'

import { Link } from 'react-router-dom'
import home from '../pages/Home'
import about from '../pages/About'
import contact from '../pages/Contact'

const Navbar = () => {
  return (
    <div className='navbar'>

        <h3>Dhruv</h3>
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
        
    </div>
  )
}

export default Navbar
