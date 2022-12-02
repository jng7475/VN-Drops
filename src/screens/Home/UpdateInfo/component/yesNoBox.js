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
        <Box setResult={setResult} field={'weight'} />
      </View>
      <View style={{ marginTop: '10%' }}>
        <Box setResult={setResult} field={'3-month-donation'} />
      </View>
      <View style={{ marginTop: '10%' }}>
        <Box setResult={setResult} field={'disease-history'} />
      </View>
      <View style={{ marginTop: '30%' }}>
        <Box setResult={setResult} field={'6-month-questions'} />
      </View>
      <View style={{ marginTop: '195%' }}>
        <Box setResult={setResult} field={'1-week-question'} />
      </View>
      <View style={{ marginTop: '90%' }}>
        <Box setResult={setResult} field={'disability'} />
      </View>
      <View style={{ marginTop: '60%' }}>
        <Box setResult={setResult} field={'female-question'} />
      </View>
    </View>
  );
};
