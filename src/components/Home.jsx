import Navbar from './Navbar'
import styles from "./styles/Home.module.css"
import home from "../assets/home.png"
import fixed_home from "../assets/fixed_home.png"
import fixed_light from "../assets/fixed_light.png"
import NavbarSecondary from './NavbarSecondary'
import SidebarFixed from './SidebarFixed'

const Home = () => {
    return (
        <>
            <img src={fixed_home} alt="fixed_home" className={styles.fixed_home} />
            <img src={fixed_light} alt="fixed_light" className={styles.fixed_light} />
            <div className={styles.home}>
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
            </div>

            <div className={`${styles.transform_section}`}>
                <NavbarSecondary />
                <SidebarFixed />

                <div className={styles.t_main}>
                    <div className={styles.extra}>a</div>
                    <div className={styles.t_content}>
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
            </div>
        </>
    )
}

export default Home