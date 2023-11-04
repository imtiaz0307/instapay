import React from 'react'
import sect_bg from "../assets/sec_bg.mp4"
import sec_bg from "../assets/sect_bg.png"

const ParticlesBg = () => {
    return (
        <>
            <video src={sect_bg} autoPlay={true} loop={true} muted={true} controls={false} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 9, mixBlendMode: "difference", pointerEvents: "none", opacity: .3 }}></video>
            <img src={sec_bg} alt="bg" style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                position: "absolute",
                top: "0",
                left: "0",
                zIndex: 1
            }} />
        </>
    )
}

export default ParticlesBg