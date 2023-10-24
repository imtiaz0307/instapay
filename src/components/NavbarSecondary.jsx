import styles from "./styles/NavbarSecondary.module.css"
import logo_white from "../assets/logo_white.svg"
// import play from "../assets/play.svg"

const NavbarSecondary = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <a href="#" className={styles.logo}>
                    <img src={logo_white} alt="Instapay" />
                </a>
                {/* <div className={styles.play}>
                    <span>Play the reel</span>
                    <img src={play} alt="Play" />
                </div> */}
            </nav>
        </header>
    )
}

export default NavbarSecondary