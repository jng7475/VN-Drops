import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width - 20;
const windowHeight = Dimensions.get('window').height;

export default function NewsPieces(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{ fontSize: 18 }}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: '90%',
    marginHorizontal: 10,
    backgroundColor: 'lightgray',
  },

  // text: {
  //   fontSize: 18,
  // },
});
