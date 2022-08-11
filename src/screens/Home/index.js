import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MainHomeScreen from './MainHome/index';
import Appointment from './Appointment';
import Activity from './Activity';
import Achievement from './Achievement';
import Nearby from './Nearby';
import UpdateInfo from './UpdateInfo';
import { headerStyle, getHeaderOptions } from './styles';

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
        options={getHeaderOptions('Đặt Lịch')}
      />
      <HomeStack.Screen
        name="UpdateInfo"
        component={UpdateInfo}
        options={getHeaderOptions('Cập Nhật Thông Tin')}
      />
      <HomeStack.Screen
        name="Activity"
        component={Activity}
        options={getHeaderOptions('Hoạt Động')}
      />
      <HomeStack.Screen
        name="Nearby"
        component={Nearby}
        options={{
          headerStyle: headerStyle,
        }}
      />
      <HomeStack.Screen
        name="Achievement"
        component={Achievement}
        options={getHeaderOptions('Thành Tích')}
      />
    </HomeStack.Navigator>
  );
};

export default HomeScreen;
