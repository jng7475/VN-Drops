import { View, Text, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import messaging from '@react-native-firebase/messaging';
import MyText from '../../../../components/text';
import React from 'react';
import { getUserStatus } from '../../../../api/GetPersonalInfo';

export default function ImportantInfo() {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  useEffect(() => {
    getUserStatus().then(res => {
      // console.log(res);
      if (res === 'none') {
        setMessage('Không có thông tin gì mới!');
      } else if (res === 'appointment') {
        setMessage('Bạn đã đặt lịch thành công!');
      } else if (res === 'after') {
        setMessage('Bạn đã đặt lịch thành công!');
      } else if (res === 'sos') {
        setMessage('Bạn đã đặt lịch thành công!');
      }
    });
    return () => {};
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // setTitle(remoteMessage.notification.title);
      const fullRemoteMessage =
        remoteMessage.notification.title +
        ': ' +
        remoteMessage.notification.body;
      setMessage(fullRemoteMessage);
      // Alert.alert(remoteMessage.notification.title, message);
    });

    return unsubscribe;
  }, []);
  return (
    <View>
      <MyText
        text={message}
        size={15}
        family="RobotoSlab-Medium"
        color="black"
      />
      <Text />
      {/* <MyText
        text="Vào 'HIẾN MÁU KHẨN CẤP' để giúp họ ngay!"
        size={13}
        family="RobotoSlab-Medium"
        color="#BB7474"
      /> */}
    </View>
  );
}
