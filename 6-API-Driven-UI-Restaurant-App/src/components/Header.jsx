import logo from "/src/myAssets/Designer.png"

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
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header