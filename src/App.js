import React, { Component } from "react";
import logo from "./logo-github.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>My github profile</p>
          <a
            className="App-link"
            href="https://github.com/ayogatot"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ayogatot
          </a>
        </header>
      </div>
    );
  }
}

export default App;
