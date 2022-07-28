import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavBarButtons } from '../utilities/NavBarDetails';

const Tab = createBottomTabNavigator();

// Screens Tab for App
const AppStack = () => {
  const navBarButtons = NavBarButtons.map((button, index) => {
    return (
      <Tab.Screen
        key={index}
        name={button.name}
        component={button.component}
        options={{
          headerShown: false,
          tabBarLabel: button.title,
          tabBarIcon: button.icon,
        }}
      />
    );
  });

  return <Tab.Navigator initialRouteName="Home">{navBarButtons}</Tab.Navigator>;
};

export default AppStack;
