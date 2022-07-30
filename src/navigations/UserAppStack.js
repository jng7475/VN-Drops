import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavBarButtons } from '../utilities/NavBarDetails';

const Tab = createBottomTabNavigator();

// Screens Tab for App
const UserAppStack = () => {
  const navBarButtons = NavBarButtons.map((button, index) => {
    return (
      <Tab.Screen
        key={index}
        name={button.name}
        component={button.component}
        options={{
          headerShown: false,
          tabBarLabel: button.title,
          tabBarLabelStyle: { fontFamily: 'HindMadurai-Medium', fontSize: 12 },
          tabBarIcon: button.icon,
        }}
      />
    );
  });

  return <Tab.Navigator initialRouteName="Home">{navBarButtons}</Tab.Navigator>;
};

export default UserAppStack;
