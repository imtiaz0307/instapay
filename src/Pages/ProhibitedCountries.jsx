import React from 'react'
import styles from "./styles/ProhibitedCountries.module.css"
import SidebarFixed from '../components/SidebarFixed'
import NavbarFooter from '../components/NavbarFooter'

const ProhibitedCountries = () => {

    const countriesList = ["Crimea", "Iran", "North Korea", "Sudan", "Cuba", "Libya", "South Sudan", "Venezuela", "Russia", "Belarus", "Eritrea", "Yemen"]

    return (
        <div>
            <div style={{ position: "fixed", left: 0, height: "100vh", top: 0 }} className={styles.side}>
                <SidebarFixed featureText={"Prohibited Countries"} color='#000' />
            </div>
            <div style={{ position: "sticky", top: 0 }}>
                <NavbarFooter />
            </div>
            <main className={styles.content}>
                {/* <h4>LEGAL & REGULATORY</h4> */}
                <h2>Prohibited Countries</h2>

                <h3>Our commitment to the fight against money laundering and terrorism financing is unwavering.</h3>

                <h6>List of Prohibited Countries</h6>

                <div className={styles.cards_container}>
                    {
                        countriesList.map(item => (
                            <div className={styles.card} key={item}>{item}</div>
                        ))
                    }
                </div>

                <div className={styles.bottom}>
                    <h3>Definitions and Interpretations</h3>
                    <p>Due to our stringent internal policy against money laundering and terrorism financing, as well as the enhanced requirements for international sanctions, we are unable to receive or process payments from or to the countries listed above.</p>
                    <br />
                    <br />
                    <p>We encourage you to regularly check this list, as it may be updated in response to changes in regulations and international contexts.</p>
                </div>
            </main>
        </div>
    )
}

export default ProhibitedCountries