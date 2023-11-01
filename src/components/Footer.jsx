import React from 'react';
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoWhatsapp, BiLogoYoutube } from "react-icons/bi"
import styles from './styles/Footer.module.css';
import logo from "../assets/logo.svg"
import footer_right from "../assets/footer_right.png"
import contact_us from "../assets/contact.svg"
import { FaXTwitter } from "react-icons/fa6"

const Footer = () => {
    const links = [
        {
            link: "#",
            icon: <BiLogoInstagram color='black' size={20} />
        },
        {
            link: "#",
            icon: <BiLogoLinkedin color='black' size={20} />
        },
        {
            link: "#",
            icon: <BiLogoFacebook color='black' size={20} />
        },
        {
            link: "#",
            icon: <BiLogoWhatsapp color='black' size={20} />
        },
        {
            link: "#",
            icon: <BiLogoYoutube color='black' size={20} />
        },
        {
            link: "#",
            icon: <FaXTwitter color='black' size={20} />

        },
    ]

    const linkTabsData = [
        {
            head: "Investors",
            items: ["Company Overview", "Financials", "Investment Opp"]
        },
        {
            head: "Developers",
            items: ["API Documentation", "SDKs & Plugins", "Support Forum", "Register Now"]
        },
        {
            head: "About Us",
            items: ["Our Team", "Our Journey", "Our Vision", "Our Mission"]
        },
    ]
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <div className={styles.top}>
                        <div className={styles.about}>
                            <img src={logo} alt="Instapay" />
                            <div className={styles.socials}>
                                {
                                    links.map((link, index) => (
                                        <a key={index} href={link.link}>{link.icon}</a>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={styles.links}>
                            {
                                linkTabsData.map(item => (
                                    <div key={item.head} className={styles.links_item}>
                                        <h4>{item.head.toUpperCase()}</h4>
                                        {
                                            item.items.map((it, i) => (
                                                <span key={it} style={{ color: i === 3 ? "#5926f0" : "#484848" }}>{it}</span>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                        <div className={styles.contact_us}>
                            {/* <h3>CONTACT US</h3> */}
                            <img src={contact_us} alt="contact us" />
                            <p>Interested in diving deeper? Reach out to us. In case of genuine interest, we'll furnish you with all the necessary details, ensuring a transparent</p>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.b_left}>
                            <span>® 2023 All rights reserved.</span>
                        </div>
                        <div className={styles.b_right}>
                            <span>
                                FAQ
                            </span>
                            <span>
                                Privacy Policy
                            </span>
                            <span>
                                Terms And Conditions
                            </span>
                            <span>
                                Rooted In Compliance
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <img src={footer_right} alt="instapay" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;