import React from 'react'
import styles from "./styles/SideMenu.module.css"
import logo_white from "../assets/logo_white.svg"
import logo from "../assets/logo_color.svg"
import feature from "../assets/feature.svg"
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
import { linksData } from './FooterNew'
import { X } from 'react-feather'

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
    const mobile_links = [
        {
            link: "#",
            icon: <BiLogoInstagram color="white" size={20} />,
        },
        {
            link: "#",
            icon: <BiLogoLinkedin color="white" size={20} />,
        },
        {
            link: "#",
            icon: <BiLogoFacebook color="white" size={20} />,
        },
        {
            link: "#",
            icon: <BiLogoWhatsapp color="white" size={20} />,
        },
        {
            link: "#",
            icon: <BiLogoYoutube color="white" size={20} />,
        },
        {
            link: "#",
            icon: <FaXTwitter color="white" size={20} />,
        },
    ];

    const linkHandler = () => {
        setIsMenuOpen(false)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    return (
        <>
            <div className={`${styles.container} ${!isMenuOpen && styles.not_open}`}>
                <div className={styles.nav}>
                    <a href="/" className={styles.logo}>
                        <img src={logo_white} alt="instapay" />
                    </a>
                    <Link to={"/play-reels"} onClick={linkHandler}>
                        <div className={styles.play}>
                            <span>Play the reel</span>
                            <img src={play} alt="Play" />
                        </div>
                    </Link>
                </div>
                <div>
                    <SidebarFixed featureText={"MAIN MENU"} color='#fff' />
                </div>
                <img src={side_left} alt="sidebar image" className={styles.side_img} />

                <div className={styles.main_menu}>
                    {/* <Link onClick={linkHandler} to={"/"}>Features</Link> */}
                    <Link onClick={linkHandler} to={"/about-us"}>About InstaPay</Link>
                    <Link onClick={linkHandler} to={"/contact-us"}>Contact Us</Link>
                </div>

                <div className={styles.footer_menu}>
                    {
                        [...linksData]
                            .sort((a, b) => a.name.length - b.name.length)
                            .map(link => <Link onClick={linkHandler} to={link.link}>{link.name}</Link>)
                    }
                </div>

                <div className={styles.socials}>
                    {links.map((link, index) => (
                        <a key={index} href={link.link}>
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>

            <div className={`${styles.mobile_container} ${!isMenuOpen && styles.not_open_mobile}`}>
                <div className={styles.mobile_wrapper}>
                    <div className={styles.m_nav}>
                        <img src={logo} className={styles.logo} />
                        <div>
                            <Link to={"https://instapay-user.vercel.app/auth/login"}>SIGN IN / SIGN UP</Link>
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
                                        style={{ height: "30px", width: "30px", objectFit: "contain" }}
                                        onClick={() => {
                                            setIsMenuOpen(!isMenuOpen)
                                        }}
                                    />
                            }
                        </div>
                    </div>
                    <div className={styles.m_main_menu}>
                        <Link onClick={linkHandler} to={"/about-us"}>About InstaPay</Link>
                        <Link onClick={linkHandler} to={"/contact-us"}>Contact Us</Link>
                    </div>
                    <div className={styles.m_footer_menu}>
                        {
                            [...linksData]
                                .sort((a, b) => a.name.length - b.name.length)
                                .map(link => <Link onClick={linkHandler} to={link.link}>{link.name}</Link>)
                        }
                    </div>
                    <div className={styles.m_socials}>
                        {mobile_links.map((link, index) => (
                            <a key={index} href={link.link}>
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideMenu