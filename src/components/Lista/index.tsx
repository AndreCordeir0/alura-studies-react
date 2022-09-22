import React from "react";

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
        <div style={{marginTop: "40px",width:"220px"}} className="card is-flex is-justify-content-center">
            <div className="card-content">
                <label className="label" htmlFor="">Estudos do dia</label>
                <div className="content">
                    <ul>
                        {tarefas.map((tarefa,index)=>{
                        return ( 
                            <li key={tarefa.id} onClick={ () =>console.log(tarefa.id)}>
                                <h3>{tarefa.tarefa}</h3>   
                                <span>{tarefa.tempo}</span>
                            </li>           
                        )             
                        })}
                    </ul>
                </div>
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