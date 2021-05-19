import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
            <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
              <span className="logo-text">J-COMM</span>
            </Link>
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
