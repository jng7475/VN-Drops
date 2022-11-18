import { View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { useEffect } from 'react';
import { Box } from './Box';

export const YesNoBox = ({ setResult }) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        height: '100%',
      }}>
      <View style={{ marginTop: '10%' }}>
        <Box setResult={setResult} field={'3-month-donation'} />
      </View>
      <View style={{ marginTop: '110%' }}>
        <Box setResult={setResult} field={'disease-history'} />
      </View>
      <View style={{ marginTop: '8%' }}>
        <Box setResult={setResult} field={'6-month-questions'} />
      </View>
      <View style={{ marginTop: '33%' }}>
        <Box setResult={setResult} field={'1-week-question'} />
      </View>
      <View style={{ marginTop: '195%' }}>
        <Box setResult={setResult} field={'disability'} />
      </View>
      <View style={{ marginTop: '65%' }}>
        <Box setResult={setResult} field={'female-question'} />
      </View>
    </View>
  );
};
