
export default function Botao(props:any) {    
    return(
        <button onClick={props?.onClick}>{props.children}</button>
    )
    
}

