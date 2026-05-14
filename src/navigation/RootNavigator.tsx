import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import MeCardCreationScreen from '../screens/MeCardCreationScreen';
import Screen3Placeholder from '../screens/Screen3Placeholder';
import TabNavigator from './TabNavigator';

export type RootStackParamList = {
  Welcome: undefined;
  MeCardCreation: undefined;
  Screen3: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="MeCardCreation" component={MeCardCreationScreen} />
        <Stack.Screen name="Screen3" component={Screen3Placeholder} />
        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
