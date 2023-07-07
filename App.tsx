/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */


import React from 'react';
import * as reactNative from 'react-native';
// import 'react-native-gesture-handler';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import TestScreen from './src/screens/TestScreen';

import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import ShoppingCartScreen from './src/screens/ShoppingCartScreen';
import AddressScreen from './src/screens/AddressScreen';
import MoreScreen from './src/screens/TestScreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from 'react-native-paper';


const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Product' component={ProductScreen} />
    </Stack.Navigator>
  );
};

const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Cart' component={ShoppingCartScreen} />
      <Stack.Screen name='Address' component={AddressScreen} />
    </Stack.Navigator>
  );
};

function App(): JSX.Element {
  const isDarkMode = reactNative.useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const Tabs = createMaterialBottomTabNavigator();


  return (
    // <reactNative.SafeAreaView style={backgroundStyle}>
    //   <reactNative.StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //     style={reactNative.Platform.OS ? '' : 'auto'}
    //   />

    <NavigationContainer>
      <Tabs.Navigator
         initialRouteName='CartStack'
         activeColor='red'
         inactiveColor='green'
         >
        <Tabs.Screen name='HomeStack' component={HomeStack} 
        options={{
          tabBarIcon:({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          tabBarLabel:'Home',
        }}
        />
        <Tabs.Screen name='Profile' component={ShoppingCartScreen} 
        options={{
          tabBarIcon:({color})=>(<MaterialCommunityIcons name='account' size={26} color={color} />),
        }}
        />
        <Tabs.Screen name='CartStack' component={CartStack}
        options={{
          tabBarIcon:({color})=>(<MaterialCommunityIcons name='cart' size={26} color={color} />),
          tabBarBadge:10,
          tabBarLabel:'Cart',
        }} />
        <Tabs.Screen name='More' component={MoreScreen}
        options={{
          tabBarIcon:({color})=>(<MaterialCommunityIcons name='more' size={26} color={color} />),
        }} />
      </Tabs.Navigator>
    </NavigationContainer>


    // </reactNative.SafeAreaView>
  );
}


export default App;
