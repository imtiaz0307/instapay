import Home from "../components/Home";
import FeatureRow from "../components/FeatureRow";
import { featuresData } from "../data/FeaturesData";
import FeatureTwo from "../components/FeatureTwo";
import Summarized from "../components/Summarized";
import AnimatedSection from "../components/AnimatedSection";
import styles from "./styles/Home.module.css"
import HomeMobile from "../components/HomeMobile";
import logo from "../assets/logo_color.svg"
import play from "../assets/play.svg"
import feature from "../assets/feature.svg"
import { useAppState } from "../context/AppContext";
import { Link } from "react-router-dom";
import { X } from "react-feather";

const HomePage = () => {
    const { isMenuOpen, setIsMenuOpen } = useAppState()
    return (
        <>
            <nav className={styles.nav}>
                <img src={logo} alt="logo" style={{ width: "120px", objectFit: "contain" }} />
                <div>
                    <Link to={"/play-reels"}>
                        <img src={play} style={{ width: "30px", height: "30px", objectFit: "contain" }} />
                    </Link>
                    {
                        isMenuOpen
                            ?
                            <X size={30} color='black'
                                onClick={() => {
                                    setIsMenuOpen(!isMenuOpen)
                                }}
                            />
                            :
                            <img
                                src={feature}
                                alt="logo"
                                style={{ height: "25px", width: "25px", objectFit: "contain", transform: "translateY(-3px)" }}
                                onClick={() => {
                                    setIsMenuOpen(!isMenuOpen)
                                }}
                            />
                    }
                </div>
            </nav>
            <Home />
            <AnimatedSection />
            <div className={styles.mobile}>
                <HomeMobile />
            </div>
            <FeatureRow
                key={featuresData[0].count}
                count={featuresData[0].count}
                head={featuresData[0].head}
                text={featuresData[0].text}
                img={featuresData[0].img}
                styles={featuresData[0].styles}
            />
            <FeatureTwo />
            {featuresData.slice(1).map(item => (
                <FeatureRow
                    key={item.count}
                    count={item.count}
                    head={item.head}
                    text={item.text}
                    img={item.img}
                    styles={item.styles}
                />
            ))}
            <Summarized />
        </>
    )
}

export default HomePage