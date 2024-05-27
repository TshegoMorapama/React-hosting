import React from "react";
import ReactDom from "react-dom";
import Search from "./Search";


import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <h1> Weather Search Engine </h1>
        <Search />
      </div>
      <div>
        <handleSubmit />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
