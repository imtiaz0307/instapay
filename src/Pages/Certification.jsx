import React from 'react'
import styles from "./styles/Certification.module.css"
import NavbarFooter from '../components/NavbarFooter'
import SidebarFixed from '../components/SidebarFixed'
import { Link } from "react-router-dom"
import swiss_auth from "../assets/swiss_authorization.pdf"

const Certification = () => {
    return (
        <div>
            <div style={{ position: "fixed", left: 0, height: "100vh", top: 0 }} className={styles.side}>
                <SidebarFixed featureText={"Affiliation Certificate"} color='#000' />
            </div>
            <div style={{ position: "sticky", top: 0 }}>
                <NavbarFooter />
            </div>
            <main className={styles.content}>
                {/* <h4>LEGAL & REGULATORY</h4> */}
                <h2>Affiliation Certificate</h2>

                <h3>Access our regulatory and legal documents with ease.</h3>

                <h6>Regulatory Documents</h6>

                <div className={styles.card}>
                    <h4>Affiliation Certificate with SO-FIT 2020</h4>
                    <Link to={swiss_auth} target='_blank'>View/Download</Link>
                </div>

                <div className={styles.extra}>
                    These documents are also available for online viewing. To consult them, please click <Link to={"https://www.finma.ch/en/authorisation/self-regulatory-organisations-sros/sro-member-search/"} target='_blank'>"here"</Link>
                </div>
            </main>
        </div>
    )
}

export default Certification