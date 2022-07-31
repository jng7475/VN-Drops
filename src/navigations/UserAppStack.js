import React, { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import { postFCMToken } from '../api/SaveFCMToken';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavBarButtons } from '../utilities/UserAppDetails';

const Tab = createBottomTabNavigator();

// Screens Tab for App
const UserAppStack = () => {
  useEffect(() => {
    // Get the device token
    messaging()
      .getToken()
      .then(token => {
        console.log('tk', token);
        return postFCMToken(token);
      })
      .catch(err => {
        console.log(err);
      });

    // Listen to whether the token changes
    return messaging().onTokenRefresh(token => {
      postFCMToken(token);
    });
  }, []);

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
