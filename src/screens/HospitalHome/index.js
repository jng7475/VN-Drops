import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HospitalBloodCall from '../HospitalBloodCall';
import HospitalMainHome from '../HosMainHome';
import HosManage from '../HosManage';
import HosSchedule from '../HosSchedule';

const HospitalHomeStack = createNativeStackNavigator();

const HospitalHome = () => {
  return (
    <HospitalHomeStack.Navigator initialRouteName="HospitalMainHome">
      <HospitalHomeStack.Screen
        name="HospitalMainHome"
        component={HospitalMainHome}
        options={{
          headerShown: false,
        }}
      />
      <HospitalHomeStack.Screen
        name="HospitalBloodCall"
        component={HospitalBloodCall}
        options={{
          headerShown: false,
        }}
      />
      <HospitalHomeStack.Screen
        name="HosManage"
        component={HosManage}
        options={{
          headerShown: false,
        }}
      />
      <HospitalHomeStack.Screen
        name="HosSchedule"
        component={HosSchedule}
        options={{
          headerShown: false,
        }}
      />
    </HospitalHomeStack.Navigator>
  );
};

export default HospitalHome;
