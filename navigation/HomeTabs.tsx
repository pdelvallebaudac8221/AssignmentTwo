import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ShoesListTab from '../screens/ShoesListTab';
import FavoritesTab from '../screens/FavoritesTab';
import ProfileTab from '../screens/ProfileTab';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Shoes List" component={ShoesListTab} />
      <Tab.Screen name="Favorites" component={FavoritesTab} />
      <Tab.Screen name="Profile" component={ProfileTab} />
    </Tab.Navigator>
  );
}
