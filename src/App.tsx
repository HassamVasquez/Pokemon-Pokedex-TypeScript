import React from 'react';
import logo from './logo.svg';
import Pokedex from "./components/Pokedex";
import './App.css';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Pokédex</h1>
      <Pokedex />
    </div>
  );
}

export default App;
