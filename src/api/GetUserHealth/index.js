import { View, Text } from 'react-native';
import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';

export const getUserHealth = async () => {
  const currentUserID = firebase.auth().currentUser?.uid;
  let userHealth = {};
  await firestore()
    .collection('users')
    .doc(currentUserID)
    .collection('medicalProfile')
    .doc(currentUserID)
    .get()
    .then(querySnapshot => {
      const data = querySnapshot.data();
      userHealth = data;
    });
  return userHealth.result;
};
