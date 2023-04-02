import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import MyText from '../../components/text';
import { getPersonalInfo } from '../../api/GetPersonalInfo';
import UserInfo from './UserInfo';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function UserInfoWrapper({
  userID,
  userNote,
  appointmentID,
  navigation,
  selected,
  setSelected,
  setCurrentUserID,
  setCurrentAppointmentID,
}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  // const [selected, setSelected] = useState(false);
  useEffect(() => {
    getPersonalInfo(userID).then(info => {
      // console.log(info);
      setName(info.fullname);
      setPhone(info.phoneNumber);
    });
  }, [userID]);
  const InforLines = props => {
    return (
      <View style={styles.InforLinesWrapper}>
        <View style={{ width: '50%' }}>
          <MyText
            text={props.title}
            family="RobotoSlab-Bold"
            size={14}
            color="black"
          />
        </View>
        <View style={{ width: '50%' }}>
          <MyText
            text={props.des}
            family="RobotoSlab-Regular"
            size={12.5}
            color="black"
          />
        </View>
      </View>
    );
  };
  ////////////////////////
  const handleOnpress = () => {
    setCurrentUserID(userID);
    setCurrentAppointmentID(appointmentID);
    setSelected(prev => {
      if (prev === false) {
        return true;
      } else {
        return false;
      }
    });
  };
  return (
    <View>
      <Pressable style={styles.container} onPress={handleOnpress}>
        <InforLines title="Tên người hiến máu: " des={name} />
        <InforLines title="Số điện thoại: " des={phone} />
      </Pressable>
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
    paddingVertical: '3%',
    paddingLeft: '3%',
  },
  InforLinesWrapper: {
    paddingTop: 5,
    // paddingHorizontal: 5,
    marginVertical: 5,
    width: '100%',
    flexDirection: 'row',
  },
  confirmButton1: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '4%',
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
