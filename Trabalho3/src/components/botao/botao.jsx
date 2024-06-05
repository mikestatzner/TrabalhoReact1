import styles from "./button.module.css"
export function Botao ({ onclick }) {
    return (
    <>
    <button id="botao" className={styles.botao} onClick={onclick}>Enviar</button>
    </>
    );
}