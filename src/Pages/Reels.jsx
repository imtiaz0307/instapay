import NavbarFooter from "../components/NavbarFooter"
import SidebarFixed from "../components/SidebarFixed"
import styles from "./styles/Reels.module.css"
import banner from "../assets/reels/banner.png"
import i_1 from "../assets/reels/1.png"
import i_2 from "../assets/reels/2.png"
import i_3 from "../assets/reels/3.png"

const Reels = () => {
    const data = [
        {
            name: "Video 01",
            desc: "Dive into a lucrative journey with InstaPay, where every follower can be a source of revenue. The more they transact, the more you earn ! It's time to turn influence into affluence.",
            img: i_1
        },
        {
            name: "Video 02",
            desc: "Dive into a lucrative journey with InstaPay, where every follower can be a source of revenue. The more they transact, the more you earn ! It's time to turn influence into affluence.",
            img: i_2
        },
        {
            name: "Video 03",
            desc: "Dive into a lucrative journey with InstaPay, where every follower can be a source of revenue. The more they transact, the more you earn ! It's time to turn influence into affluence.",
            img: i_3
        },
    ]
    return (
        <div>
            <div style={{ height: "100vh", width: "100vw", position: "fixed", top: 0, left: 0, background: "radial-gradient(81.32% 81.32% at 50% 50%, #02000b, #05001d)", zIndex: -1 }}></div>
            <div style={{ position: "fixed", left: 0, height: "100vh", top: 0 }}>
                <SidebarFixed featureText={"Play Our Reels"} color="#fff" />
            </div>
            <div style={{ position: "sticky", top: 0 }}>
                <NavbarFooter theme="dark" />
            </div>
            <main className={styles.content}>
                <h4>Tutorial/informative videos</h4>
                <h2>Play our reels.</h2>

                <img src={banner} alt="InstaPay Banner" />
                <h3>Watch Our Commercial Video</h3>
                <p>Dive into a lucrative journey with InstaPay, where every follower can be a source of revenue. The more they transact, the more you earn ! It's time to turn influence into affluence.</p>

                <div className={styles.cards}>
                    {
                        data.map(item => (
                            <div className={styles.card}>
                                <img src={item.img} alt={item.name} />
                                <h4>{item.name}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </main>
        </div>
    )
}

export default Reels