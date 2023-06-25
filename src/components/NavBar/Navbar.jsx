import React from 'react'
import CartWidget from '../CardWidget/CartWidget'
import './NavBar.css'


import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav>
        <ul>
          <Link className="li" to="/">
            Home
          </Link>
          <Link className="li" to="/category/STAR WARS">
            Star Wars
          </Link>
          <Link className="li" to="/category/PIXAR">
            Pixar
          </Link>
          <Link className="li" to="/category/HarryPotter">
            Harry Potter
          </Link>
            <li>
                <CartWidget />
            </li>
        </ul>
    </nav>
  )
}

export default Navbar