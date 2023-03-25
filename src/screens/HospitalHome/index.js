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
    <HospitalHomeStack.Navigator
      initialRouteName="HospitalMainHome"
      screenOptions={{
        headerTitleAlign: 'center',
        fontFamily: 'Lato-Bold',
      }}>
      <HospitalHomeStack.Screen
        name="HospitalMainHome"
        component={HospitalMainHome}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#C91414',
          },
        }}
      />
      <HospitalHomeStack.Screen
        name="Kêu gọi khẩn cấp"
        component={HospitalBloodCall}
        options={{
          title: 'KÊU GỌI MÁU KHẨN CẤP',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#C91414',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontFamily: 'Lato-Bold',
            fontSize: 21,
          },
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
            backgroundColor: '#C91414',
          },
          headerTintColor: '#fff',
        }}
      />
    </HospitalHomeStack.Navigator>
  );
};

export default HospitalHome;
