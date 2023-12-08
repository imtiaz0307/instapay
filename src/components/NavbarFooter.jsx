import styles from "./styles/Navbar.module.css"
import logo_black from "../assets/logo_color.svg"
import logo_white from "../assets/white_lg.png"
import { Link } from "react-router-dom"

const NavbarFooter = ({ theme = "light" }) => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav} style={{ background: theme === "light" ? "#fff" : "#02000b" }}>
                <a href="/" className={styles.logo} style={{ position: "relative", zIndex: 11 }}>
                    <img src={theme === "light" ? logo_black : logo_white} alt="Instapay" />
                </a>
                <div className={styles.cta}>
                    <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={"/affiliation-program"}>Become an Affiliate.</Link>
                    <a target="_blank" href="https://tivo-new.vercel.app/auth/login">SIGN IN / SIGN UP</a>
                </div>
            </nav>
        </header>
    )
}

export default NavbarFooter