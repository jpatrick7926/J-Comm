import React from 'react'
import Spacer from '../tools/spacer.jsx'
import './footer-style.scss'

const Footer = () => {
  return(
    <footer>
      <div className="footer-links">
        <div className="footer-section">
          <h4>Social</h4>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
        </div>
        <div className="footer-section">
          <h4>Site Links</h4>
          <ul className="footer-ul">
            <li className="footer-li">Home</li>
            <li className="footer-li">Login</li>
            <li className="footer-li">Create Account</li>
            <li className="footer-li">Shop</li>
            <li className="footer-li">Your Cart</li>
          </ul>
        </div>
      </div>
      <Spacer height="50px" />
      <p>Copyright © 2021, J-comm.</p>
    </footer>
  )
}

export default Footer;
