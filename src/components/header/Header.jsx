import React from 'react';
import './header-styles/header-style.scss'
import Nav from './Nav.jsx'
import '../.././fonts.scss'
import Icons from './Icons.jsx'


class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <header>
        <div className="nav-container">
          <div className="logo">
            <span className="logo-text">J-COMM</span>
          </div>
          <div className="nav">
            <Nav />
          </div>
          <div className="icons">
             <Icons />
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
