import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MainSetting from './MainSetting'
import QrCode from './QrCode';

const SettingStack = createNativeStackNavigator();
const Settings = () => {
  return (
    <SettingStack.Navigator initialRouteName='MainSetting'>
      <SettingStack.Screen
        name="MainSetting"
        component={MainSetting} 
        options={{
          headerShown: false,
      
        }}
        />
      <SettingStack.Screen
        name="QrCode"
        component={QrCode} 
        options={{
          headerShown: true,
    
        }}/>

    </SettingStack.Navigator>
  )
}

export default Settings;