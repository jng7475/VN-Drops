import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles1 } from './styles';
import UserInfor from './component/UserInfor';
import AdvancedText from '../../components/advancedText';
import MyText from '../../components/text';
import Time from './component/Time';

export default function Step2() {
  const endHour = 16;
  const endMin = 30;
  // const currentTime = 'Bây giờ là' + { endHour } + 'h :' + { endMin };
  const totalBlood = 1000;
  const alreadyHaveBlood = 500;
  const handler = () => {};
  const ManageLines = ({ text }) => {
    return (
      <View style={{ width: '100%' }}>
        <MyText text={text} size={15} family="RobotoSlab-Bold" />
      </View>
    );
  };
  return (
    <View style={styles1.container}>
      <View style={styles1.top}>
        <ScrollView
          style={styles1.infoWrapper}
          contentContainerStyle={styles1.infoScrollWrapper}>
          <UserInfor />
          <UserInfor />
          <UserInfor />
          <UserInfor />
          <UserInfor />
        </ScrollView>
      </View>
      <View style={styles1.bottom}>
        <View>
          <AdvancedText
            text="BẢNG QUẢN LÝ"
            color="#FF0000"
            family="RobotoSlab-Bold"
            size={22}
          />
        </View>
        <View style={styles1.timeLeft}>
          <View style={{ width: '50%' }}>
            <ManageLines text="Thời gian kết thúc: " />
            <ManageLines text="Thời gian hiện tại: " />
            <ManageLines text="Số máu kêu gọi: " />
            <ManageLines text="Số máu đã có: " />
          </View>
          <View style={{ width: '50%' }}>
            <Text>
              {endHour}h : {endMin}
            </Text>
            <Time />
            <Text>{totalBlood} ml</Text>
            <Text>{alreadyHaveBlood} ml</Text>
          </View>
        </View>
        <TouchableOpacity style={styles1.confirmButton1} onPress={handler}>
          <MyText
            text="NGỪNG KÊU GỌI"
            size={16}
            color="white"
            family="RobotoSlab-Bold"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
