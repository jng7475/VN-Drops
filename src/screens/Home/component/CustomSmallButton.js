import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function CustomSmallButton(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={props.image} />
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    height: '90%',
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#F5F5F5',
  },
  text: {
    fontSize: 18,
    fontFamily: 'RobotoSlab-Medium',
  },
});
