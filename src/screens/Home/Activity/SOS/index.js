import { View, Text, Alert, Image } from 'react-native';
import React from 'react';
import { useEffect, useState } from 'react';
import { getUserStatus } from '../../../../api/GetPersonalInfo';
import messaging from '@react-native-firebase/messaging';
import MyText from '../../../../components/text';
import AdvancedText from '../../../../components/advancedText';

const SOS = () => {
  // const [title, setTitle] = useState('');
  // const [message, setMessage] = useState('SOS !!!Đến ');
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <AdvancedText
        text="Tình trạng khẩn cấp !!!"
        size={25}
        family="RobotoSlab-Bold"
        color="red"
      />
      <Image
        source={require('../../../../assets/Sos(1).png')}
        style={{ maxHeight: '50%', marginVertical: '10%' }}
      />
      <AdvancedText
        text="30 Tháng 4, Hoà Cường Bắc, Cẩm Lệ, Đà Nẵng. Cổng sau."
        size={25}
        family="RobotoSlab-Bold"
        color="green"
        align="center"
      />
      {/* <MyText
      text="Vào 'HIẾN MÁU KHẨN CẤP' để giúp họ ngay!"
      size={13}
      family="RobotoSlab-Medium"
      color="#BB7474"
    /> */}
    </View>
  );
};

export default SOS;
