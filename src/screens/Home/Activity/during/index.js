import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import React from 'react';
import styles from './styles';
import MyText from '../../../../components/text';
import { useNavigation } from '@react-navigation/native';

export default function DuringDonationScreen() {
  const navigation = useNavigation();
  const questionHandler = () => {
    navigation.navigate('Chat');
  };
  const healthNoticeHandler = () => {
    Linking.openURL(
      'https://vsh.org.vn/nhung-dieu-nguoi-hien-mau-tinh-nguyen-can-biet.htm',
    );
  };
  const healthNoticeText =
    'Để đảm bảo sức khỏe của bạn và chất lượng hiến máu, bạn cần thực hiện chế độ ăn uống, nghỉ ngơi khoa học! Xem chi tiết từ hướng dẫn từ các chuyên gia tại đây: ';
  const Infor = props => {
    return (
      <View style={{ flexDirection: 'row', width: '90%', margin: 5 }}>
        <View style={{ flex: 1 }}>
          <MyText
            family="RobotoSlab-Medium"
            size={17}
            text={props.title}
            color="black"
          />
        </View>
        <View style={{ flex: 2 }}>
          <MyText
            family="RobotoSlab-Regular"
            size={16}
            text={props.des}
            color="black"
          />
        </View>
      </View>
    );
  };
  const data = new Date().toLocaleString();
  const space = '   ';
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Bạn đã đăng ký hiến máu thành công</Text>
      </View>
      <Text style={styles.registerText}>
        {space}
        {space}Register in: {space}
        {data}
      </Text>
      <View style={styles.mainWrapper}>
        <View style={styles.donateDayInfoWrapper}>
          <Text style={styles.donateDayTitle}>
            Các thông tin về buổi hiến máu
          </Text>
          <Infor title="Thời gian:" des="8h ngày 28/9/2022" />
          <Infor
            title="Địa điểm:"
            des="30 Tháng 4, Hoà Cường Bắc, Cẩm Lệ, Đà Nẵng     "
          />
          <Infor
            title="Đơn vị :"
            des="Công ty cổ phần Bệnh viện đa khoa Quốc tế Vinmec"
          />
        </View>
        <View style={styles.healthNoticeWrapper}>
          <MyText
            family="RobotoSlab-Bold"
            size={17}
            color="black"
            text="Lưu ý về sức khỏe:"
          />
          <MyText
            text={healthNoticeText}
            family="RobotoSlab-Regular"
            color="black"
            size={14.5}
          />
          <TouchableOpacity
            style={{ marginTop: 10, marginBottom: 20 }}
            onPress={healthNoticeHandler}>
            <Image
              source={require('../../../../assets/healthNoticeImage.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={questionHandler}
            style={{ alignItems: 'center', width: '100%' }}>
            <MyText
              family="Roboto-BoldItalic"
              color="black"
              text="Bạn còn thắc mắc ? Giải đáp ngay"
              size={18}
            />
            <View
              style={{ height: 2, backgroundColor: 'black', width: '70%' }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
