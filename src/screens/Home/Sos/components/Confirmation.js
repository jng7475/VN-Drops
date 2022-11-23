import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import React from 'react';
import { useEffect, useState } from 'react';
import { getPersonalInfo } from '../../../../api/GetPersonalInfo';
import { createUserSOSAppointment } from '../../../../api/CreateUserSOSAppointment';
import { handleUserSOS } from '../../../../api/HandleUserSOS';

const Confirmation = ({ hospitalDetails, navigation, setSelected }) => {
  const [noteContent, setNoteContent] = useState('');
  const [fullname, setFullname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  useEffect(() => {
    getPersonalInfo().then(data => {
      // console.log(hospitalDetails.hospitalName);
      // setPersonalInfo(data);
      setFullname(data.fullname);
      setPhoneNumber(data.phoneNumber);
    });
  }, [hospitalDetails.hospitalName]);

  const handleBack = () => {
    setSelected(false);
  };
  const handleConfirm = () => {
    if (fullname === '' || phoneNumber === '' || noteContent === '') {
      Alert.alert('Vui lòng kiểm tra lại các mục chưa điền');
    } else {
      createUserSOSAppointment(
        hospitalDetails.hospitalID,
        hospitalDetails.callID,
        noteContent,
      );
      handleUserSOS(hospitalDetails.hospitalID);
      Alert.alert('Bạn đã đăng kí hiến máu khẩn cấp thành công');
      navigation.navigate('MainHome');
    }
  };

  return (
    <View>
      <View>
        <Text>Vui lòng xác nhận lại các thông tin cần thiết!</Text>
        <View style={inputStyles.container}>
          {/* {icon} */}
          <Text>Họ và tên: </Text>
          <TextInput
            placeholder={fullname}
            value={fullname}
            onChangeText={text => setFullname(text)}
            style={inputStyles.textInput}
          />
        </View>
        <View style={inputStyles.container}>
          {/* {icon} */}
          <Text>Số điện thoại: </Text>
          <TextInput
            placeholder={phoneNumber}
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
            style={inputStyles.textInput}
          />
        </View>
        <View pointerEvents="none" style={inputStyles.container}>
          {/* {icon} */}
          <Text>Tên bệnh viện: </Text>
          <TextInput
            placeholder={hospitalDetails.hospitalName}
            value={hospitalDetails.hospitalName}
            // onChangeText={text => setPhoneNumber(text)}
            style={inputStyles.textInput}
          />
        </View>
        <View pointerEvents="none" style={inputStyles.container}>
          {/* {icon} */}
          <Text>Địa chỉ bệnh viện: </Text>
          <TextInput
            placeholder={hospitalDetails.address}
            value={hospitalDetails.address}
            // onChangeText={text => setPhoneNumber(text)}
            style={inputStyles.textInput}
          />
        </View>
        <View pointerEvents="none" style={inputStyles.container}>
          {/* {icon} */}
          <Text>Hạn cuối hiến máu: </Text>
          <TextInput
            placeholder={hospitalDetails.time + ' - ' + hospitalDetails.date}
            value={hospitalDetails.time + ' - ' + hospitalDetails.date}
            // onChangeText={text => setPhoneNumber(text)}
            style={inputStyles.textInput}
          />
        </View>
        <View style={noteStyles.container}>
          {/* {icon} */}
          <TextInput
            placeholder="Nhập lời nhắn"
            value={noteContent}
            onChangeText={text => setNoteContent(text)}
            style={noteStyles.textInput}
            multiline={true}
          />
        </View>
        <View style={buttonContainer}>
          <View style={submitButtonStyles}>
            <Button title="QUAY LẠI" onPress={handleBack} color={'#951515'} />
          </View>
          <View style={submitButtonStyles}>
            <Button
              title="xác nhận"
              onPress={handleConfirm}
              color={'#951515'}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Confirmation;

const inputStyles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '5%',
    marginBottom: '5%',
  },
  textInput: {
    borderBottomColor: '#BAAFAF', // Add this to specify bottom border color
    borderBottomWidth: 1,
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
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

const noteStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '5%',
    marginBottom: '5%',
    borderBottomColor: '#BAAFAF', // Add this to specify bottom border color
    borderBottomWidth: 1,
  },
  textInput: {
    flex: 1,
    // paddingTop: 10,
    paddingRight: 10,
    // paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#EEEDEB',
    textAlignVertical: 'top',
  },
});
