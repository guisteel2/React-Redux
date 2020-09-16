import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Intervalo from './components/Intervalo'
import Media from './components/Media'
import Soma from './components/Soma'
import Sorteio from './components/Sorteio'

function App() {
  return (
    <div className="App">
      <h1>Funcoes Simples</h1>

      <div className="linha">
        <Intervalo  red></Intervalo>
      </div>

      
      <div className="linha">
        <Media></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>
      </div>
      
    </div>
  );
}

export default App;
