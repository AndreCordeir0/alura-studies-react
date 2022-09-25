import { useEffect, useState } from "react";
import Tarefa from "../../models/Tarefa";
import { converteTempoEmSegundos } from "../../utils/Date.Util";
import Botao from "../Button";

export default function Cronometro({ selecionado }: Props ){
    const [tempo,setTempo] = useState(converteTempoEmSegundos(selecionado?.tempo));

    function iniciarCronometro(valor:string){
        console.log(valor)

        console.log(selecionado);
    }
    useEffect(()=>{
        if(selecionado?.tempo){
            setTempo(converteTempoEmSegundos(selecionado?.tempo));
            // console.log(tempo);
            
        }
    },[selecionado])  
    return(
        <div className="is-flex is-flex-direction-column is-align-items-center">
            <div className="is-flex is-flex-direction-row">
                <span >0</span>
                <span>0</span>
                <span>:</span>
                <span>0</span>
                <span>0</span>
                <span>{tempo}</span>
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