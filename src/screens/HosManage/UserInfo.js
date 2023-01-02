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
      // console.log(info);
      setUserInfo(info);
    });
    getUserHealth(userID).then(info => {
      // console.log(info);
      setUserHealthInfo(info);
    });
  }, [userID]);
  const InforLines = props => {
    return (
      <View style={styles.InforLinesWrapper}>
        <View style={{ width: '50%' }}>
          <MyText
            text={props.title}
            family="RobotoSlab-Bold"
            size={16}
            color="black"
          />
        </View>
        <View style={{ width: '50%' }}>
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
          title="Hiện là đối tượng tàn tật
          hoặc hưởng trợ cấp tàn tật hoặc
          nạn nhân chất độc mầu da cam?"
          des={userHealthInfo.disability === true ? 'Có' : 'Không'}
        />
      </View>
      <View style={buttonContainer}>
        <View style={submitButtonStyles}>
          <Button title="QUAY LẠI" onPress={handleBack} color={'#951515'} />
        </View>
        <View style={submitButtonStyles}>
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
    backgroundColor: '#FDEAD9',
    // height: windowHeight / 5,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: windowHeight / 20,
    paddingTop: 5,
    paddingBottom: windowHeight / 18,
  },
  InforLinesWrapper: {
    paddingTop: 5,
    paddingHorizontal: 5,
    marginVertical: 5,
    width: '100%',
    flexDirection: 'row',
  },
  confirmButton1: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '8%',
    bottom: -windowHeight / 35,
    width: '35%',
    backgroundColor: '#C00000',
    borderRadius: 10,
  },
  confirmButton2: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '8%',
    bottom: -windowHeight / 35,
    width: '35%',
    backgroundColor: '#C1D1B2',
    borderRadius: 10,
  },
});

const buttonContainer = {
  flex: 1,
  flexDirection: 'row',
};

const submitButtonStyles = {
  flex: 1,
  marginLeft: '5%',
  marginRight: '5%',
  marginTop: '5%',
  marginBottom: '5%',
  width: '90%',
  // backgroundColor: '#951515',
};
