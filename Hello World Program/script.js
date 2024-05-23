const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Hello React World!"
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