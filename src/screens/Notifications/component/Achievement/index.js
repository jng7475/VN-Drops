import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MyText from '../../../../components/text';
import styles from '../../styles';

const Achievement = props => {
  return (
    <View style={styles.achievement}>
      <View style={{ position: 'absolute', right: '5%', top: '4%' }}>
        <MyText text={props.small} color="white" size={14} />
      </View>
      <MyText
        text={props.num}
        color="white"
        size={20}
        family="RobotoSlab-Bold"
      />
      <MyText
        text={props.text}
        color="white"
        size={16}
        family="RobotoSlab-Medium"
      />
    </View>
  );
};

export default Achievement;
