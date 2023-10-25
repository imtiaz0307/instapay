import Navbar from './Navbar'
import styles from "./styles/Home.module.css"
import home from "../assets/home.png"
import fixed_home from "../assets/fixed_home.png"
import fixed_light from "../assets/fixed_light.png"
import NavbarSecondary from './NavbarSecondary'
import SidebarFixed from './SidebarFixed'
import { useEffect, useRef, useState } from 'react'

const Home = () => {
    const [showImage, setShowImage] = useState(false)
    const [animate, setAnimate] = useState(false)

    const transformRef = useRef(null)
    const heroRef = useRef(null)

    const callback = () => {
        const height = window.innerHeight;
        const scrollY = window.scrollY;

        if (scrollY >= height - 100) {
            if (scrollY >= (height * 2) - 300) {
                setShowImage(false)
            } else {
                setShowImage(true)
            }
        } else {
            setShowImage(false)
        }
    }
    useEffect(() => {

        window.addEventListener("scroll", callback)
        return () => window.removeEventListener("scroll", callback)

    }, [])

    useEffect(() => {

        const insectionHandler = (e) => {
            if (!e[0].isIntersecting) {
                setAnimate(!e[0].isIntersecting)
                const element = transformRef.current;
                if (element) {
                    const top = window.innerHeight;
                    window.scrollTo({
                        top,
                        behavior: "auto"
                    });
                }
                setShowImage(true)
            } else {
                setAnimate(!e[0].isIntersecting)
            }
        }
        const options = {
            threshold: 0.99
        }

        const newObserver = new IntersectionObserver(insectionHandler, options)
        if (heroRef.current) {
            newObserver.observe(heroRef.current)
        }

        return () => newObserver.unobserve(heroRef?.current)

    }, [])

    return (
        <div>
            <img src={fixed_home} alt="fixed_home" className={`${styles.fixed_home} ${animate && showImage ? styles.home_in : styles.home_out}`} />
            <img src={fixed_light} alt="fixed_light" className={`${styles.fixed_light} ${animate && showImage ? styles.light_in : styles.light_out}`} />
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
                <div style={{
                    position: "absolute",
                    height: "20px",
                    width: "20px",
                    background: "white",
                    bottom: "5%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 100,
                    cursor: "pointer",
                    borderRadius: "10px"
                }} onClick={() => {
                    setAnimate(true)
                    const element = transformRef.current;
                    if (element) {
                        const top = window.innerHeight;
                        window.scrollTo({
                            top,
                            behavior: "auto"
                        });
                    }
                    setShowImage(true)
                }}>
                </div>
            </div>

            <div className={`${styles.transform_section} ${animate ? styles.in_view : styles.not_in_view}`} ref={transformRef}>
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
            </div>
        </div>
    )
}

export default Home