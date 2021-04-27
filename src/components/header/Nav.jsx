import React from 'react'
import './header-styles/nav-style.scss'
import '../.././fonts.scss'

const Nav = (props) => {
  return (
    <ul>
      {/* Switches Main content to the shop page */}
      <li onClick={props.switchToShop}>
        Shop
      </li>
      <li>
        Reviews
      </li>
      <li>
        About
      </li>
    </ul>
  )
}

export default Nav
