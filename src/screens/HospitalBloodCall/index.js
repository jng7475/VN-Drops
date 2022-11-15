import React, { useState, useEffect } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
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
        name="Step1"
        component={Step1}
        options={{
          headerShown: false,
        }}
      />
      <SosScreensStack.Screen
        name="Step2"
        component={Step2}
        options={{
          headerShown: false,
        }}
      />
    </SosScreensStack.Navigator>
  );
};

export default HospitalBloodCall;
