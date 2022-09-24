import Tarefa from "../../../models/Tarefa";

export default function Item(props:PropsItem){
    const {item,isSelecionado} = props
    return (
        <li  className="li-tarefas" onClick={()=> isSelecionado(item)}>
            <h3>{item.tarefa}</h3>   
            <span>{item.tempo}</span>
        </li>  
    )     
}

type PropsItem ={
    item:Tarefa;
    isSelecionado : (a:Tarefa) => void;
}