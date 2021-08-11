import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../Screens/HomeScreen';
import AccountScreen from '../Screens/AccountScreen';

export default function AppNavigator() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="AccountScreen" component={AccountScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}