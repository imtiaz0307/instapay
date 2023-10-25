import React from 'react'
import Home from './components/Home'
import FeatureRow from './components/FeatureRow'
import { featuresData } from './data/FeaturesData'
import FeatureTwo from './components/FeatureTwo'
import styles from "./App.module.css"
import Summarized from './components/Summarized'

const App = () => {
  return (
    <main style={{ overflowX: "hidden" }}>
      <Home />
      <div className={styles.main}>
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
      </div>
      <Summarized />
    </main>
  )
}

export default App