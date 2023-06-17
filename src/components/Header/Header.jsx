import React from 'react'
import '../Header/Header.css'
import image from '../../assets/logo_funko2.png'
import { Link } from "react-router-dom"

const Header = () => {
  return (
   <div className='header'>
        <Link to="/">
            <img src={image} alt="Logo Funko" />
        </Link>
   </div>
  )
}

export default Header