import React from 'react'
import NavbarFooter from '../components/NavbarFooter'
import SidebarFixed from '../components/SidebarFixed'
import styles from "./styles/About.module.css"
import { Link } from "react-router-dom"
import about_r from "../assets/about_r.png"

const About = () => {
    return (
        <div>
            <div style={{ position: "fixed", left: 0, height: "100vh", top: 0 }} className={styles.side}>
                <SidebarFixed featureText={"About Us"} color='#000' />
            </div>
            <div style={{ position: "sticky", top: 0 }}>
                <NavbarFooter />
            </div>
            <main className={styles.content}>
                <h1>About Us</h1>
                <section className={styles.top}>
                    <div className={styles.left}>
                        <h2>KEMIT KINGDOM: A Regulated Entity</h2>
                        <p>InstaPay, a cutting-edge financial platform, is powered by Kemit Kingdom (K2) SA. As <Link to={"https://www.finma.ch/en/authorisation/self-regulatory-organisations-sros/sro-member-search/"}>a financial intermediary in Switzerland</Link>, we strictly adhere to the Swiss Anti-Money Laundering Act. We are part of the Financial Services Standards Association (<Link to={"https://so-fit.ch/"}>SOFIT</Link>), the largest self-regulatory organization (SRO) in Switzerland, based in Geneva. This ensures our commitment to high regulatory standards and practices.</p>
                    </div>
                    <div className={styles.right}>
                        <img src={about_r} alt="Kemit Kingdom" />
                    </div>
                </section>
                <section>
                    <h2>Our Commitment to Know Our Clients</h2>
                    <p>In compliance with money laundering legislation, we diligently gather, maintain, and update our clients' information. This includes verifying the identity of beneficial owners for both entities and individual clients, understanding the sources and applications of funds, and ensuring their legitimate use. While initial onboarding may involve thorough documentation, our team is dedicated to assisting you through every step of the process. We also have an internal compliance officer and engage third-party partners to ensure adherence to these regulations. Our staff regularly participates in training sessions on due diligence and related matters to stay abreast of the latest compliance standards.</p>
                </section>
                <section>
                    <h2>Upholding Strict Confidentiality Standards</h2>
                    <p>At Kemit Kingdom, the confidentiality of our client records is paramount. Access to these records is strictly limited to our SRO, their agents, or other authorized audit bodies, and is only permissible within the scope of a compliance audit or as stipulated by Swiss law, under strict confidentiality protocols. Disclosure of information to Swiss authorities is strictly governed and occurs only in the context of legitimate criminal investigations. Swiss law upholds a high standard of client confidentiality and only intervenes under grave circumstances. While we are legally obliged to report to the Swiss authorities (<Link to={"https://www.fedpol.admin.ch/fedpol/en/home/kriminalitaet/geldwaescherei.html"}>MROS</Link>) if any criminal activities (as defined by Swiss law) are suspected, outside of these parameters, we are staunchly committed to protecting and advocating for our clients' rights to manage their affairs with the highest level of discretion and confidentiality.
                    </p>
                </section>
            </main>
        </div>
    )
}

export default About