import React from 'react'
import CartWidget from '../CardWidget/CartWidget'
import './NavBar.css'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>Inicio</li>
            <li>About</li>
            <li>Contact</li>
            <li>
                <CartWidget />
            </li>
        </ul>
    </nav>
  )
}

export default Navbar