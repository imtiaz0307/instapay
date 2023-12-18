import styles from "./styles/Navbar.module.css"
import logo_black from "../assets/logo_color.svg"
import logo_white from "../assets/white_lg.png"
import { Link } from "react-router-dom"
import feature from "../assets/feature.svg"
import { useAppState } from "../context/AppContext"
import { X } from "react-feather"

const NavbarFooter = ({ theme = "light" }) => {
    const { isMenuOpen, setIsMenuOpen } = useAppState()
    return (
        <header className={styles.header}>
            <nav className={styles.nav} style={{ background: theme === "light" ? "rgba(255, 255, 255, 0.7)" : "rgba(2, 0, 11, 1)" }}>
                <a href="/" className={styles.logo} style={{ position: "relative", zIndex: 11 }}>
                    <img src={theme === "light" ? logo_black : logo_white} alt="Instapay" />
                </a>
                <div className={styles.cta}>
                    <Link className={styles.cta_1} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={"/affiliation-program"}>Become an Affiliate.</Link>
                    <a className={styles.cta_2} target="_blank" href="https://instapay-user.vercel.app/auth/login">SIGN IN / SIGN UP</a>
                    {
                        isMenuOpen
                            ?
                            <X size={30} color='black'
                                onClick={() => {
                                    setIsMenuOpen(!isMenuOpen)
                                }}
                            />
                            :
                            <img
                                src={feature}
                                alt="logo"
                                style={{ height: "20px", width: "20px", objectFit: "contain" }}
                                onClick={() => {
                                    setIsMenuOpen(!isMenuOpen)
                                }}
                            />
                    }
                </div>
            </nav>
        </header>
    )
}

export default NavbarFooter