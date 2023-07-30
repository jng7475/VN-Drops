import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  Button,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import MyText from '../../components/text';
import { getPersonalInfo } from '../../api/GetPersonalInfo';
import { getUserHealth } from '../../api/GetUserHealth';
import { confirmRegularAppointment } from '../../api/confirmRegularAppointment';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function UserInfo({
  userID,
  appointmentID,
  setSelected,
  navigation,
}) {
  const [userInfo, setUserInfo] = useState('');
  const [userHealthInfo, setUserHealthInfo] = useState('');

  useEffect(() => {
    getPersonalInfo(userID).then(info => {
      setUserInfo(info);
    });
    getUserHealth(userID).then(info => {
      setUserHealthInfo(info);
    });
  }, [userID]);

  const InforLines = props => {
    return (
      <View style={styles.InforLinesWrapper}>
        <View style={{ width: '100%', borderTopWidth: 1, borderTopColor: 'black' }}>
          <MyText
            text={props.title}
            family="RobotoSlab-Bold"
            size={16}
            color="black"
          />
        </View>
        <View style={{ width: '100%' }}>
          <MyText
            text={props.des}
            family="RobotoSlab-Regular"
            size={15}
            color="black"
          />
        </View>
      </View>
    );
  };

  const handleBack = () => {
    setSelected(false);
  };

  const handleConfirm = () => {
    console.log('Confirm');
    confirmRegularAppointment(userID, appointmentID);
    navigation.navigate('HospitalMainHome');
  };

  return (
    <View>
      <View style={styles.container}>
        <InforLines title="Tên người hiến máu: " des={userInfo.fullname} />
        <InforLines title="Số điện thoại: " des={userInfo.phoneNumber} />
        <InforLines title="Nhóm máu: " des={userInfo.bloodType} />
        <InforLines title="Địa chỉ: " des={userInfo.homeAdress} />
        <InforLines
          title="Hiến máu trong 3 tháng gần đây: "
          des={userHealthInfo['3-month-donation'] === true ? 'Có' : 'Không'}
        />
        <InforLines
          title="Đã từng mắc các bệnh như: Tâm thần , thần kinh , hô hấp, tiêu hoá, vàng da/ viêm gan, huyết áp ...?"
          des={userHealthInfo['disease-history'] === true ? 'Có' : 'Không'}
        />
        <InforLines
          title="Trong 6 tháng gần đây: Sút cân không rõ nguyên nhân, phẫu thuật, được truyền máu, sử dụng ma tuý , tiêm chích, tiêm vắc xin phòng bệnh, có đến /ở vùng dịch lưu hành, Sốt xuất huyết , sốt rét , covid -19....?"
          des={userHealthInfo['6-month-questions'] === true ? 'Có' : 'Không'}
        />
        <InforLines
          title="Trong 01 tuần gần đây: Bị cúm , ho , nhức đầu , sốt ..., dùng thuốc kháng sinh Aspirin Corticoid, đi khám sức khoẻ , xét nghiệm?"
          des={userHealthInfo['1-week-question'] === true ? 'Có' : 'Không'}
        />
        <InforLines
          title="Hiện là đối tượng tàn tật hoặc hưởng trợ cấp tàn tật hoặc nạn nhân chất độc mầu da cam?"
          des={userHealthInfo.disability === true ? 'Có' : 'Không'}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.submitButtonStyles}>
          <Button title="QUAY LẠI" onPress={handleBack} color={'#951515'} />
        </View>
        <View style={styles.submitButtonStyles}>
          <Button title="xác nhận" onPress={handleConfirm} color={'#951515'} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    width: '100%',
    backgroundColor: 'lightyellow',
    // backgroundColor: '#FDEAD9',
    paddingVertical: 10,
    paddingHorizontal: windowWidth / 20,
    marginVertical: 10,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
    // elevation: 3,
  },
  InforLinesWrapper: {
    paddingTop: 5,
    paddingHorizontal: 5,
    marginVertical: 5,
    width: '100%',
    flexDirection: 'column',
    backgroundColor: 'lightwhite', // Add this line to set white background
    borderRadius: 10, // Add this line to add border radius
    borderWidth: 0,
    borderColor: '#EAEAEA', // Add this line to set a light gray border color
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  submitButtonStyles: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 10,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3,
  },
});
