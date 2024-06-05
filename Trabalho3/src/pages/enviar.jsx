import { Botao } from "../components/botao/botao";
import { Entrada } from "../components/input/input";
import { useState } from "react";

export function Enviar () {
    const [formInfo, setFormInfo] = useState({ nome: ""})
    const adicionar = (e) => {
        const {name, value} = e.target
        setFormInfo ({ ...formInfo, [name]: value }) 
    }
    return (
        <>
        <div>
         <form>
            <Entrada name="nome" value={formInfo.nome} onChange={adicionar}/>
        </form>
        <Botao onclick={() => {console.log(formInfo)}}/>
        </div>
        </>
    );
}