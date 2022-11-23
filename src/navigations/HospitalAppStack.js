import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HospitalAppDetails } from '../utilities/HospitalAppDetails';
import messaging from '@react-native-firebase/messaging';
import { saveHospitalFCMToken } from '../api/FCMTokenCRUD';
const Tab = createBottomTabNavigator();

// Screens Tab for App
const HospitalAppStack = () => {
  useEffect(() => {
    // Get the device token
    messaging()
      .getToken()
      .then(token => {
        return saveHospitalFCMToken(token);
      })
      .catch(err => {
        console.log(err);
      });

    // Listen to whether the token changes
    return messaging().onTokenRefresh(token => {
      saveHospitalFCMToken(token);
    });
  }, []);
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      const message =
        remoteMessage.notification.body +
        '\nVui lòng vào tính năng Quản lý hiến máu SOS để có thêm thông tin!';
      Alert.alert(remoteMessage.notification.title, message);
    });

    return unsubscribe;
  }, []);
  const navBarButtons = HospitalAppDetails.map((button, index) => {
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

export default HospitalAppStack;
