import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  Dimensions,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { setCurrentAddress } from '../../api/SetCurrentAddress';
import { getCurrentAddress } from '../../api/GetCurrentAddress';
import firebase from 'firebase/app';
import 'firebase/database';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Settings = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [realDistance, setRealDistance] = useState(0);
  const [thisAddress, setThisAddress] = useState({});
  const [otherAddress, setOtherAddress] = useState({});
  const [fakeState, setFakeState] = useState(0);
  const [error, setError] = useState(null);
  const [mapRegion, setMapRegion] = useState({});


  const checkLocationPermission = async () => {
    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    return hasPermission;
  };

  const requestLocationPermission = async () => {
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

  const calculateDistance = async (thisAddressPara, otherAddressPara) => {
    console.log('dang calculae');
    console.log(thisAddress, otherAddress);
    const haversine = (latitude1, longitude1, latitude2, longitude2) => {
      const earthRadius = 6371; // in km
      const latDiff = toRad(latitude2 - latitude1);
      const lonDiff = toRad(longitude2 - longitude1);
      const a =
        Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
        Math.cos(toRad(latitude1)) *
          Math.cos(toRad(latitude2)) *
          Math.sin(lonDiff / 2) *
          Math.sin(lonDiff / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = earthRadius * c;
      return distance; // in km
    };

    const toRad = value => {
      return (value * Math.PI) / 180;
    };

    // Example usage:
    const distance = await haversine(
      thisAddressPara.latitude, // latitude1
      thisAddressPara.longitude, // longitude1
      otherAddressPara.latitude, // latitude2
      otherAddressPara.longitude, // longitude2
    );
    // console.log(thisAddress.latitude);
    // console.log(thisAddress.longitude);
    // console.log(otherAddress.latitude);
    // console.log(otherAddress.longitude);
    return distance;
  };

  const getLocation = async () => {
    console.log('Getting location...');
    const hasPermission = await checkLocationPermission();
    if (!hasPermission) {
      console.log('Location permission not granted, requesting...');
      await requestLocationPermission();
      return;
    }
    Geolocation.getCurrentPosition(
      async position => {
        console.log('Location found');
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setError(null);
        await setCurrentAddress(latitude, longitude);
        console.log('set latitude', latitude, longitude);
        setThisAddress(await getCurrentAddress());
        console.log('this address', thisAddress);
        setOtherAddress(
          await getCurrentAddress('R7QEaaDy5RV26wi4vE5U9FqHar82'),
        );
        console.log('other address', otherAddress);
        setRealDistance(
          await (await calculateDistance(thisAddress, otherAddress)).toFixed(2),
        );
        setMapRegion({
          latitude: latitude,
          longitude: longitude,
        });
        console.log('map region: ', mapRegion);
        console.log('real distance: ', realDistance);
      },
      error => {
        console.log('Error getting location', error);
        setError(error.message);
        getLocation();
      },
      {
        enableHighAccuracy: false,
        timeout: 20000,
        maximumAge: 10000,
      },
    );
  };

  useEffect(() => {
    getLocation();
    const timer = setTimeout(
      () => setFakeState(prevState => prevState + 1),
      10000,
    );
    return () => clearTimeout(timer);
  }, [fakeState]);

  // const MapScreen = () => {
  //   return (
  //     <View style={styles.container}>
  //       <MapView
  //         style={styles.map}
  //         initialRegion={{
  //           latitude: (thisAddress.latitude + otherAddress.latitude) / 2,
  //           longitude: (thisAddress.longitude + otherAddress.longitude) / 2,
  //           latitudeDelta: Math.abs(thisAddress.latitude - otherAddress.latitude) + 0.01,
  //           longitudeDelta: Math.abs(thisAddress.longitude - otherAddress.longitude) + 0.01,
  //         }}
  //       >
  //         <MapView.Marker
  //           coordinate={{
  //             latitude: thisAddress.latitude,
  //             longitude: thisAddress.longitude,
  //           }}
  //           title={'This Location'}
  //         />
  //         <MapView.Marker
  //           coordinate={{
  //             latitude: otherAddress.latitude,
  //             longitude: otherAddress.longitude,
  //           }}
  //           title={'Other Location'}
  //         />
  //         <MapView.Polyline
  //           coordinates={[
  //             {
  //               latitude: thisAddress.latitude,
  //               longitude: thisAddress.longitude,
  //             },
  //             {
  //               latitude: otherAddress.latitude,
  //               longitude: otherAddress.longitude,
  //             },
  //           ]}
  //           strokeWidth={2}
  //           strokeColor="red"
  //         />
  //       </MapView>
  //     </View>
  //   );
  // };

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <>
          {/* <MapView
            style={styles.map}
            initialRegion={{
              // latitude: (thisAddress.latitude + otherAddress.latitude) / 2,
              // longitude: (thisAddress.longitude + otherAddress.longitude) / 2,
              latitude: 0.1,
              longitude: 0.1,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}>
            <Marker
              coordinate={{
                latitude: otherAddress.latitude,
                longitude: otherAddress.longitude,
              }}
            />
            <MapView.Polyline
              coordinates={[
                {
                  latitude: thisAddress.latitude,
                  longitude: thisAddress.longitude,
                },
                {
                  latitude: otherAddress.latitude,
                  longitude: otherAddress.longitude,
                },
              ]}
              strokeWidth={2}
              strokeColor="red"
            />
          </MapView> */}

          <Text style={styles.text}>Latitude: {latitude}</Text>
          <Text style={styles.text}>Longitude: {longitude}</Text>
          <Text>Distance = {realDistance} km</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  errorText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default Settings;
