import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import { Image } from 'react-native';
import ChatScreen from '../screens/Chat';

const Stack = createNativeStackNavigator();

// Screens Stack for App
const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        options={{
          headerLeft: () => {
            () => <Image source={require('../assets/logo.png')} />;
          },
          title: 'My home',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        component={HomeScreen}
      />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
