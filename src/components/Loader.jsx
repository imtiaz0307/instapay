import styles from "./styles/Loader.module.css"
import e_499 from "../assets/e_499.png"
import e_499_2 from "../assets/e_499_2.png"
import e_636 from "../assets/e_636.png"
import white_lg from "../assets/white_lg.png"

const Loader = () => {
    return (
        <div className={styles.container}>
            <img className={styles.white_lg} src={white_lg} alt="Instapay" />
            <img className={styles.e_636} src={e_636} />
            <img className={styles.e_499_2} src={e_499_2} />
            <img className={styles.e_499} src={e_499} />
        </div>
    )
}

export default Loader