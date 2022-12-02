import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Pressable,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { handleSOSCall } from '../../api/HandleSOSCall';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from '../Home/Appointment/components/DatePicker';
import ResponseModal from '../Home/Appointment/components/ResponseModal';
import { UpdateUserInfo } from '../../api/UpdateUserInfo';
import { getUserHealth } from '../../api/GetUserHealth';
import { getPersonalInfo } from '../../api/GetPersonalInfo';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HosManage = ({ navigation }) => {
  const [id, setId] = useState('R7QEaaDy5RV26wi4vE5U9FqHar82');
  const [weight, setWeight] = useState('');
  const [donateHistory, setDonateHistory] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [disease, setDisease] = useState('');

  // const [hospitalAddress, setHospitalAddress] = useState(null);
  // const [noteContent, setNoteContent] = useState('');
  // const [open, setOpen] = useState(false);
  // const [bloodTypeChoice, setBloodTypeChoice] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');

  const handleSubmit = async () => {
    // let newInfo = await getUserHealth(id);
    console.log(1);
    // let personalInfo = await getPersonalInfo(id);
    console.log(2);
    let newInfo = {
      ...newInfo,
      // personalInfo,
    };
    if (
      weight !== '' &&
      donateHistory !== '' &&
      bloodType !== '' &&
      disease !== ''
    ) {
      newInfo = {
        ...newInfo,
        id: id,
        weight: weight,
        donateHistory: donateHistory,
        disease: disease,
      };
      // const userHealth = await getUserHealth((id = id));
      // newInfo = {
      //   ...newInfo,
      //   userHealth,
      // };
      console.log(newInfo);
      // let status = 'success';
      // const userHealth = await getUserHealth();
      // console.log(userHealth);
      // newInfo = {
      //   ...newInfo,
      //   userHealth,
      // };

      const status = await UpdateUserInfo(newInfo);
      console.log(status);
      if (status === 'success') {
        setModalText('Đã cập nhật thông tin người dùng này');
        // navigation.navigate('HospitalMainHome');
      }
    } else {
      setModalText('Một hoặc nhiều chi tiết chưa được cung cấp!');
    }
    setModalVisible(true);
  };

  return (
    <ScrollView contentContainerStyle={contentContainerStyle}>
      <Text style={generalStyles.topTitle}>Quản lý thông tin người dùng</Text>
      {/* <Text>Chọn nhóm máu cần kêu gọi</Text> */}
      {/* <Text>Lưu ý</Text> */}
      <View style={noteStyles.container}>
        {/* {icon} */}
        <TextInput
          placeholder="ID người dùng"
          value={id}
          onChangeText={text => setId(text)}
          style={inputStyles.textInput}
          multiline={true}
        />
        <TextInput
          placeholder="Cân nặng"
          value={weight}
          onChangeText={text => setWeight(text)}
          style={inputStyles.textInput}
          multiline={true}
        />
        <TextInput
          placeholder="Lưu ý về bệnh nền"
          value={disease}
          onChangeText={text => setDisease(text)}
          style={inputStyles.textInput}
          multiline={true}
        />
        <TextInput
          placeholder="nhóm máu"
          value={bloodType}
          onChangeText={text => setBloodType(text)}
          style={inputStyles.textInput}
          multiline={true}
        />
        <TextInput
          placeholder="Lần cuối hiến máu"
          value={donateHistory}
          onChangeText={text => setDonateHistory(text)}
          style={inputStyles.textInput}
          multiline={true}
        />
      </View>
      <View style={submitButtonStyles}>
        <Button title="xác nhận" onPress={handleSubmit} color={'#951515'} />
      </View>
      <ResponseModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalText={modalText}
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default HosManage;

const generalStyles = StyleSheet.create({
  topTitle: {
    textAlign: 'center',
    fontSize: 18,
    color: '#C05757',
  },
});

const dropdownStyles = {
  backgroundColor: '#EEEDEB',
};
const containerStyles = {
  marginLeft: '5%',
  marginRight: '5%',
  marginTop: '5%',
  marginBottom: '5%',
  width: '90%',
  height: 52,
};

const inputStyles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '5%',
    marginBottom: '5%',
    borderBottomColor: '#BAAFAF', // Add this to specify bottom border color
    borderBottomWidth: 1,
  },
  textInput: {
    height: windowHeight * 0.1,
    flexDirection: 'row',
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    marginBottom: 10,
    elevation: 2,
  },
});

const contentContainerStyle = {
  flexGrow: 1,
  paddingVertical: 20,
};

const noteStyles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'column',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '5%',
    marginBottom: '5%',
    borderBottomColor: '#BAAFAF', // Add this to specify bottom border color
    borderBottomWidth: 1,
  },
  textInput: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#EEEDEB',
    textAlignVertical: 'top',
  },
});

const submitButtonStyles = {
  marginLeft: '5%',
  marginRight: '5%',
  marginTop: '5%',
  marginBottom: '5%',
  width: '90%',
  // backgroundColor: '#951515',
};
