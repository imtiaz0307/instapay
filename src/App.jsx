import React, { useEffect, useRef, useState } from 'react'
import Home from './components/Home'
import FeatureRow from './components/FeatureRow'
import { featuresData } from './data/FeaturesData'
import FeatureTwo from './components/FeatureTwo'
import styles from "./App.module.css"
import Summarized from './components/Summarized'
import Footer from './components/Footer'

const App = () => {
  const [showFixedImages, setShowFixedImages] = useState(false)
  const mainRef = useRef(null)

  const windowScrollHandler = () => {
    const height = window.innerHeight;
    const scrollY = mainRef.current.scrollTop;
    if (scrollY >= height - 300) {
      if (scrollY >= (height * 2)) {
        setShowFixedImages(false)
      } else {
        setShowFixedImages(true)
      }
    } else {
      setShowFixedImages(false)
    }
  }

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.addEventListener("scroll", windowScrollHandler)
    }
    return () => {
      if (mainRef.current) {
        mainRef.current.removeEventListener("scroll", windowScrollHandler)
      }
    }
  }, [])
  return (
    <main style={{ overflowX: "hidden", maxHeight: "100vh", overflowY: "auto" }} ref={mainRef}>
      <Home showFixedImages={showFixedImages} />
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
      <Footer />
    </main>
  )
}

export default App