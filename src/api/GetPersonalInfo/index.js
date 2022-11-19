import { View, Text } from 'react-native';
import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';

export const getPersonalInfo = async () => {
  const currentUserID = firebase.auth().currentUser?.uid;
  let personalInfo = [];
  await firestore()
    .collection('users')
    .doc(currentUserID)
    .collection('details')
    .doc(currentUserID)
    .get()
    .then(querySnapshot => {
      const data = querySnapshot.data();
      personalInfo = data;
    });
  console.log(personalInfo);
  return personalInfo;
};
