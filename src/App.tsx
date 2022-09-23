import React from 'react';
import Cronometro from './components/Cronometro';
import Formulario from './components/Formulario';
import Lista from './components/Lista';
import './style.css'

function App() {
  
  return (
    
    <div className="App style">
      <h1 className="title">Lista de Estudos</h1>
      <div className="container">
      <Formulario />
      <Lista />
      </div>
      <Cronometro/>
    </div>
  );
}

export default App;
