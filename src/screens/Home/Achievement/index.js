import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import MyText from '../../../components/text';
import AdvancedText from '../../../components/advancedText';

const Achievement = () => {
  const YourAchievement = props => {
    return (
      <MyText
        text={props.text}
        size={16}
        color="black"
        family="RobotoSlab-SemiBold"
      />
    );
  };
  const HonoredPeople = [
    'Đỗ Anh Huy',
    'Nguyễn Nguyễn Trung',
    'Huỳnh Bảo Huy',
    'Huỳnh Trương Bảo Ngọc',
  ];
  const HonoredPeopleList = () => {
    return HonoredPeople.map((i, index) => {
      return (
        <MyText
          key={index}
          text={index + 1 + ' ' + i}
          size={14.5}
          color="black"
          family="RobotoSlab-Medium"
        />
      );
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.titleWrapper}>
          <AdvancedText
            text="Vinh danh các cá nhân tích cực nhất khu vực năm 2022-2023"
            size={20}
            family="RobotoSlab-Bold"
            color="#CC1B1B"
            align="center"
          />
        </View>
        <View style={styles.honorTable}>
          <Image source={require('../../../assets/honoredPeo.png')} />
          <View style={{ width: '60%', paddingLeft: '5%' }}>
            <HonoredPeopleList />
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={{ paddingVertical: '5%' }}>
          <AdvancedText
            text="THÀNH TÍCH CỦA BẠN"
            color="#CC1B1B"
            family="RobotoSlab-Bold"
            size={22}
            align="center"
          />
        </View>
        <View style={{ width: '100%', paddingHorizontal: '8%' }}>
          <YourAchievement text="Điểm cộng tích cực: 2000" />
          <YourAchievement text="Đạt thứ hạng 10 trong khu vực " />
          <YourAchievement text="Đã hiến: 500ml máu " />
        </View>
        <View style={styles.certiWrapper}>
          <Image source={require('../../../assets/certificate.png')} />
          <TouchableOpacity>
            <MyText
              text="Nhấn vào để tải giấy chứng nhận"
              color="#723838"
              size={16}
              family="RobotoSlab-Medium"
            />
          </TouchableOpacity>
          <View style={styles.callWrapper}>
            <Text>
              Hãy chia sẽ thành tích của mình đến với bạn bè, tích cực kêu gọi
              bạn bè tham gia...để gia tăng điểm cộng tích cực nhé!
            </Text>
            <TouchableOpacity style={styles.findmoreInfor}>
              <Text style={{ color: 'red' }}>Tìm hiểu thêm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Achievement;
