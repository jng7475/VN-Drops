import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AddPost from '../AddPost';

const HospitalHomeStack = createNativeStackNavigator();

const HospitalHome = () => {
  return (
    <HospitalHomeStack.Navigator initialRouteName="AddPost">
      <HospitalHomeStack.Screen
        name="AddPost"
        component={AddPost}
        options={{
          headerShown: false,
        }}
      />
    </HospitalHomeStack.Navigator>
  );
};

export default HospitalHome;
