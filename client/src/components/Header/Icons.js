import React from 'react';
import UserIcon from './icons/UserIcon.jsx';
import CartIcon from './icons/CartIcon.jsx';
import { Link } from 'react-router-dom';

class Icons extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userHovered: false,
      cartHovered: false
    }

    this.userHandleHover = this.userHandleHover.bind(this)
    this.cartHandleHover = this.cartHandleHover.bind(this)
  }


  userHandleHover () {
    this.setState(
      { userHovered: !this.state.userHovered }
    )
  }

  cartHandleHover () {
    this.setState(
      { cartHovered: !this.state.cartHovered }
    )
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <Link to="/user" aria-label="user icon">
          <UserIcon hover={this.userHandleHover} fill={this.state.userHovered ? '#F3D880' : '#000'}/>
        </Link>
        <Link to="/cart" aria-label="cart icon">
          <CartIcon hover={this.cartHandleHover} stroke={this.state.cartHovered ? '#F3D880' : '#000'}/>
        </Link>
      </div>
    )
  }
}

export default Icons;
