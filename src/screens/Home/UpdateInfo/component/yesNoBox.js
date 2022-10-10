import { View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { useEffect } from 'react';

export const YesNoBox = () => {
  const Box = () => {
    const [checked, setChecked] = React.useState('first');
    return (
      <View style={{ flexDirection: 'row' }}>
        <RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
        />
        <RadioButton
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('second')}
        />
      </View>
    );
  };
  return (
    <View
      style={{
        flexDirection: 'column',
        height: '100%',
      }}>
      <View style={{ marginTop: '10%' }}>
        <Box />
      </View>
      <View style={{ marginTop: '8%' }}>
        <Box />
      </View>
      <View style={{ marginTop: '33%' }}>
        <Box />
      </View>
      <View style={{ marginTop: '195%' }}>
        <Box />
      </View>
      <View style={{ marginTop: '110%' }}>
        <Box />
      </View>
      <View style={{ marginTop: '65%' }}>
        <Box />
      </View>
    </View>
  );
};
