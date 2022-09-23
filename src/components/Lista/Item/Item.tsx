export default function Item(item:Item,props:string){
    return (
        <li  className="li-tarefas" onClick={ () =>console.log(props)}>
            <h3>{item.tarefa}</h3>   
            <span>{item.tempo}</span>

        </li>  
    )     
}

type Item =  {
    id: number,
    tarefa:string,
    tempo:string
}