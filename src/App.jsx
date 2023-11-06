import Home from './components/Home'
import FeatureRow from './components/FeatureRow'
import { featuresData } from './data/FeaturesData'
import FeatureTwo from './components/FeatureTwo'
import styles from "./App.module.css"
import Summarized from './components/Summarized'
import Footer from './components/Footer'
import AnimatedSection from './components/AnimatedSection'
import { useAppState } from './context/AppContext'
import Loader from './components/Loader'
import { useEffect, useState } from 'react'

const App = () => {
  const { mainRef } = useAppState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const toggleLoad = () => {
      console.log("loaded")
      setLoading(false);
    }

    window.addEventListener("load", toggleLoad);

    return () => window.removeEventListener("load", toggleLoad);
  }, []);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(loaderTimeout);
  }, []);


  return (
    <main ref={mainRef}>
      <Loader loading={loading} />
      <Home />
      <AnimatedSection />
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