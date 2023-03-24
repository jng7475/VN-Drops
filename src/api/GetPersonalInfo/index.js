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

export const getUserStatus = async () => {
  const currentUserID = firebase.auth().currentUser?.uid;
  let status = '';
  await firestore()
    .collection('users')
    .doc(currentUserID)
    .get()
    .then(documentSnapshot => {
      const data = documentSnapshot.data();
      // console.log(data.userDetails);
      status = data.status;
      // console.log(status);
      // personalInfo = data.userDetails;
    });
  return status;
};

export const setUserStatus = async status => {
  const currentUserID = firebase.auth().currentUser?.uid;
  await firestore()
    .collection('users')
    .doc(currentUserID)
    .update({ status: status });
};


export const getUserReady = async () => {
  const currentUserID = firebase.auth().currentUser?.uid;
  let ready = '';
  await firestore()
    .collection('users')
    .doc(currentUserID)
    .get()
    .then(documentSnapshot => {
      const data = documentSnapshot.data();
      // console.log(data.userDetails);
      ready = data.ready;
      // console.log(status);
      // personalInfo = data.userDetails;
    });
  return ready;
};

export const setUserReady = async ready => {
  const currentUserID = firebase.auth().currentUser?.uid;
  await firestore()
    .collection('users')
    .doc(currentUserID)
    .set({ ready: ready });
};
