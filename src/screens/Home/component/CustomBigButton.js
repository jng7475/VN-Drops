import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function CustomBigButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={require('../../../assets/schedule.png')} />
      <Text style={styles.text}>Đăng ký - đặt lịch</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width: '85%',
    height: '90%',
    padding: 15,
    backgroundColor: '#F5F5F5',
  },
  text: {
    fontSize: 19,
    fontFamily: 'RobotoSlab-Medium',
  },
});
