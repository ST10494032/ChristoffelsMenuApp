import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/context/components/navigation/TabNavigator';
import { MenuProvider } from './src/context/components/context/MenuContext';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <TabNavigator />
      </NavigationContainer>
    </MenuProvider>
  );
}
