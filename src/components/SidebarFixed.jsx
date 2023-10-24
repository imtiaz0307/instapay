import React from 'react'
import logo from "../assets/logo.png"
import styles from "./styles/SidebarFixed.module.css"

const SidebarFixed = () => {
    return (
        <div className={styles.sidebar}>
            <div>
            </div>
            <div className={styles.img_con}>
                <img src={logo} alt="logo" />
            </div>
            <p>02 Feature</p>
        </div>
    )
}

export default SidebarFixed