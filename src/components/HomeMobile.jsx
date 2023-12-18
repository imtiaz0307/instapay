import styles from "./styles/HomeMobile.module.css"
import hero from "../assets/footer_right.png"
import { Link } from "react-router-dom"
import anim_mob from "../assets/anim_mob.png"
import { useLayoutEffect, useRef, useState } from "react"

const HomeMobile = () => {
    const animRef = useRef(null)
    const [isScrolled, setIsScrolled] = useState(false)

    useLayoutEffect(() => {
        const scrollHandler = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", scrollHandler)
        return () => {
            window.removeEventListener("scroll", scrollHandler)
        }
    }, [])

    useLayoutEffect(() => {
        if (isScrolled) {
            animRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [isScrolled])
    return (
        <div className={styles.container}>
            <div className={styles.home}>
                <img src={hero} alt="h" />
                <h2>Transforming Social Media Chats</h2>
                <h5>Into Seamless Payment Avenues.</h5>
                <p>With InstaPay, turn your go-to platforms—Instagram, WhatsApp, Telegram, X (Formerly Twitter) —into versatile transaction hubs. Be it P2P, P2B, B2P, or B2B transfers, we've got you covered—all within the chats you love. Make every conversation culminate in effortless payment.</p>
                <div>
                    <a target="_blank" href="https://instapay-user.vercel.app/auth/login">SIGN IN / SIGN UP</a>
                    <Link to={"/affiliation-program"}>Become An Affiliate</Link>
                    <div>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1295_1700)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.37533 0.95201C6.8803 0.981666 5.30294 1.05179 3.98795 1.63375C2.92626 2.08976 2.08647 2.92956 1.63046 3.9916C1.0485 5.30659 0.97837 6.88395 0.948714 8.37897C0.944179 8.60889 0.944179 8.83603 0.948714 9.06595C0.97837 10.561 1.0485 12.1383 1.63046 13.4533C2.08647 14.5154 2.92626 15.3548 3.9883 15.8112C5.30329 16.3931 6.88065 16.4633 8.37568 16.4929C8.6056 16.4974 8.83273 16.4974 9.06265 16.4929C10.5577 16.4633 12.1347 16.3931 13.45 15.8112C14.5093 15.3562 15.3522 14.5143 15.8079 13.4533C16.3898 12.1383 16.46 10.561 16.4896 9.06595C16.4942 8.83603 16.4942 8.60889 16.4896 8.37897C16.46 6.88395 16.3898 5.30694 15.8079 3.9916C15.3519 2.92956 14.5121 2.09011 13.45 1.63375C12.135 1.05179 10.5577 0.981666 9.06265 0.95201C8.83238 0.947474 8.60525 0.947474 8.37533 0.95201Z" fill="#D81F2A" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.38165 4.58862H10.0577V7.38433H12.8534V10.0604H10.0577V12.8561H7.38165V10.0604H4.58594V7.38433H7.38165V4.58862Z" fill="#F1F0F0" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.10047 1.45731C3.03019 1.84423 1.80172 3.34135 1.45352 6.10426C1.26756 7.58044 1.26756 9.86432 1.45352 11.3405C1.84045 14.4097 3.33896 15.6396 6.10047 15.9875C7.57666 16.1734 9.86053 16.1734 11.3367 15.9875C14.4056 15.6009 15.6358 14.1017 15.9837 11.3405C16.1696 9.86432 16.1696 7.58044 15.9837 6.10426C15.6358 3.34274 14.406 1.84388 11.3367 1.45731C9.86053 1.27134 7.57666 1.27134 6.10047 1.45731ZM5.93545 0.151386C7.53863 -0.0506249 9.89856 -0.0506249 11.5017 0.151386C15.2018 0.617512 16.866 2.57936 17.2892 5.93888C17.4912 7.54206 17.4912 9.902 17.2892 11.5052C16.866 14.8647 15.2014 16.8265 11.5017 17.2927C9.89856 17.4947 7.53863 17.4947 5.93545 17.2927C2.57557 16.8698 0.614077 15.2059 0.147602 11.5055C-0.054409 9.90235 -0.054409 7.54241 0.147602 5.93923C0.571511 2.57692 2.23226 0.61821 5.93545 0.151386Z" fill="#B4B4B4" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1295_1700">
                                    <rect width="17.4448" height="17.4448" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span>
                            A Swiss Company
                        </span>
                    </div>
                </div>
            </div>

            <div className={styles.transform_section} ref={animRef} style={{
                borderRadius: !isScrolled ? "120px 120px 0px 0px" : "0px 0px 0px 0px",
                paddingTop: !isScrolled ? "200px" : "3rem",
                transition: "500ms"
            }}>
                <h2 style={{
                    opacity: !isScrolled ? 0 : 1,
                    transition: "500ms"
                }}>Elevate Your Social Media Transactions to Unparalleled Convenience.</h2>
                <p style={{
                    opacity: !isScrolled ? 0 : 1,
                    transition: "500ms"
                }}>With INSTAPAY, say goodbye to external payment platforms when dealing on social media. Seamlessly pay, request, or receive money—and when it's time to cash out, choose your preferred payout channel, be it mobile wallets, bank accounts, payment cards like VISA/Mastercard, or even cash pick-up locations.</p>
                <p style={{
                    opacity: !isScrolled ? 0 : 1,
                    transition: "500ms"
                }}>All this, without ever stepping away from your cherished social media space. Whether you're an individual syncing up with friends or a business building bridges with clients, transform every chat into a potent financial transaction. Dive into a reality where every message can effortlessly culminate in payment, all within the chats you adore.</p>
                <img src={anim_mob} alt="a" />
                <h3>FEATURES</h3>
            </div>
        </div>
    )
}

export default HomeMobile