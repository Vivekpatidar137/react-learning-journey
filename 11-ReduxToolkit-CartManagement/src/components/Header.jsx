import logo from "/src/myAssets/Designer.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <a href="/" className="flex items-center text-white">
      <img src={logo} alt="Logo" className="w-12 mr-2" />
      <h1 className="text-xl">SpoonSwift</h1>
    </a>
  );
};

const Header = () => {
  const { loggedInUser } = useContext(UserContext);

  const selector = useSelector((store) => store.cart.items);
  console.log(selector);
  return (
    <div className="flex items-center justify-between p-8 bg-gray-800 text-white">
      <Title />
      <div className="nav-items">
        <ul className="flex space-x-4">
          <li className="hover:border-b-2 hover:border-yellow-400">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:border-b-2 hover:border-yellow-400">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:border-b-2 hover:border-yellow-400">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:border-b-2 hover:border-yellow-400">
            <Link to="/expressMart">ExpressMart</Link>
          </li>
          <li className="hover:border-b-2 hover:border-yellow-400 font-bold">
            <Link to="/cart">Cart {selector.length}</Link>
          </li>
          <li className="font-bold text-sm hover:border-b-2 hover:border-green-400">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
