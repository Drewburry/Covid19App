import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/Home';
import Stats from './Screens/Stats';
import Symptoms from './Screens/Symptoms';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Stats" component={Stats} />
        <Drawer.Screen name="Symptoms" component={Symptoms} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}