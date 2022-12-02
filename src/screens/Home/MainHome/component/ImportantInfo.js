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
        setMessage(
          'Hãy cập nhật tình trạng sức khỏe của bạn để có thể đặt lịch hoặc hiến máu khẩn cấp',
        );
      } else if (res === 'appointment') {
        setMessage(
          'Bạn đã đặt lịch thành công. Theo dõi "Hoạt động" để được hướng dẫn.',
        );
      } else if (res === 'after') {
        setMessage('Bạn đã hoàn thành hiến máu');
      } else if (res === 'sos') {
        setMessage(
          'Đã xác nhận đăng ký hiến máu khẩn cấp. Một bệnh nhân đang chờ bạn. Hãy đến sớm nhất có thể nhé!',
        );
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
