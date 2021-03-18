import React, { useState } from 'react';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import { HomeStack } from './routes/HomeStack';

const getFonts = () => Font.loadAsync({
  'nunito-regular': 'https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap'
})

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  return fontsLoaded
    ? <HomeStack />
    : <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(e) => console.log(e)}
      />
}