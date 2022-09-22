import React from 'react';
import Formulario from './components/Formulario';
import Lista from './components/Lista';
import './style.css'

function App() {
  
  return (
    
    <div className="App style">
      <h1 className="title">Lista de Estudos</h1>
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
