

import React from 'react';
import * as reactNative from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import ShoppingCartScreen from './src/screens/ShoppingCartScreen';
// import TestScreen from './src/screens/TestScreen';



function App(): JSX.Element {
  const isDarkMode = reactNative.useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <reactNative.SafeAreaView style={backgroundStyle}>
      <reactNative.StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* <HomeScreen /> */}
      {/* <ProductScreen /> */}
      <ShoppingCartScreen />
      {/* <TestScreen /> */}

 
    </reactNative.SafeAreaView>
  );
}


export default App;
