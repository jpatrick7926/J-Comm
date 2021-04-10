import React from 'react';
import './header-style.scss'

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
          <div>
            <h1>Hello from Navbar!</h1>
          </div>
          <nav>
            <ul>
              <li>Button</li>
              <li>Button</li>
              <li>Button</li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header;
