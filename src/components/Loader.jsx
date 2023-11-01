import styles from "./styles/Loader.module.css"
import e_499 from "../assets/e_499.png"
import e_499_2 from "../assets/e_499_2.png"
import e_636 from "../assets/e_636.png"
// import white_lg from "../assets/white_lg.png"
import white_lg from "../assets/logo.svg"

const Loader = ({ loading }) => {
    return (
        <div className={`${styles.container} ${!loading && styles.loaded_container}`}>
            <img className={`${styles.white_lg} ${!loading && styles.loaded_lg}`} src={white_lg} alt="Instapay" />
            <img className={`${styles.e_636} ${!loading && styles.loaded_636}`} src={e_636} />
            <img className={`${styles.e_499_2} ${!loading && styles.loaded_499}`} src={e_499_2} />
            <img className={`${styles.e_499} ${!loading && styles.loaded_499}`} src={e_499} />
        </div>
    )
}

export default Loader