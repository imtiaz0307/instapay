import NavbarSecondary from "./NavbarSecondary"
import SidebarFixed from "./SidebarFixed"
import styles from "./styles/FeatureTwo.module.css"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import "swiper/css"
import chev_right from "../assets/chev_right.svg"
import chev_left from "../assets/chev_left.svg"
import { useState } from "react";
import ParticlesBg from "./ParticlesBg";

const FeatureTwo = () => {
    const [swiper, setSwiper] = useState()
    const cardsData = [
        {
            head: "Standard Payment Request:",
            text: "Whether you're reaching out to family, friends, or business providers, send tailored payment requests directly through our virtual chatbot or web portal. Need to bill mulFple clients at once? Opt for our bulk request feature, designed for swiX group payments. Each request is uniquely craXed for one-Fme payments, ensuring security and efficiency"
        },
        {
            head: "Subscription and Scheduled Payments:",
            text: "Regular payments? No sweat. InstaPay offers two disFnct plans: set up clearly defined subscripFon payments with an end-date or go for the convenience of open-ended scheduled payments. Perfect for those repeated transacFons."
        },
        {
            head: "SecurePay Deposit:",
            text: "Tailored for businesses, especially sectors like hospitality and rentals. Manage security deposits with unparalleled flexibility, se\ng terms like refundability directly through the chatbot or web portal. A blend of convenience for clients and autonomy for businesses"
        },
        {
            head: "Instalment Plan:",
            text: "Plan, communicate, and manage custom instalment payments with ease. Whether you're an individual selling a high-Fcket item or a business offering flexible payment opFons, our feature ensures transparency every step of the way."
        },
        {
            head: "Standard Payment Request:",
            text: "Whether you're reaching out to family, friends, or business providers, send tailored payment requests directly through our virtual chatbot or web portal. Need to bill mulFple clients at once? Opt for our bulk request feature, designed for swiX group payments. Each request is uniquely craXed for one-Fme payments, ensuring security and efficiency"
        },
    ]

    const nextSlideHandler = () => {
        if (swiper) {
            swiper.slideNext();
        }
    };

    // Function to go to the previous slide
    const prevSlideHandler = () => {
        if (swiper) {
            swiper.slideTo(-1);
        }
    };


    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <NavbarSecondary />
            </div>
            <SidebarFixed featureText={"02 Features"} />
            <div className={styles.wrapper}>
                <div className={styles.top}>
                    <h2 data-feature={"02"}>Payment Request</h2>
                    <p>Experience versatility in payment requests with InstaPay. Here's what sets us apart:</p>
                </div>
                <Swiper
                    className={styles.bottom}
                    slidesPerView={1}
                    spaceBetween={30}
                    onSwiper={e => setSwiper(e)}
                    loop={true}
                    style={{
                        maxWidth: "400px",
                        minWidth: "300px",
                        width: "100%"
                    }}
                >
                    {
                        cardsData.map((item, ind) => (
                            <SwiperSlide key={ind} style={{
                                maxWidth: "400px",
                                minWidth: "300px",
                                color: "white",
                                padding: "1rem",
                                background: "linear-gradient(180deg, rgba(109, 47, 241, 0.25) 0%, rgba(109, 47, 241, 0.00) 100%)",

                            }}>
                                <h3>{item.head}</h3>
                                <p>{item.text}</p>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className={styles.navigators}>
                    <img src={chev_left} alt="<" onClick={prevSlideHandler} />
                    <img src={chev_right} alt=">" onClick={nextSlideHandler} />
                </div>
            </div>
            <ParticlesBg />
        </div>
    )
}

export default FeatureTwo