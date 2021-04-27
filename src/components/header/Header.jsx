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
            <a onClick={this.props.switchToHome} style={{textDecoration: 'none', color: 'black'}}>
              <span className="logo-text">J-COMM</span>
            </a>
          </div>
          <div className="nav">
            {/* Pass the switch to shop handler to the Nav component */}
            <Nav switchToShop={this.props.switchToShop}/>
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
