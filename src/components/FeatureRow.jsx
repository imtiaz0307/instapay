import React from 'react';
import styles from "./styles/FeatureRow.module.css";
import NavbarSecondary from './NavbarSecondary';
import SidebarFixed from './SidebarFixed';
import ParticlesBg from './ParticlesBg';

const FeatureRow = ({ head, text, count, img }) => {
    return (
        <div style={{
            position: "sticky",
            top: 0,
        }}>
            <ParticlesBg />
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