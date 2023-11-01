import React from 'react';
import styles from "./styles/FeatureRow.module.css";
import NavbarSecondary from './NavbarSecondary';
import SidebarFixed from './SidebarFixed';
import sect_bg from "../assets/sec_bg.mp4"

const FeatureRow = ({ head, text, count, img }) => {
    return (
        <div style={{
            position: "sticky",
            top: 0,
        }}>
            <video src={sect_bg} autoPlay={true} loop={true} muted={true} controls={false} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 10, mixBlendMode: "difference", pointerEvents: "none", opacity: .3 }}></video>
            <div className={styles.container}>
                <NavbarSecondary />
                <SidebarFixed />
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <h2 data-feature={count}>{head}</h2>
                        <p>{text}</p>
                    </div>
                    <div className={styles.extra}></div>
                    <div className={styles.right}>
                        <img src={img} alt={head} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureRow;