import './App.css';
import React from 'react';
import logoRoot from "../src/resource/unisphere_logo.png";
import chRoot from "../src/resource/character_unisphere.png";

function App() {
  return (
    <div className='App'>
      <div>
        <img id="logo" src={logoRoot} alt="logo"/>
      </div>
      <div>
        <img id="character" src={chRoot} alt="ch"/>
      </div>
    </div>
  );
}

export default App;
