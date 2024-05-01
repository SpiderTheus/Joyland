import styles from './styles/estrutura.module.css'
import img_parque from '/Users/matem/OneDrive/Área de Trabalho/study/curso-react/4_CSS/Joyland/public/parque.jpg'

const Estrutura = () => {
  return (
    <div className={styles.estrutura}>
        <div className={styles.text_div}>
            <h1>Bem-vindo, ao melhor parque de todos os tempos</h1>
            <button className={styles.btn_style}>comprar ingresso</button>
      
        </div>
        <div className={styles.img_div}>
          <img src={img_parque} alt="Uma roda gigante" />
        </div>

    </div>
  )
}

export default Estrutura


