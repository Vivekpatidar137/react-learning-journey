import logo from "/src/myAssets/Designer.png";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <a href="/" className="homeLoad">
      <h1>
        <img src={logo} alt="Logo" className="logo" />
        SpoonSwift
      </h1>
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
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
          <li>
            <Link to="/expressMart">ExpressMart</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
