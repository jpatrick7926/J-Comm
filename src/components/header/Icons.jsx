import React from 'react';
import UserLogo from './logos/UserLogo.jsx'
import CartIcon from './logos/CartIcon.jsx'

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
        <UserLogo hover={this.userHandleHover} fill={this.state.userHovered ? '#F3D880' : '#000'}/>
        <CartIcon hover={this.cartHandleHover} stroke={this.state.cartHovered ? '#F3D880' : '#000'}/>
      </div>
    )
  }
}

export default Icons;
