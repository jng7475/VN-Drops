import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import BeforeDonationScreen from './before';
import DuringDonationScreen from './during';
import AfterDonationScreen from './after';
import { getUserStatus } from '../../../api/GetPersonalInfo';
import SOS from './SOS';

const Activity = () => {
  const [message, setMessage] = useState('');
  //
  useEffect(() => {
    const interval = setInterval(() => {
      setMessage(message);
    }, 1000);

    return () => clearInterval(interval);
  }, [message]);

  useEffect(() => {
    getUserStatus().then(res => {
      // console.log(res);
      setMessage(res);
    });
    return () => {};
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {message === 'none' ? (
        <BeforeDonationScreen style={{ flex: 1 }} />
      ) : message === 'appointment' ? (
        <DuringDonationScreen style={{ flex: 1 }} />
      ) : message === 'after' ? (
        <AfterDonationScreen style={{ flex: 1 }} />
      ) : (
        <SOS style={{ flex: 1 }} />
      )}

      {/* <DuringDonationScreen style={{ flex: 1 }} /> */}
      {/* <AfterDonationScreen style={{ flex: 1 }} /> */}
    </View>
  );
};

export default Activity;
