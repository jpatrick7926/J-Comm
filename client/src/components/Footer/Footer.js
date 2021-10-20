import React from 'react'
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  return(
    <footer>
      <div className="logo">
        <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
          <span className="logo-text">J-COMM</span>
        </Link>
      </div>
      <div className="footer-links">
        <Link to="/"><p>Home</p></Link>
        <Link to="/"><p>Shop</p></Link>
        <Link to="/"><p>Reviews</p></Link>
        <Link to="/"><p>About</p></Link>
        <Link to="/"><p>Your Cart</p></Link>
      </div>
      <p>©J-COMM. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer;
