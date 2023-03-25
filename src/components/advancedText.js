import React from 'react';
import { View, Text } from 'react-native';

const AdvancedText = props => {
  return (
    <Text
      style={{
        fontFamily: props.family,
        fontSize: props.size,
        color: props.color,
        textAlign: props.align,
        textShadowOffset: { width: 1, height: 5 },
        textShadowRadius: props.shadow,
      }}>
      {props.text}
    </Text>
  );
};

export default AdvancedText;
