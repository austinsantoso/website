import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import template from "./component/template";

function App() {
  if (true) {
    console.log("if block");
    return <template />;
  } else {
    console.log("else block");
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
