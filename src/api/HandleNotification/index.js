import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';

export const GetNoti = async () => {
  const list = [];
  await firestore()
    .collection('notification')
    .get()
    .then(querySnapShot => {
      querySnapShot.forEach(element => {
        const { day, place, address } = element.data();
        list.push({ day: day, place: place, address: address });
      });
    });
  return list;
};

export const PushNoti = async (day, place, address) => {
  await firestore()
    .collection('notification')
    .add({ day: day, place: place, address: address });
};
