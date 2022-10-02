import { View, Text } from 'react-native';
import React from 'react';
import BeforeDonationScreen from './before';
import DuringDonationScreen from './during';
import AfterDonationScreen from './after';

const Activity = () => {
  return (
    <View style={{ flex: 1 }}>
      <BeforeDonationScreen style={{ flex: 1 }} />
      {/* <DuringDonationScreen style={{ flex: 1 }} /> */}
      {/* <AfterDonationScreen style={{ flex: 1 }} /> */}
    </View>
  );
};

export default Activity;
