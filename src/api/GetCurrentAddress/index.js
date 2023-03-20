import firestore, { firebase } from '@react-native-firebase/firestore';
import { useState } from 'react';

export const getCurrentAddress = async userID => {
  const currentUserID = userID || (await firebase.auth().currentUser?.uid);
  let currentAddress = {};
  await firestore()
    .collection('users')
    .doc(currentUserID)
    .collection('details')
    .doc(currentUserID)
    .get()
    .then(doc => {
      currentAddress = doc.data();
      console.log('get this address: ', currentUserID);
    });
  console.log(currentAddress.currentAddress);
  return currentAddress.currentAddress;
};
