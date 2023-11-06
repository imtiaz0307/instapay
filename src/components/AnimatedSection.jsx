import fixed_home from "../assets/fixed_home.png"
import fixed_light from "../assets/fixed_light.png"
import { useAppState } from "../context/AppContext"
import NavbarSecondary from './NavbarSecondary'
import SidebarFixed from './SidebarFixed'
import styles from "./styles/Home.module.css"
import ParticlesBg from "./ParticlesBg"
import { useEffect, useState } from "react"

const AnimatedSection = () => {
    const { showFixedImages, transformRef, animate } = useAppState()
    const [radius, setRadius] = useState("300px")

    useEffect(() => {
        setRadius(animate ? "0px" : "300px")
    }, [animate])

    return (
        <div className={`${styles.animated} ${animate ? styles.animated_view : ""}`} ref={transformRef}>
            {/* <div className={`${styles.transform_section} ${animate ? styles.in_view : styles.not_in_view}`} ref={transformRef}> */}
            <img src={fixed_home} alt="fixed_home" className={`${styles.fixed_home} ${animate && showFixedImages ? styles.home_in : styles.home_out}`} />
            <img src={fixed_light} alt="fixed_light" className={`${styles.fixed_light} ${animate && showFixedImages ? styles.light_in : styles.light_out}`} />
            {
                animate
                    ?
                    <>
                        <NavbarSecondary />
                        <SidebarFixed />
                    </>
                    :
                    ""
            }

            <div className={styles.t_main}>
                <div className={styles.extra}>a</div>
                <div className={`${styles.t_content} ${animate ? styles.fade_in : styles.fade_out}`}>
                    <h1>
                        Elevate Your Social Media Transactions to Unparalleled Convenience.
                    </h1>
                    <p>
                        With INSTA-PAY, say goodbye to external payment platforms when dealing on social media. Seamlessly pay, request, or receive money—and when it's time to cash out, choose your preferred payout channel, be it mobile wallets, bank accounts, payment cards like VISA/Mastercard, or even cash pick-up locations.
                    </p>
                    <p>
                        All this, without ever stepping away from your cherished social media space. Whether you're an individual syncing up with friends or a business building bridges with clients, transform every chat into a potent financial transaction. Dive into a reality where every message can effortlessly culminate in payment, all within the chats you adore.
                    </p>
                </div>
            </div>
            {
                animate &&
                <ParticlesBg borderRadius={radius} />
            }
            {/* </div> */}
        </div>
    )
}

export default AnimatedSection
