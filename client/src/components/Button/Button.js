import React from 'react';
import './button.css'
import { Link } from 'react-router-dom'


const Button = (props) => {
  return(
    <div className="button-cta" onClick={props.click}>
      <Link to="/cart">
        {props.text}
      </Link>
    </div>
  )
}

export default Button;
