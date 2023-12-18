import React from 'react';
import styles from "./styles/FeatureRow.module.css";
import NavbarSecondary from './NavbarSecondary';
import SidebarFixed from './SidebarFixed';
import ParticlesBg from './ParticlesBg';

const FeatureRow = ({ head, text, count, img }) => {
    return (
        <div className={styles.sticky}>
            <ParticlesBg />
            <div className={styles.container}>
                <div className={styles.nav}>
                    <NavbarSecondary />
                </div>
                <SidebarFixed featureText={"Affiliation Program"} color="#fff" />
                {/* <SidebarFixed featureText={`${count} Features`} /> */}
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

                <div className={styles.mobile_wrapper}>
                    <div className={styles.m_top}>
                        <img src={img} alt={head} />
                    </div>
                    <div className={styles.m_bottom}>
                        <h2 data-feature={count}>{head}</h2>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureRow;