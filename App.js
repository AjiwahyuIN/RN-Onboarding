import React, { useState } from 'react'
import { View, Text } from 'react-native'
import OnBoarding from './src/containers/pages/onBoarding'
import Home from './src/containers/pages/Home'

const App = () => {
  const [showOnboard, setShowOnboard] = useState(true)

  const handleOnboardFinish = () => {
    setShowOnboard(false)
  }
  return (
    <>
    {showOnboard && <OnBoarding handleDone={handleOnboardFinish}/>}
    {!showOnboard && <Home/>}
    </>
  )
}

export default App
