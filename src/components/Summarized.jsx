import React from 'react'
import Navbar from './Navbar'
import SidebarFixed from './SidebarFixed'

const Summarized = () => {
    return (
        <>
            <div style={{ minHeight: "100vh", position: "relative", zIndex: 100, background: "white", width: "100vw" }}>
                <Navbar />
                <SidebarFixed />
            </div>
        </>
    )
}

export default Summarized