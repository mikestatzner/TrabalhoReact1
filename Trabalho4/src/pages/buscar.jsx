import { useState } from "react"
import { Entrada } from "../components/input/input";

export function Buscar () {
    const itens = ["chuteira", "meiao", "caneleira", "short", "camisa", "oculos"]
    const [listaItens, setListaItens] = useState(itens)
    const [procurar, setProcurar] = useState("");
    const Pesquisar = (i)=> {
        const busca = i.target.value
        setProcurar(busca)
    
        const filtrar = itens.filter(iten => iten.includes(busca.toLowerCase()))
        setListaItens(filtrar); 
    }
    return (
<>
        <Entrada name="iten" value={procurar} onChange={Pesquisar}/>
        <ul>
            {
                listaItens.map((iten, index) =>(<li key={index}>{iten}</li>))
            }
        </ul>
</>
    );
}