import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import the CSS file

class Header extends React.Component{
  render(){
    return (
      <header>
        <h1>React-Vintage-Mode</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
