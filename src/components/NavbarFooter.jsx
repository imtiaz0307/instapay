import styles from "./styles/Navbar.module.css"
import logo_black from "../assets/logo_color.svg"

const NavbarFooter = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <a href="#" className={styles.logo}>
                    <img src={logo_black} alt="Instapay" />
                </a>
                <div className={styles.cta}>
                    <a href="#">Become an Affiliate.</a>
                    <a href="https://tivo-new.vercel.app/auth/login">SIGN IN / SIGN UP</a>
                </div>
            </nav>
        </header>
    )
}

export default NavbarFooter