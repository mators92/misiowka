import React from 'react';
import './App.css';
import TowaryLista from './TowaryLista';
import Koszyk from './Koszyk';
import Menu from './Menu';
import Stopka from './Stopka';

function App() {
  return (
    <div className="App">
        <Menu/>
        <TowaryLista/>
        <Koszyk/>
        <div style={{clear:"both"}}></div>
        <Stopka/>
    </div>
  );
}

export default App;
