import React from "react";
import ReactDOM from "react-dom/client";
// Creating React Element using JSX
const jsxHeading = <h1 id="root">"Namastey React Using Jsx"</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
// Created FunctionalBased Component
const HeadingComponent = () => {
  return <h1>Namastey React Functional Based Compnent</h1>;
};
// Component Composition
const HeadingComponent1 = () => (
  <div id="container">
    <HeadingComponent /> 
<h1>Namastey React using FBC type2</h1>
</div>
);
const legacy =React.createElement("h1",{id:"root"},"Namaskaara legacy way");
const jsxWay =<h1 id="jsxheading">Namastey JSX</h1>;
root.render(legacy);
root.render(jsxWay);

const FinalComponent=()=>(
<div id="finalCall">
 {legacy}
 {HeadingComponent()}
<HeadingComponent1></HeadingComponent1>
<h1 id="finalRes">This is how all components works</h1>
</div>);
root.render(<FinalComponent />);
