import React, { Component } from "react";
import logo from "./logo-pokeball.png";
import "./App.css";

import Pokemon from "./Pokemon";
import Navbar from "./Navbar";
import Pokemon2 from "./Pokemon2";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Pokémon Genereation 1</p>
        </header>
        <div className="container">
          <h2>Pokémon Top Collection</h2>
          <Pokemon />
        </div>
        <div className="container-middle">
          <h2>Pokémon Mega Collection</h2>
          <Pokemon2 />
        </div>
        <footer className="footer-bottom">&copy;PokemonCompany</footer>
      </div>
    );
  }
}

export default App;
