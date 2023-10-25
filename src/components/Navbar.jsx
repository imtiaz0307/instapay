import styles from "./styles/Navbar.module.css"
import logo_black from "../assets/logo_black.svg"
import play from "../assets/play.svg"

const Navbar = ({ showPlay = true }) => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <a href="#" className={styles.logo}>
                    <img src={logo_black} alt="Instapay" />
                </a>
                {
                    showPlay
                    &&
                    <div className={styles.play}>
                        <span>Play the reel</span>
                        <img src={play} alt="Play" />
                    </div>
                }
            </nav>
        </header>
    )
}

export default Navbar