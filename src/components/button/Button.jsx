import React from 'react';
import './button.scss'
import { Link } from 'react-router-dom'


const Button = (props) => {
  return(
    <div className="button-cta">
      <Link to="/shop">
        {props.text}
      </Link>
    </div>
  )
}

export default Button;
