import React, { useState, useEffect } from 'react';
import SOSForm from './SOSForm';
import SOSManage from './SOSManage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SosScreensStack = createNativeStackNavigator();

const HospitalBloodCall = () => {
  const [confirm, setConfirm] = useState(false);
  // const ScreenAppear = () => {
  //   return confirm === false ? <Step1 /> : <Step2 />;
  // };
  return (
    <SosScreensStack.Navigator>
      <SosScreensStack.Screen
        name="SOSForm"
        component={SOSForm}
        options={{
          headerShown: false,
        }}
      />
      <SosScreensStack.Screen
        name="SOSManage"
        component={SOSManage}
        options={{
          headerShown: false,
        }}
      />
    </SosScreensStack.Navigator>
  );
};

export default HospitalBloodCall;
