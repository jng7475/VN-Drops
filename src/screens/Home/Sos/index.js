import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import { getBloodCalls } from '../../../api/BloodCallCRUD';

export default function Sos() {
  const [bloodCalls, setBloodCalls] = useState([]);
  useEffect(() => {
    const retreiveBloodCalls = async () => {
      return await getBloodCalls();
    };
    retreiveBloodCalls().then(res => console.log('asd', res));
    // console.log(retreiveBloodCalls());
  }, []);
  // console.log(bloodCalls);
  return (
    <View>
      <Text>Sos</Text>
    </View>
  );
}
