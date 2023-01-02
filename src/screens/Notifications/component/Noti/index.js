import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import MyText from '../../../../components/text';

const Noti = props => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={props.image} />
      <View style={{ marginLeft: '30%', marginRight: '5%', marginTop: '3%' }}>
        <MyText
          text={props.text}
          family="RobotoSlab-Bold"
          size={16}
          color="black"
        />
        <MyText
          text={props.small}
          family="RobotoSlab-Regular"
          size={14}
          color="black"
        />
        {/* <Text>{props.text}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 10,
    flexDirection: 'row',
    width: '80%',
    height: '18%',
    marginVertical: '2%',
  },
  image: {
    position: 'absolute',
    top: '25%',
    left: '5%',
    width: '20%',
    height: '50%',
    resizeMode: 'contain',
  },
});
export default Noti;
