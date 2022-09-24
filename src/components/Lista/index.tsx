import React from "react";
import Tarefa from "../../models/Tarefa";
import Item from "./Item/Item";
import './style.scss';

function Lista(props:Props){
    const {tarefas,isSelecionado} = props
    return(
            <div className="card-content">
                <label className="label" style={{textAlign:'center'}} htmlFor="">Estudos do dia</label>
                <div className="content">
                    <ul>

                        {tarefas.map((item,index)=>{
                        return ( 
                            <Item {...{item,isSelecionado}} /> 
                        )             
                        })}
                    </ul>
                </div>
            </div>
    )
}

type Props ={
    tarefas:Tarefa[]
    isSelecionado : (a:Tarefa) => void;
}
export default Lista;