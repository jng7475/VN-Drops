import React from 'react';
import { View, Text } from 'react-native';

const MyText = props => {
  return (
    <Text
      style={{
        fontFamily: props.family,
        fontSize: props.size,
        color: props.color,
      }}>
      {props.text}
    </Text>
  );
};

export default MyText;
