import React from 'react';

import { useScreens } from 'react-native-screens';

import { AppNavigator } from './src/navigators';

useScreens();

function App() {
  return (
    <AppNavigator />
  )
}

export default App;