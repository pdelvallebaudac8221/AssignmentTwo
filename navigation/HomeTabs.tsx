import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@react-native-vector-icons/ionicons';

import ShoesListTab from '../screens/ShoesListTab';
import FavoritesTab from '../screens/FavoritesTab';
import ProfileTab from '../screens/ProfileTab';

// Create the bottom tab navigator instance
const Tab = createBottomTabNavigator();

/**
 * HomeTabs Component
 *
 * Bottom tab navigation that serves as the main interface of the app.
 * Contains three tabs:
 * - Shoes List: Browse all available shoes
 * - Favorites: View favorited shoes
 * - Profile: See user statistics (visited shoes count)
 *
 * Each tab has a custom icon from the Ionicons library.
 */
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
