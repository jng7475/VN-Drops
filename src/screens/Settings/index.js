import React, { useState, useEffect, useRef } from 'react';
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
import calculateDistance from './component/calculate distance';
// import { GOOGLE_MAPS_API_KEY } from 'AIzaSyDgl-pa-w1OaOI1AyA1L0lD2BUK6jsdjHI';
import decodePolyline from './component/DecodePolyline';
import {
  checkLocationPermission,
  requestLocationPermission,
} from './component/Permission';
import styles from './styles';
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  Polyline,
  Polygon,
  Callout,
  Circle,
} from 'react-native-maps';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Settings = () => {
  const [reload, setReload] = useState(false);

  const handleScroll = event => {
    const scrollPosition = event.nativeEvent.contentOffset.y;
    if (scrollPosition === 0) {
      setReload(true);
    }
  };

  const reloadPage = () => {
    setReload(false);
    // Reload the entire page here
  };

  const mapRef = useRef(null);
  const handleMapReady = () => {
    setTimeout(() => {
      mapRef.current.animateToRegion(
        {
          // latitude: 16.0393,
          // longitude: 108.21083,
          latitude: vinmec.latitude,
          longitude: vinmec.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        },
        1000,
      );
    }, 100);
  };
  const [LeQuyDon, setLeQuyDon] = useState({
    latitude: 16.0580833,
    longitude: 108.2331667,
  });
  const [vinmec, setVinmec] = useState({
    latitude: 16.0393,
    longitude: 108.21083,
  });
  const [latitude, setLatitude] = useState(16.0864264);
  const [longitude, setLongitude] = useState(108.217872);
  const [realDistance, setRealDistance] = useState(0);
  const [thisAddress, setThisAddress] = useState({
    latitude: 16.0864264,
    longitude: 108.217872,
  });
  const [otherAddress, setOtherAddress] = useState({
    latitude: 16.0611,
    longitude: 108.2275,
  });
  const [fakeState, setFakeState] = useState(0);
  const [error, setError] = useState(null);
  const [mapRegion, setMapRegion] = useState({});
  const apiKey = 'AIzaSyDonNe-3qgfpJa2fy5BZB7Nc0lTnp26yiw';
  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${thisAddress.latitude},${thisAddress.longitude}&destination=${otherAddress.latitude},${otherAddress.longitude}&key=${apiKey}`;

  const [route, setRoute] = useState([
    { latitude: thisAddress.latitude, longitude: thisAddress.longitude },
    { latitude: 16.0393, longitude: 108.21083 },
  ]);

  const coordinates = [
    // { latitude: 16.0864264, longitude: 108.217872 },
    // { latitude: 16.0611, longitude: 108.2275 },
    // { latitude: thisAddress.latitude, longitude: thisAddress.longitude }, //current location
    { latitude: 16.0393, longitude: 108.21083 }, //vinmec
    { latitude: 16.0580833, longitude: 108.2331667 }, //le quy don
  ];
  const [region, setRegion] = useState({
    // latitude: 37.78825,
    // longitude: -122.4324,
    latitude: 16.0788,
    longitude: 108.2197,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

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
        await setLatitude(position.coords.latitude);
        await setLongitude(position.coords.longitude);
        setError(null);
        await setCurrentAddress(latitude, longitude);
        setThisAddress(await getCurrentAddress());
        // setOtherAddress(
        //   await getCurrentAddress('R7QEaaDy5RV26wi4vE5U9FqHar82'),
        // );
        // console.log('other address', otherAddress);
        setRealDistance(
          await (await calculateDistance(thisAddress, otherAddress)).toFixed(2),
        );
        console.log('real distance: ', realDistance);
      },
      error => {
        console.log('Error getting location', error);
        setError(error.message);
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

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <View style={{ height: '100%', width: '100%' }} onScroll={handleScroll}>
          <MapView
            scrollEventThrottle={16}
            ref={mapRef}
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            showsUserLocation={true}
            initialRegion={{
              latitude: vinmec.latitude,
              longitude: vinmec.longitude,
              // latitude: 20.9962,
              // longitude: 105.8669,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onMapReady={handleMapReady}>
            <Marker
              coordinate={{
                latitude: thisAddress.latitude, //le quy don
                longitude: thisAddress.longitude,
              }}
              title={'Le quy don'}>
              {/* <Callout>
                <Text>'Vị trí của bạn'</Text>
              </Callout> */}
            </Marker>
            <Marker
              coordinate={{
                latitude: vinmec.latitude,
                longitude: vinmec.longitude,
              }}
              title={'Bệnh viện cần máu'}></Marker>
            <Circle
              center={{
                latitude: (thisAddress.latitude + vinmec.latitude) / 2,
                longitude: (thisAddress.longitude + vinmec.longitude) / 2,
              }}
              radius={parseInt(realDistance) * 1000}
              fillColor="rgba(0, 92, 255, 0.1)"
              strokeColor="rgba(0, 92, 255, 0.3)"
              strokeWidth={2}
            />

            {/* <Polyline
              coordinates={coordinates}
              strokeColor="blue" // fallback for when `strokeColors` is not supported by the map-provider
              strokeWidth={6}
            /> */}
            {/* <Polyline coordinates={route} strokeColor="green" strokeWidth={6} /> */}
          </MapView>

          <Text style={styles.text}>Latitude: {latitude}</Text>
          <Text style={styles.text}>Longitude: {longitude}</Text>
          <Text>Distance = {realDistance} km</Text>
        </View>
      )}
    </View>
  );
};

export default Settings;
