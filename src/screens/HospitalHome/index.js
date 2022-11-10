import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HospitalBloodCall from '../HospitalBloodCall';

const HospitalHomeStack = createNativeStackNavigator();

const HospitalHome = () => {
  return (
    <HospitalHomeStack.Navigator initialRouteName="AddPost">
      <HospitalHomeStack.Screen
        name="AddPost"
        component={HospitalBloodCall}
        options={{
          headerShown: false,
        }}
      />
    </HospitalHomeStack.Navigator>
  );
};

export default HospitalHome;
