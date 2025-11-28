/**
 * AssignmentTwo App Root
 * @format
 *
 * Main entry point of the Shoes app.
 * Sets up the navigation structure using a drawer navigator that contains:
 * - Home: Bottom tab navigation with Shoes List, Favorites, and Profile
 * - About: Information about the app and company
 * - Contact: Support contact information
 */

// Required for gesture handling in React Navigation
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomeTabs from './navigation/HomeTabs';
import AboutScreen from './navigation/AboutScreen';
import ContactScreen from './navigation/ContactScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';

// Create the drawer navigator instance
const Drawer = createDrawerNavigator();

/**
 * App Component
 *
 * Root component that wraps the entire app in a NavigationContainer
 * and sets up drawer navigation with three main screens.
 */
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name="Home" component={HomeTabs} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Contact" component={ContactScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
