import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/HomeScreen';
import SteganographyScreen from './components/SteganographyScreen';
import DecodeScreen from './components/DecodeScreen';
import ImagePickerScreen from './components/ImagePickerScreen';
import ImagePickerWithHidScreen from './components/ImagePickerWithHidScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false  }} />
        <Stack.Screen name="Steganography" component={SteganographyScreen} options={{ headerShown: false  }}/>
        <Stack.Screen name="Decode" component={DecodeScreen} options={{ headerShown: false  }}  />
        <Stack.Screen name="ImagePicker" component={ImagePickerScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ImagePickerWith" component={ImagePickerWithHidScreen} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
