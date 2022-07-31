import React from 'react';
import HospitalHome from '../screens/HospitalHome';
import Profile from '../screens/Profile';
import Notifications from '../screens/Notifications';
import Settings from '../screens/Settings';
import { Image, StyleSheet } from 'react-native';
export const HospitalAppDetails = [
  {
    name: 'Home',
    title: 'Trang Chủ',
    component: HospitalHome,
    icon: ({ color, size }) => (
      // <MaterialCommunityIcons name="home" color={color} size={size} />
      <Image
        source={require('../assets/navHome.png')}
        style={styles.img}
        // style={{ height: '70%', resizeMode: 'stretch' }}
      />
    ),
  },
  {
    name: 'Profile',
    title: 'Hồ Sơ',
    component: Profile,
    icon: ({ color, size }) => (
      <Image source={require('../assets/navProfile.png')} style={styles.img} />
    ),
  },
  {
    name: 'Notifications',
    title: 'Thông Báo',
    component: Notifications,
    icon: ({ color, size }) => (
      <Image source={require('../assets/navNoti.png')} style={styles.img} />
    ),
  },
  {
    name: 'Settings',
    title: 'Cài Đặt',
    component: Settings,
    icon: ({ color, size }) => (
      <Image source={require('../assets/navSetting.png')} style={styles.img} />
    ),
  },
];

const styles = StyleSheet.create({
  img: {
    width: 30,
    height: 30,
  },
});