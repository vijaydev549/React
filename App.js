const heading = React.createElement(
  "div",
  { id: "parent" },[
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hello H1 React Tag")
  ),
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hello H1 React Tag")
  )
]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
