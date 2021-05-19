import React from 'react'
import {
  Link
} from "react-router-dom"
import './header-styles/nav-style.scss'
import '../.././fonts.scss'

const Nav = (props) => {
  return (
    <ul>
      {/* Switches Main content to the shop page */}
      <li>
        <Link to="/shop">Shop</Link>
      </li>
      <li>
        <Link to="/reviews">
          Reviews
        </Link>
      </li>
      <li>
        <Link to="/about">
          About
        </Link>
      </li>
    </ul>
  )
}

export default Nav
