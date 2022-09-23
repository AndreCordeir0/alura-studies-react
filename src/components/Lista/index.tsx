import React from "react";
import Item from "./Item/Item";
import './style.scss';

function Lista(){
    const tarefas: Array<Tarefa>  = [{
        tarefa:'React',
        tempo:'02:00',
        id:1
    },
    {
        tarefa:'Java',
        tempo:'03:00',
        id:2
    },
    {
        tarefa:'JavaScript',
        tempo:'03:00',
        id:3
    }]    
    return(
            <div className="card-content">
                <label className="label" style={{textAlign:'center'}} htmlFor="">Estudos do dia</label>
                <div className="content">
                    <ul>
                        {tarefas.map((tarefa,index)=>{
                        return ( 
                            <Item key={tarefa.id} {...tarefa}  />
                        )             
                        })}
                    </ul>
                </div>
            </div>
    )
}

type Tarefa = {
    tarefa:string,
    tempo:string,
    id:number
}
export default Lista;