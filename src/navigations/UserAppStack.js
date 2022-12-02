import React, { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';
import { postFCMToken } from '../api/FCMTokenCRUD';
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

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      const message =
        remoteMessage.notification.body +
        '\nVui lòng vào tính năng hiến máu khẩn cấp để có thêm thông tin!';
      Alert.alert(remoteMessage.notification.title, message);
    });

    return unsubscribe;
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
          tabBarLabelStyle: { fontFamily: 'RobotoSlab-Medium', fontSize: 12 },
          tabBarIcon: button.icon,
          tabBarStyle: {
            height: '7%',
          },
        }}
      />
    );
  });

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarHideOnKeyboard: true }}>
      {navBarButtons}
    </Tab.Navigator>
  );
};

export default UserAppStack;
