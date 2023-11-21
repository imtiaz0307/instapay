import React from 'react'
import styles from "./styles/SideMenu.module.css"
import logo_white from "../assets/logo_white.svg"
import play from "../assets/play.svg"
import side_left from "../assets/side_left.png"
import SidebarFixed from './SidebarFixed'
import {
    BiLogoFacebook,
    BiLogoInstagram,
    BiLogoLinkedin,
    BiLogoWhatsapp,
    BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom"
import { useAppState } from '../context/AppContext'

const SideMenu = () => {
    const { isMenuOpen, setIsMenuOpen } = useAppState()

    const links = [
        {
            link: "#",
            icon: <BiLogoInstagram color="black" size={20} />,
        },
        {
            link: "#",
            icon: <BiLogoLinkedin color="black" size={20} />,
        },
        {
            link: "#",
            icon: <BiLogoFacebook color="black" size={20} />,
        },
        {
            link: "#",
            icon: <BiLogoWhatsapp color="black" size={20} />,
        },
        {
            link: "#",
            icon: <BiLogoYoutube color="black" size={20} />,
        },
        {
            link: "#",
            icon: <FaXTwitter color="black" size={20} />,
        },
    ];

    const linkHandler = () => {
        setIsMenuOpen(false)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    return (
        <div className={`${styles.container} ${!isMenuOpen && styles.not_open}`}>
            <div className={styles.nav}>
                <a href="/" className={styles.logo}>
                    <img src={logo_white} alt="instapay" />
                </a>
                <div className={styles.play}>
                    <span>Play the reel</span>
                    <img src={play} alt="Play" />
                </div>
            </div>
            <div>
                <SidebarFixed featureText={"MAIN MENU"} color='#fff' />
            </div>
            <img src={side_left} alt="sidebar image" className={styles.side_img} />

            <div className={styles.main_menu}>
                <Link onClick={linkHandler} to={"?section=feature"}>Features</Link>
                <Link onClick={linkHandler} to={"/about-us"}>About InstaPay</Link>
                <Link onClick={linkHandler} to={"/contact-us"}>Contact Us</Link>
            </div>

            <div className={styles.footer_menu}>
                <Link onClick={linkHandler} to="/faq">FAQ</Link>
                <Link onClick={linkHandler} to="/">API DOCUMENTATION</Link>
                <Link onClick={linkHandler} to="/privacy-policy">PRIVACY POLICY</Link>
                <Link onClick={linkHandler} to="/">LEGAL & REGULATORY</Link>
                <Link onClick={linkHandler} to="/terms-and-condtions">TERMS AND CONDITIONS</Link>
                <Link onClick={linkHandler} to="/affiliation-certificates">AFFILIATION CERTIFICATE</Link>
                <Link onClick={linkHandler} to="/prohibited-countries">Prohibited Countries</Link>
            </div>

            <div className={styles.socials}>
                {links.map((link, index) => (
                    <a key={index} href={link.link}>
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default SideMenu