import styles from "./styles/Navbar.module.css"
import logo_black from "../assets/logo_color.svg"
import play from "../assets/play.svg"
import { Link } from "react-router-dom"

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
                    <Link to={"/play-reels"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        <div className={styles.play}>
                            <span>Play the reel</span>
                            <img src={play} alt="Play" />
                        </div>
                    </Link>
                }
            </nav>
        </header>
    )
}

export default Navbar