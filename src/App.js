import React, { Component } from "react";
import logo from "./logo-pokeball.png";
import "./App.css";

import Pokemon from "./Pokemon";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return <div className="App">
        <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Pokemon Genereation 1</p>
          <a className="App-link" href="https://pokemondb.net/pokedex/national" target="_blank" rel="noopener noreferrer">
            Pokedex
          </a>
        </header>
        <Pokemon />
      </div>;
  }
}

export default App;
