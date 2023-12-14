import React from 'react'
import styles from "./styles/BecomeAPartner.module.css"
import SidebarFixed from '../components/SidebarFixed'
import NavbarFooter from '../components/NavbarFooter'

const BecomeAPartner = () => {
    return (
        <div>
            <div style={{ position: "fixed", left: 0, height: "100vh", top: 0 }}>
                <SidebarFixed featureText={"Become A Partner"} color="#000" />
            </div>
            <div style={{ position: "sticky", top: 0 }}>
                <NavbarFooter />
            </div>
            <main className={styles.content}>
                <h4>EARN MONEY WITH US</h4>
                <h2>BECOME A PARTNER</h2>

                <div>
                    <div className={styles.details}>
                        <h5>Social Network Platforms:</h5>
                        <p>Leverage your massive audience to unlock new, lucrative revenue streams. By integrating InstaPay, you're not merely enhancing user experience; you're unveiling a golden opportunity for revenue. Watch user engagement soar as you provide the seamless transaction capability they've always needed, right within the space they frequently interact. Go beyond connecting – monetize, empower, and revolutionize with InstaPay!</p>
                    </div>

                    <div className={styles.details}>
                        <h5>Payment Service Providers:</h5>
                        <p>We're on a relentless quest to integrate diverse local payment methods, ensuring our users always have the top-up options they need. Partner with InstaPay and diversify your portfolio, expanding your reach into new territories and demographics. Together, we can amplify transaction volumes and redefine payments in the digital age. With InstaPay, it's not just about processing payments, but pioneering a seamless and unified experience for all.</p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default BecomeAPartner