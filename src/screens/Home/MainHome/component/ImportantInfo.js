import { View, Text } from 'react-native';
import MyText from '../../../../components/text';
import React from 'react';

export default function ImportantInfo() {
  return (
    <View>
      <MyText
        text="- Có người gần bạn đang cần gấp 500ml máu nhóm O để thực hiện phẩu
              thuật."
        size={15}
        family="RobotoSlab-Medium"
        color="black"
      />
      <Text />
      <MyText
        text="Vào 'HIẾN MÁU KHẨN CẤP' để giúp họ ngay!"
        size={13}
        family="RobotoSlab-Medium"
        color="#BB7474"
      />
    </View>
  );
}
