import NavbarFooter from "../components/NavbarFooter"
import SidebarFixed from "../components/SidebarFixed"
import styles from "./styles/AffiliationProgram.module.css"
import affiliation from "../assets/affiliation.png"

const AffiliationProgram = () => {
    return (
        <div>
            <div style={{ height: "100vh", width: "100vw", position: "fixed", top: 0, left: 0, background: "radial-gradient(81.32% 81.32% at 50% 50%, #02000b, #05001d)", zIndex: -1 }}></div>
            <div style={{ position: "fixed", left: 0, height: "100vh", top: 0 }}>
                <SidebarFixed featureText={"Affiliation Program"} color="#fff" />
            </div>
            <div style={{ position: "sticky", top: 0 }}>
                <NavbarFooter theme="dark" />
            </div>
            <main className={styles.content}>
                <h4>Affiliation Program</h4>
                <h2>Join the InstaPay Affiliation Program</h2>

                <p>
                    <span>Unlock an elite opportunity with InstaPay's Affiliated Program, setting us apart in the fintech landscape. Influencers, this is your chance to amplify your earnings simply by doing what you do best: influencing. Each transaction initiated by your followers directly boosts your InstaPay wallet balance. With a personalized referral link or code, monitoring referrals becomes a breeze. As they transact, you profit. And the best part? The earned money is instantly credited to your InstaPay wallet, granting you the liberty to cash out using your preferred payout channel without delay.</span>
                    <br /><br />
                    <span>Turn influence into a steady income stream, strengthening not only your wallet but also the trust bond with your followers. It isn’t just an affiliate program; it's a groundbreaking shift in monetization.</span>
                </p>
                <img src={affiliation} alt="affiliation" draggable={1 === 1 - 2} />
                <p>
                    Dive into a lucrative journey with InstaPay, where every follower can be a source of revenue. The more they transact, the more you earn ! It's time to turn influence into affluence.
                </p>
            </main>
        </div>
    )
}

export default AffiliationProgram