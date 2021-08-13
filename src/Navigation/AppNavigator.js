import React, { useContext } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountScreen from '../Screens/AccountScreen';
import CameraScreen from '../Screens/CameraScreen';
import HomeScreen from '../Screens/HomeScreen';
import Constants from '../Constants/Constants';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
      <Tab.Navigator screenOptions={{tabBarActiveTintColor: Constants.styles.brandOrange, headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={CameraScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="camera" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
