import React from 'react';
import HomeScreen from '../screens/Home';
import Profile from '../screens/Profile';
import ChatScreen from '../screens/Chat';
import Notifications from '../screens/Notifications';
import Settings from '../screens/Settings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image, StyleSheet } from 'react-native';
export const NavBarButtons = [
  {
    name: 'Home',
    title: 'Trang Chủ',
    component: HomeScreen,
    icon: ({ color, size }) => (
      <MaterialCommunityIcons name="home" color={color} size={size} />
      // <Image
      //   source={require('../assets/navHome.png')}
      //   style={styles.img}
      //   // style={{ height: '70%', resizeMode: 'stretch' }}
      // />
    ),
  },
  {
    name: 'Profile',
    title: 'Hồ Sơ',
    component: Profile,
    icon: ({ color, size }) => (
      <MaterialCommunityIcons
        name="face-man-profile"
        color={color}
        size={size}
      />
    ),
  },
  {
    name: 'Chat',
    title: 'Trợ Lý',
    component: ChatScreen,
    icon: ({ color, size }) => (
      <MaterialCommunityIcons name="chat" color={color} size={size} />
      // <Image
      //   source={require('../assets/navAssistant.png')}
      //   style={{ width: 50, height: 50, position: 'absolute', top: -15 }}
      // />
    ),
  },
  {
    name: 'Notifications',
    title: 'Thông Báo',
    component: Notifications,
    icon: ({ color, size }) => (
      <MaterialCommunityIcons
        name="notification-clear-all"
        color={color}
        size={size}
      />
      // <Image source={require('../assets/navNoti.png')} style={styles.img} />
    ),
  },
  {
    name: 'Settings',
    title: 'Cài Đặt',
    component: Settings,
    icon: ({ color, size }) => (
      // <Image source={require('../assets/navSetting.png')} style={styles.img} />
      <MaterialCommunityIcons
        name="application-settings"
        color={color}
        size={size}
      />
    ),
  },
];

const styles = StyleSheet.create({
  img: {
    width: 30,
    height: 30,
  },
});
