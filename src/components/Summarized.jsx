import React from 'react';
import Navbar from './Navbar';
import SidebarFixed from './SidebarFixed';
import styles from './styles/Summarized.module.css';
import globe from '../assets/globe.mp4';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";

const Summarized = () => {
    // Example fintech-related data
    const fintechData = [
        {
            title: 'Registration and KYC',
            description: `"Joining our community? It's as simple as ABC!"`,
        },
        {
            title: 'Providing Payout Details',
            description: `Share your preferred payment details, be it a bank account, card details, or a registered mobile number for mobile wallets. No actual 'linking'— just straight-up information provision for smoother transactions!`,
        },
        {
            title: 'Sending and Receiving Payments',
            description: 'Tap, transact, and take the lead. Seamless payments right at your fingertips!',
        },
        {
            title: 'Depositing Into Your InstaPay Wallet',
            description: `Multiple pathways for your convenience— whether you're topping up from payment cards, direct bank transfers, mobile wallets, or even PayPal. We've got you covered`,
        },
        {
            title: 'Withdrawing Your Funds',
            description: `Ready to cash out? Choose from a plethora of channels like bank transfers, payment cards, mobile wallets, PayPal, your crypto wallet or even direct cash pick-up. Your money, your method!`,
        },
    ];

    return (
        <div style={{ minHeight: '100vh', position: 'relative', zIndex: 100, background: 'white', width: '100vw' }}>
            <Navbar showPlay={false} />
            <SidebarFixed />
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <h3>HOW IT WORKS</h3>
                    <h2>
                        Simplicity in Every Step. <br />
                        Experience the <span>InstaPay</span> Way!
                    </h2>
                    <div className={styles.timeline}>
                        <VerticalTimeline layout={"1-column"}>
                            {fintechData.map((item, index) => (
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--education"
                                    key={index}
                                    iconStyle={{
                                        background: '#5926f0',
                                        color: '#fff',
                                        height: "22px",
                                        width: "22px",
                                        transform: "translateX(10px)"
                                    }}
                                    contentStyle={{
                                        background: "transparent",
                                        boxShadow: "none",
                                        border: "none",
                                        transform: "translateY(-30px)"
                                    }}
                                >
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <a href="#">Learn more &rarr;</a>
                                </VerticalTimelineElement>
                            ))}
                        </VerticalTimeline>
                    </div>
                </div>
                <div className={styles.right}>
                    <video src={globe} autoPlay="true" loop controls={false}></video>
                </div>
            </div>
        </div>
    );
};

export default Summarized;