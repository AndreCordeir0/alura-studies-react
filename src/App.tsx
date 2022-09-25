import React, { useState } from 'react';
import Cronometro from './components/Cronometro';
import Formulario from './components/Formulario';
import Lista from './components/Lista';
import Tarefa from './models/Tarefa';
import './style.css'

function App() {
  const [tarefas,setTarefas] = useState<Tarefa[]>([])
  const [selecionado,setSelecionado] = useState<Tarefa >();
  let props = {tarefas,isSelecionado};
  

  function isSelecionado(objetoSelecionado:Tarefa){    
    setSelecionado(objetoSelecionado);

    setTarefas((tarefaAntiga)=> tarefaAntiga.map(v=>({
      ...v,
      selecionado : v.id === objetoSelecionado.id ? true : false
    })))    
  }

  
  return (
    
    <div className="App style">
      <h1 className="title">Lista de Estudos</h1>
      <div className="container">
      <Formulario setTarefas = {setTarefas} />
      <Lista {...props} />
      </div>
      <Cronometro selecionado={selecionado} />
    </div>

  );
}

export default App;
