import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Step0 from './Step0';
import UserSignup from './UserSignup';
import HospitalSignup from './HospitalSignup';

const SignupStack = createNativeStackNavigator();

const SignUpScreen = () => {
  return (
    <SignupStack.Navigator initialRouteName="Step0">
      <SignupStack.Screen
        name="Step0"
        component={Step0}
        options={{
          headerShown: false,
        }}
      />
      <SignupStack.Screen
        name="UserSignup"
        component={UserSignup}
        options={
          {
            // headerShown: false,
          }
        }
      />
      <SignupStack.Screen
        name="HospitalSignup"
        component={HospitalSignup}
        options={
          {
            // headerShown: false,
          }
        }
      />
    </SignupStack.Navigator>
  );
};

export default SignUpScreen;
