import { useEffect, useState } from "react";

export function MostrarRelogio () {
    const [hora ,setHora] = useState (new Date());
    useEffect (()=> {
        const horaNova = setInterval (()=> setHora(new Date()), 1000)
        return () => clearInterval(horaNova);
    },[])
    return (
        
         <div>
           {hora.toLocaleTimeString()}
         </div>
        
    );
}