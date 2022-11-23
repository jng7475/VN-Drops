import { View, Text } from 'react-native';
import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';

export const getPersonalInfo = async userID => {
  const currentUserID = userID || firebase.auth().currentUser?.uid;
  let personalInfo = {};
  // await Promise.all(
  await firestore()
    .collection('users')
    .doc(currentUserID)
    .collection('details')
    .doc(currentUserID)
    .get()
    .then(documentSnapshot => {
      const data = documentSnapshot.data();
      // console.log(data.userDetails);
      personalInfo = data.userDetails;
      // personalInfo = data.userDetails;
    });
  // );
  // console.log(personalInfo);
  return personalInfo;
};
