import Navbar from './Navbar'
import styles from "./styles/Home.module.css"
import home from "../assets/home.png"
import chevron from "../assets/chevron.gif"

const Home = ({ heroRef, animate, scrollHandler }) => {
    return (
        <div className={styles.home} ref={heroRef}>
            <Navbar />
            <div className={styles.hero}>
                <div className={styles.left}>
                    <img src={home} alt="home" />
                </div>
                <div className={styles.right}>
                    <div className={styles.top}>
                        <h1 className={`${styles.head} ${styles.thin_head}`}>
                            Transforming <br />
                            Social Media Chats--
                        </h1>
                        <h1 className={`${styles.head} ${styles.bold_head}`}>
                            Into Seamless <br />
                            Payment Avenues.
                        </h1>
                    </div>
                    <p className={styles.sub_text}>
                        With INSTA-PAY, turn your go-to platforms—Instagram, WhatsApp, Telegram, X (Formerly Twitter) —into versatile transaction hubs. Be it P2P, P2B, B2P, or B2B transfers, we've got you covered—all within the chats you love. Make every conversation culminate in effortless payment.
                    </p>
                    <div className={styles.cta}>
                        <a href="#">Sign in</a>
                        <a href="#">Become an Affiliate.</a>
                    </div>
                </div>
            </div>
            {
                !animate
                &&
                <div style={{
                    position: "absolute",
                    height: "40px",
                    width: "40px",
                    bottom: "3%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 100,
                    cursor: "pointer",
                }} onClick={scrollHandler}>
                    {/* <video src={chevron} autoPlay={true} loop={true} controls={false} style={{ height: "100%", width: "100%", mixBlendMode: "" }}></video> */}
                    <img src={chevron} alt="chevron" style={{
                        height: "100%",
                        width: "100%"
                    }} />
                </div>
            }
        </div>
    )
}

export default Home