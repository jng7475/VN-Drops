import { View, Text } from 'react-native';
import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';

export const getUserHealth = async () => {
  let currentUserID = firebase.auth().currentUser?.uid;
  let userHealth = {};
  await firestore()
    .collection('users')
    .doc(currentUserID)
    .collection('medicalProfile')
    .doc(currentUserID)
    .get()
    .then(async querySnapshot => {
      const data = await querySnapshot.data();
      userHealth = data;
    });
  console.log(userHealth.result);
  console.log(1);
  return userHealth.result;
};
