import React, { useEffect, useState } from 'react';
import HospitalAppStack from './HospitalAppStack';
import UserAppStack from './UserAppStack';
import firestore from '@react-native-firebase/firestore';
import { ActivityIndicator, Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';

const AppNavigation = ({ user }) => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const getUserInfo = async () => {
      firestore()
        .collection('users')
        .doc(user.uid)
        .get()
        .then(documentSnapshot => {
          setUserInfo(documentSnapshot.data());
        });
    };
    getUserInfo();
  }, [user]);
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  if (userInfo.accountType === 'user') {
    return <UserAppStack />;
  } else if (userInfo.accountType === 'hospital') {
    return <HospitalAppStack />;
  }
  return <ActivityIndicator size="large" />;
};

export default AppNavigation;
