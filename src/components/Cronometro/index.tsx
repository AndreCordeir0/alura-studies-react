import { useState } from "react";
import Tarefa from "../../models/Tarefa";
import Botao from "../Button";

export default function Cronometro({ selecionado }: Props ){
    const [tempo,setTempo] = useState();

    function iniciarCronometro(valor:string){
        console.log(valor)

        console.log(selecionado);
    }
    
    return(
        <div className="is-flex is-flex-direction-column is-align-items-center">
            <div className="is-flex is-flex-direction-row">
                <span >0</span>
                <span>0</span>
                <span>:</span>
                <span>0</span>
                <span>0</span>
            </div>
            <div >
                <Botao onClick={()=>iniciarCronometro('oi')}>
                    
                    Iniciar                    
                </Botao>
            </div>
        </div>
    )
}

type Props = {
selecionado:Tarefa | undefined;
}