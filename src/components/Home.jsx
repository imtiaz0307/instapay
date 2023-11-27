import Navbar from './Navbar'
import styles from "./styles/Home.module.css"
// import home from "../assets/home.png"
import home from "../assets/footer_right.png"
import chevron from "../assets/chevron.gif"
import { useAppState } from '../context/AppContext'

const Home = () => {
    const { heroRef, animate } = useAppState()
    return (
        <div className={styles.home} ref={heroRef}>
            <Navbar />
            <div className={styles.hero} data-scroll data-scroll-speed="0.9">
                <div className={styles.left}>
                    <img src={home} alt="home" />
                </div>
                <div className={styles.right}>
                    <div className={styles.top}>
                        <h1 className={`${styles.head} ${styles.thin_head}`}>
                            Transforming <br />
                            Social Media Chats--
                        </h1>
                        <h1 className={`${styles.bold_head}`}>
                            Into Seamless
                            Payment Avenues.
                        </h1>
                    </div>
                    <p className={styles.sub_text}>
                        With INSTA-PAY, turn your go-to platforms—Instagram, WhatsApp, Telegram, X (Formerly Twitter) —into versatile transaction hubs. Be it P2P, P2B, B2P, or B2B transfers, we've got you covered—all within the chats you love. Make every conversation culminate in effortless payment.
                    </p>
                    <div className={styles.cta}>
                        <a target='_blank' href="https://tivo-new.vercel.app/auth/login">SIGN IN / SIGN UP</a>
                        <a target='_blank' href="#">Become an Affiliate.</a>
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
                    // }} onClick={scrollHandler}>
                }} onClick={() => window.scrollTo({ top: 100, behavior: "smooth", })}>
                    {/* <video src={chevron} autoPlay={true} loop={true} controls={false} style={{ height: "100%", width: "100%", mixBlendMode: "" }}></video> */}
                    <img src={chevron} alt="chevron" style={{
                        height: "100%",
                        width: "100%"
                    }} />
                </div>
            }
            <div className={styles.bottom}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 38 39" fill="none">
                        <g clip-path="url(#clip0_1188_99)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1265 2.41605C14.8922 2.48021 11.4798 2.63192 8.63504 3.8909C6.33823 4.87741 4.52145 6.69418 3.53495 8.99176C2.27596 11.8365 2.12425 15.2489 2.06009 18.4832C2.05028 18.9806 2.05028 19.472 2.06009 19.9694C2.12425 23.2036 2.27596 26.616 3.53495 29.4608C4.52145 31.7584 6.33823 33.5744 8.6358 34.5617C11.4806 35.8207 14.893 35.9724 18.1272 36.0365C18.6246 36.0463 19.116 36.0463 19.6134 36.0365C22.8477 35.9724 26.2593 35.8207 29.1049 34.5617C31.3964 33.5774 33.22 31.7561 34.2057 29.4608C35.4647 26.616 35.6164 23.2036 35.6806 19.9694C35.6904 19.472 35.6904 18.9806 35.6806 18.4832C35.6164 15.2489 35.4647 11.8373 34.2057 8.99176C33.2192 6.69418 31.4024 4.87817 29.1049 3.8909C26.2601 2.63192 22.8477 2.48021 19.6134 2.41605C19.1153 2.40624 18.6239 2.40624 18.1265 2.41605Z" fill="#D81F2A" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9758 10.2832H21.7651V16.3313H27.8132V22.1205H21.7651V28.1686H15.9758V22.1205H9.92773V16.3313H15.9758V10.2832Z" fill="#F1F0F0" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1981 3.50914C6.556 4.34619 3.8984 7.58499 3.14512 13.5621C2.74282 16.7556 2.74282 21.6965 3.14512 24.89C3.98218 31.5298 7.22399 34.1905 13.1981 34.943C16.3916 35.3453 21.3325 35.3453 24.526 34.943C31.1651 34.1067 33.8265 30.8634 34.579 24.89C34.9813 21.6965 34.9813 16.7556 34.579 13.5621C33.8265 7.588 31.1658 4.34544 24.526 3.50914C21.3325 3.10683 16.3916 3.10683 13.1981 3.50914ZM12.8411 0.683967C16.3094 0.246946 21.4147 0.246946 24.883 0.683967C32.8875 1.69236 36.4878 5.93653 37.4034 13.2044C37.8404 16.6726 37.8404 21.778 37.4034 25.2462C36.4878 32.5141 32.8867 36.7583 24.883 37.7667C21.4147 38.2037 16.3094 38.2037 12.8411 37.7667C5.57252 36.8518 1.3291 33.2523 0.319954 25.247C-0.117068 21.7788 -0.117068 16.6734 0.319954 13.2051C1.23702 5.93125 4.82981 1.69387 12.8411 0.683967Z" fill="#B4B4B4" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1188_99">
                                <rect width="37.7393" height="37.7393" fill="white" transform="translate(0 0.356445)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span>
                        A Swiss Company
                    </span>
                </div>
                <span>® 2023 All rights reserved.</span>
            </div>
        </div>
    )
}

export default Home