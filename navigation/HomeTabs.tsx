import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@react-native-vector-icons/ionicons';

import ShoesListTab from '../screens/ShoesListTab';
import FavoritesTab from '../screens/FavoritesTab';
import ProfileTab from '../screens/ProfileTab';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Shoes List" component={ShoesListTab} options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons color={color} size={size} name="home" />
        )
      }}/>
      <Tab.Screen name="Favorites" component={FavoritesTab} options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons color={color} size={size} name="star" />
        )
      }}/>
      <Tab.Screen name="Profile" component={ProfileTab} options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons color={color} size={size} name="person" />
        )
      }}/>
    </Tab.Navigator>
  );
}
