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
        name="Kêu gọi khẩn cấp"
        component={HospitalBloodCall}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: '#fff',
        }}
      />
      {/* <HospitalHomeStack.Screen
        name="HosManage"
        component={HosManage}
        options={{
          title: 'DANH SÁCH ĐĂNG KÝ HIẾN MÁU',
          headerShown: true,
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: '#fff',
        }}
      /> */}
      <HospitalHomeStack.Screen
        name="HosSchedule"
        component={HosSchedule}
        options={{
          title: 'TẠO LỊCH HIẾN MÁU',
          headerShown: true,
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: '#fff',
        }}
      />
    </HospitalHomeStack.Navigator>
  );
};

export default HospitalHome;
