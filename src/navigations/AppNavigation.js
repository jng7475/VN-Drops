import React, { useEffect, useState } from 'react';
import HospitalAppStack from './HospitalAppStack';
import UserAppStack from './UserAppStack';
import firestore from '@react-native-firebase/firestore';

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

  if (userInfo.accountType === 'user') {
    return <UserAppStack />;
  } else if (userInfo.accountType === 'hospital') {
    return <HospitalAppStack />;
  }
  return null;
};

export default AppNavigation;
