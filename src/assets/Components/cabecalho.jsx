import styles from './styles/cabecalho.module.css'

const Cabecalho = () => {
  return (
    <div className={styles.nav_bar}>
        <p>JOYLAND</p>
          <ul className={styles.lista}>
            <li>ajuda</li>
            <li>logar</li>
            <li>cadastrar</li>
          </ul>
   
    </div>
  )
}

export default Cabecalho
