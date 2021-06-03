import { Link } from "react-router-dom";
import './header-styles/header.css';
import Nav from './Nav.js';
import Icons from './Icons.js';

const Header = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
          <span className="logo-text">J-COMM</span>
        </Link>
      </div>
      <div className="nav">
        <Nav />
      </div>
      <div className="icons">
        <Icons />
      </div>
    </div>
  );
}

export default Header;
