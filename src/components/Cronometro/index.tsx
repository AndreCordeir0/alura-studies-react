import { useEffect, useState } from "react";
import Tarefa from "../../models/Tarefa";
import { converteTempoEmSegundos } from "../../utils/Date.Util";
import Botao from "../Button";

export default function Cronometro({ selecionado, finalizarTarefa }: Props ){
    const [tempo,setTempo] = useState<number | undefined>();
    const minutos = Math.floor((tempo ?? 0) / 60);
    const segundos = Math.floor((tempo ?? 0) % 60);
    const [dezenasMinutos,unidadeMinutos] = String(minutos).padStart(2,'0')
    const [dezenasSegunddos,unidadeSegunddos] = String(segundos).padStart(2,'0')

    function iniciarCronometro(contador:number = 0 ){        
        if(contador > 0){
            setTimeout(() => {
                    setTempo(contador - 1);         
                    iniciarCronometro(contador -1 )
                
            }, 1000);
         
        }else{
            finalizarTarefa();

        }
    }
    useEffect(()=>{
        if(selecionado?.tempo){
            setTempo(converteTempoEmSegundos(selecionado?.tempo));
        }
    },[selecionado])  
    return(
        <div className="is-flex is-flex-direction-column is-align-items-center">
            <div className="is-flex is-flex-direction-row">

                <span>{dezenasMinutos}</span>
                <span>{unidadeMinutos}</span>
                <span>:</span>
                <span>{dezenasSegunddos}</span>
                <span>{unidadeSegunddos}</span>
            </div>
            <div >
                <Botao onClick={()=>iniciarCronometro(tempo)}>
                    
                    Iniciar                    
                </Botao>
            </div>
        </div>
    )
}

type Props = {
selecionado:Tarefa | undefined;
finalizarTarefa: () => void;
}