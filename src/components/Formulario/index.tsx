import React, { useState } from "react";
import Tarefa from "../../models/Tarefa";
import './style.scss';
import { v4 as uuidv4 } from 'uuid';

function Formulario({setTarefas}:{setTarefas :React.Dispatch<React.SetStateAction<Tarefa[]>>}) {
        const [tarefa,setTarefa] = useState('');
        const [tempo,setTempo] = useState('');
    


    function adicionarTarefa(e:any){
        e.preventDefault();
        let obj:Tarefa = {
            tarefa,
            tempo,
            completado:false,
            selecionado:false,
            id:uuidv4()
        }
        setTarefas((t)=> [...t,obj]);
        resetaForm();
    }        
    function resetaForm(){
        setTarefa('');
        setTempo('');
    }

    return(
        <form action="" onSubmit={(e) => adicionarTarefa(e)} className="grid">
            <div className="field">
                <label className="label" htmlFor="tarefa">Tarefa</label>
                <div className="control">
                <input style={{width: "210px"}} value={tarefa} onChange={(e) => setTarefa(e.target.value)} className="input" type="text" name="tarefa" id="tarefa" placeholder="Adicione uma nova tarefa" required/>
                </div>
            </div>
            <div className="field">
                <label className="label" htmlFor="tempo">Tempo</label>
                <input className="time-label" step='' min="00:00:00"   style={{width: "210px"}} value={tempo} onChange={(e) => setTempo(e.target.value)} type="time" name="tempo" id="tempo"  required/>
            </div>
            <button className="button is-success">Salvar</button>
        </form>
    )
}

export default Formulario;