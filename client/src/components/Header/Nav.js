import React from 'react';
import { Link } from "react-router-dom";
import './header-styles/nav.css';

const Nav = (props) => {
  return (
    <ul className="nav__ul">
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

export default Nav;
