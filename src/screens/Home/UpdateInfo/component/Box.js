import { View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { useEffect } from 'react';

export const Box = ({ setResult, field }) => {
  const [checked, setChecked] = useState('');
  useEffect(() => {
    console.log('rendered');
  }, []);

  // useEffect(() => {
  //   console.log(checked);
  // }, [checked]);
  return (
    <View style={{ flexDirection: 'row' }}>
      <RadioButton
        value="first"
        status={checked === 'first' ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked('first');
          setResult(details => ({
            ...details,
            [field]: true,
          }));
        }}
      />
      <RadioButton
        value="second"
        status={checked === 'second' ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked('second');
          setResult(details => ({
            ...details,
            [field]: false,
          }));
        }}
      />
    </View>
  );
};
