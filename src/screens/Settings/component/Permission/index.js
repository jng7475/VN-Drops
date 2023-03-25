import React from 'react';
import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid } from 'react-native';

export const checkLocationPermission = async () => {
  const hasPermission = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );
  return hasPermission;
};

export const requestLocationPermission = async () => {
  try {
    console.log('Requesting location permission...');
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location permission required',
        message:
          'This app needs access to your location to provide location-based services.',
        buttonPositive: 'OK',
        buttonNegative: 'Cancel',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Location permission granted');
    } else {
      console.log('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};
