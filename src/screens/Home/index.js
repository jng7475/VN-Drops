import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MainHomeScreen from '../MainHome';
import Appointment from '../Appointment';
import Forum from '../Forum';
import Achievement from '../Achievement';

const HomeStack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName="MainHome">
      <HomeStack.Screen
        name="MainHome"
        component={MainHomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Appointment"
        component={Appointment}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Forum"
        component={Forum}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Achievement"
        component={Achievement}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeScreen;
