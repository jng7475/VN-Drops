import { View, Text } from 'react-native';
import React from 'react';
import MyText from '../../../../components/text';

export default function Survey() {
  const QuestionsText = props => {
    return (
      <MyText
        size={16}
        text={props.text}
        family="RobotoSlab-SemiBold"
        color="black"
      />
    );
  };

  const DesciptionText = props => {
    return (
      <View style={{ paddingLeft: '3%', flexDirection: 'row' }}>
        <Text> · </Text>
        <MyText
          size={14}
          text={props.text}
          family="RobotoSlab-Regular"
          color="#2C2828"
        />
      </View>
    );
  };
  return (
    <View style={{ width: '76%', paddingLeft: '3%', paddingTop: '3%' }}>
      <QuestionsText text="1. Cân nặng hiện tại của bạn có trên 45kg không " />
      <QuestionsText text="2. Bạn có hiến máu trong 3 tháng gần đây không" />
      <QuestionsText text="3. Bạn đã từng mắc các bệnh như :" />
      <DesciptionText text="Tâm thần , thần kinh , hô hấp, tiêu hoá, vàng da/ viêm gan, huyết áp ...?" />
      <QuestionsText text="4. Trong 6 tháng gần đây, quý vị có:" />
      <Text>
        .........................................................................
      </Text>
      <DesciptionText text="Sút cân không rõ nguyên nhân " />
      <DesciptionText text="Phẩu thuật? " />
      <DesciptionText text="Được truyền máu? " />
      <DesciptionText text="Sử dụng ma tuý , tiêm chích " />
      <DesciptionText text="Tiêm vắc xin phòng bệnh " />
      <DesciptionText text="Có đến /ở vùng dịch lưu hành " />
      <DesciptionText text="Sốt xuất huyết , sốt rét , covid -19....? " />
      <QuestionsText text="5. Trong 01 tuần gần đây , quý vị có:" />
      <DesciptionText text="Bị cúm , ho , nhức đầu , sốt ...? " />
      <DesciptionText text="Dùng thuốc kháng sinh Aspirin Corticoid? " />
      <DesciptionText text="Đi khám sức khoẻ , xét nghiệm? " />
      <Text>
        .........................................................................
      </Text>
      <QuestionsText
        text="6. Bạn hiện là đối tượng tàn tật 
          hoặc hưởng trợ cấp tàn tật hoặc
          nạn nhân chất độc mầu da cam 
          không ?"
      />
      <Text>
        .........................................................................
      </Text>
      <QuestionsText text="7. Câu hỏi dành cho phụ nữ：" />
      <DesciptionText text="Chị hiện có thai hoặc nuôi con dưới 12 tháng tuổi " />
    </View>
  );
}
