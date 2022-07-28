import React from 'react';
import HomeScreen from '../screens/Home';
import Profile from '../screens/Profile';
import ChatScreen from '../screens/Chat';
import Notifications from '../screens/Notifications';
import Settings from '../screens/Settings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const NavBarButtons = [
  {
    name: 'Home',
    title: 'Trang Chủ',
    component: HomeScreen,
    icon: ({ color, size }) => (
      <MaterialCommunityIcons name="home" color={color} size={size} />
    ),
  },
  {
    name: 'Profile',
    title: 'Hồ Sơ',
    component: Profile,
    icon: ({ color, size }) => (
      <MaterialCommunityIcons name="account" color={color} size={size} />
    ),
  },
  {
    name: 'Chat',
    title: 'Trợ Lý',
    component: ChatScreen,
    icon: ({ color, size }) => (
      <MaterialCommunityIcons name="robot" color={color} size={size} />
    ),
  },
  {
    name: 'Notifications',
    title: 'Thông Báo',
    component: Notifications,
    icon: ({ color, size }) => (
      <MaterialIcons name="circle-notifications" color={color} size={size} />
    ),
  },
  {
    name: 'Settings',
    title: 'Cài Đặt',
    component: Settings,
    icon: ({ color, size }) => (
      <MaterialIcons name="settings" color={color} size={size} />
    ),
  },
];
