import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen1 from './screen1';
import Screen2 from './screen2';
import Screen3 from './screen3';
import Output from './output';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Screen1"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Screen1"
          component={Screen1}
        />

        <Stack.Screen
          name="Screen2"
          component={Screen2}
        />

        <Stack.Screen
          name="Screen3"
          component={Screen3}
        />

        <Stack.Screen
          name="Output"
          component={Output}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}