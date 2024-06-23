import React from "react";
import ReactDOM from "react-dom/client";

//logo's..............
import logo from "./icons/logo-design.png";
import profileLogo from "./icons/profile.png";
import searchIcon from "./icons/search.png";

// Nested header Element using React.createElement
const div = React.createElement(
  "div",
  {
    className: "title",
  },
  [
    React.createElement(
      "h1",
      {
        id: "title",
      },
      "Heading1!"
    ),
    React.createElement("ul", {}, [
      React.createElement(
        "li",
        {
          id: "item1",
        },
        "item1!"
      ),
      React.createElement(
        "li",
        {
          id: "item2",
        },
        "item2!"
      ),
      React.createElement(
        "li",
        {
          id: "item3",
        },
        "item3!"
      ),
    ]),
  ]
);

// Using JSX
const section = (
  <div>
    <h1 key="heading1">H1 element</h1>
    <h2 key="heading2">H2 element</h2>
    <h3 key="heading3">H3 element</h3>
  </div>
);

// Functional component
const Title = () => {
  return <h1>Welcome to my application</h1>;
};

// Composition of Component
const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav">
        <div className="header-section logo-section">
          <img src={logo} alt="Logo" className="logo" />
          <span className="company-name">Science Group Private Limited</span>
        </div>
        <div className="header-section search-section">
          <input type="text" placeholder="Search..." className="search-input" />
          <img src={searchIcon} alt="Search" className="search-icon" />
        </div>
        <div className="header-section profile-section">
          <img src={profileLogo} alt="Profile" className="profile-logo" />
          <span className="contact-text">Contact</span>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
