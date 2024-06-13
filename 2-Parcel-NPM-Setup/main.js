import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Hello React World From Parcel!"
);

const heading2 = React.createElement("h2", {}, "I am Vivek!");

const section = React.createElement(
  "div",
  {
    id: "section",
  },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(section);
