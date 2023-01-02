import { View, Text } from 'react-native';
import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';

export const getUserHealth = async userID => {
  const currentUserID = userID || firebase.auth().currentUser?.uid;
  let medicalInfo = {};
  // await Promise.all(
  await firestore()
    .collection('users')
    .doc(currentUserID)
    .collection('medicalProfile')
    .doc(currentUserID)
    .get()
    .then(documentSnapshot => {
      const data = documentSnapshot.data();
      // console.log(data);
      medicalInfo = data.result;
      // personalInfo = data.userDetails;
    });
  // );
  // console.log(medicalInfo);
  return medicalInfo;
};
