import { View, Text } from 'react-native';
import React from 'react';
import MyText from '../../../../components/text';

export default function Claim() {
  return (
    <View style={{ marginTop: '5%' }}>
      <MyText
        size={12}
        family="RobotoSlab-Regular"
        color="#646464"
        text="Tôi đã đọc , hiểu rõ , trả lời trung thực và cam kết chịu trách nhiệm về
        các thông tin cá nhân vầ các câu hỏi cho người hiến máu. Nếu phát hiện
        thấy nguy cơ mắc bệnh của bản thân , tôi sẽ báo ngay nhầm đảm bảo an
        toàn cho người bệnh ,Tôi hoàn toàn khoẻ mạnh và tình nguyện sẵn sàng
        hiến máu."
      />
    </View>
  );
}
