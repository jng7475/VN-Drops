import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import MyText from '../../../components/text';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function UserInfor() {
  const ConfirmButton = () => {
    if (confirm === false) {
      return (
        <TouchableOpacity style={styles.confirmButton1} onPress={handler}>
          <MyText
            text="XÁC NHẬN"
            size={16}
            color="#FFFFFF"
            family="RobotoSlab-Bold"
          />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity style={styles.confirmButton2} onPress={handler}>
          <MyText
            text="ĐÃ CHỌN"
            size={16}
            color="#FF0000"
            family="RobotoSlab-Bold"
          />
        </TouchableOpacity>
      );
    }
  };
  const handler = () => {
    setConfirm(current => !current);
  };
  const [confirm, setConfirm] = useState(false);
  const name = 'Nguyen Nguyen Trung';
  const phone = '090928638';
  const address = '193 Nguyễn Lương Bằng';
  const note =
    'Tôi đang bận trong cuộc họp, tôi có thể hiến máu sau 4:00. Sức khỏe rất ổn định.';
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
  ////////////////////////
  return (
    <View style={styles.container}>
      <InforLines title="Tên người hiến máu: " des={name} />
      <InforLines title="Số điện thoại: " des={phone} />
      <InforLines title="Địa chỉ: " des={address} />
      <InforLines title="Lưu ý: " des="" />
      <MyText text={note} family="RobotoSlab-Regular" size={16} color="black" />
      <ConfirmButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    width: '90%',
    backgroundColor: '#F5F5F5',
    // height: windowHeight / 5,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: windowHeight / 20,
    paddingTop: 5,
    paddingBottom: windowHeight / 18,
  },
  InforLinesWrapper: {
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
