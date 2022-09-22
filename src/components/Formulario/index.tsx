import React from "react";

class Formulario extends React.Component{
    render(){
        return(
            <form action="">
                <div className="field">
                    <label className="label" htmlFor="tarefa">Tarefa</label>
                    <div className="control">
                    <input style={{width: "210px"}} className="input" type="text" name="tarefa" id="tarefa" placeholder="Adicione uma nova tarefa" required/>
                    </div>
                </div>
                <div className="field">
                    <label className="label" htmlFor="tempo">Tempo</label>
                    <input style={{width: "210px"}} type="time" name="tempo" id="tempo" required/>
                </div>
            </form>
        )
    }
}
export default Formulario;