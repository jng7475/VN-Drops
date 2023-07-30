import React from 'react';
import HomeScreen from '../screens/Home';
// import Profile from '../screens/Profile';
import UpdateInfo from '../screens/Home/UpdateInfo';
import ChatScreen from '../screens/Chat';
import Notifications from '../screens/Notifications';
import Settings from '../screens/Settings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image, StyleSheet } from 'react-native';
import TestChatScreen from '../screens/Chat/test';

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
    name: 'HealthReport',
    title: 'Khai báo',
    component: UpdateInfo,
    icon: ({ color, size }) => (
      <MaterialCommunityIcons name="id-card" color={color} size={size} />
      // <Image source={require('../assets/newReport.png')} style={styles.img} />
    ),
  },
  {
    name: 'Chat',
    title: 'Trợ Lý',
    component: ChatScreen,
    icon: ({ color, size }) => (
      <MaterialCommunityIcons name="chat" color={color} size={size} />
      // <Image
      //   source={require('../assets/newChatbot.png')}
      //   style={styles.chatbot}
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
      // <Image source={require('../assets/newNoti.png')} style={styles.img} />
    ),
  },
  {
    name: 'Settings',
    title: 'Cài Đặt',
    component: Settings,
    icon: ({ color, size }) => (
      // <Image source={require('../assets/newSetting.png')} style={styles.img} />
      <MaterialCommunityIcons
        name="account-settings-outline"
        color={color}
        size={size}
      />
    ),
  },
];

const styles = StyleSheet.create({
  img: {
    width: 25,
    height: 25,
  },
  chatbot: {
    width: 35,
    height: 35,
  },
});
