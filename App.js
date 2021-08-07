import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthContext from './src/Context/AuthContext'
import HomeScreen from './src/Screens/HomeScreen'
import AccountScreen from './src/Screens/AccountScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState({ firstName: 'TayJay' });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="AccountScreen" component={AccountScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
  );
}
