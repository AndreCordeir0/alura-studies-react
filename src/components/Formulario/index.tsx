import React from "react";
import './style.scss'
class Formulario extends React.Component{
    render(){
        return(
            <form action="" className="grid">
                <div className="field">
                    <label className="label" htmlFor="tarefa">Tarefa</label>
                    <div className="control">
                    <input style={{width: "210px"}} onChange={(e) => console.log(e.target.value)} className="input" type="text" name="tarefa" id="tarefa" placeholder="Adicione uma nova tarefa" required/>
                    </div>
                </div>
                <div className="field">
                    <label className="label" htmlFor="tempo">Tempo</label>
                    <input className="time-label"  max="01:45:00" style={{width: "210px"}}  onChange={(e) => console.log(e.target.value)} type="time" name="tempo" id="tempo"  required/>

                </div>
                <button className="button is-success">Salvar</button>

            </form>
        )
    }
}
export default Formulario;