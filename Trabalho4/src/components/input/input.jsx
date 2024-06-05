export function Entrada ({ value, onChange, name }) {
    return (
        <>
        <input id="Entrada1" type="text" placeholder="Digite aqui:" value={value} onChange={onChange} name={name}/>
        </>
    )
}