import { StyleSheet, View, Text } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { step3Styles } from '../styles';

const Scanner = React.forwardRef((props, ref) => {
  // get camera permission from user
  useEffect(() => {
    const getCameraPermission = async () => {
      const newCameraPermission = await Camera.requestCameraPermission();
    };
    getCameraPermission();
  });
  // check for device
  const devices = useCameraDevices();
  const device = devices.back;
  // console.log(device);

  if (device == null) {
    console.log('oh no');
    return null;
  }
  return (
    <Camera
      style={step3Styles.camera}
      device={device}
      isActive={true}
      ref={ref}
      photo={true}
    />
  );
});

export default Scanner;
