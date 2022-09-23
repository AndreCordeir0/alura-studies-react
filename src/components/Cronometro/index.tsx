import Botao from "../Button";

export default function Cronometro(){
    return(
        <div className="is-flex is-flex-direction-column is-align-items-center">
            <div className="is-flex is-flex-direction-row">
                <span>0</span>
                <span>0</span>
                <span>:</span>
                <span>0</span>
                <span>0</span>
            </div>
            <div >
                <Botao children="Iniciar"/>
            </div>
        </div>
    )
}