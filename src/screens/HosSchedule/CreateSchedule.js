import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { handleSOSCall } from '../../api/HandleSOSCall';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from '../Home/Appointment/components/DatePicker';
import ResponseModal from '../Home/Appointment/components/ResponseModal';
import { createRegularBloodCall } from '../../api/BloodCallCRUD';

const CreateSchedule = ({ navigation }) => {
  const [dateValue, setDateValue] = useState(null);
  const [timeValue, setTimeValue] = useState(null);
  const [orgName, setOrgName] = useState(null);
  const [hospitalAddress, setHospitalAddress] = useState(null);
  const [noteContent, setNoteContent] = useState('');
  const [open, setOpen] = useState(false);
  const [bloodTypeChoice, setBloodTypeChoice] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [mode, setMode] = useState('date');
  const [bloodTypeOptions, setBloodTypeOptions] = useState([
    {
      label: 'O',
      value: 'O',
      icon: () => (
        <Image
          source={require('../../assets/icons/SOSForm/bloodTypeInput.png')}
        />
      ),
    },
    {
      label: 'A',
      value: 'A',
      icon: () => (
        <Image
          source={require('../../assets/icons/SOSForm/bloodTypeInput.png')}
        />
      ),
    },
    {
      label: 'B',
      value: 'B',
      icon: () => (
        <Image
          source={require('../../assets/icons/SOSForm/bloodTypeInput.png')}
        />
      ),
    },
    {
      label: 'AB',
      value: 'AB',
      icon: () => (
        <Image
          source={require('../../assets/icons/SOSForm/bloodTypeInput.png')}
        />
      ),
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');

  const handleSubmit = async () => {
    if (
      noteContent !== '' &&
      // bloodTypeChoice !== null &&
      dateValue !== null &&
      // timeValue !== null &&
      hospitalAddress !== null &&
      orgName !== null
    ) {
      // navigation.navigate('Step2');
      const details = {
        date: dateValue,
        // time: timeValue,
        // bloodAmount: bloodAmount,
        address: hospitalAddress,
        orgName: orgName,
        note: noteContent,
      };
      // console.log(details);
      const status = await createRegularBloodCall(details);
      if (status === 'success') {
        setModalText('Đã kêu gọi thành công!');
        // navigation.navigate('HospitalMainHome');
      }
    } else {
      setModalText('Một hoặc nhiều chi tiết chưa được cung cấp!');
    }
    setModalVisible(true);
  };
  const handleShowDatePicker = showMode => {
    setMode(showMode);
    setShowDatePicker(true);
  };

  return (
    <ScrollView contentContainerStyle={contentContainerStyle}>
      <View style={inputStyles.container}>
        <Image
          source={require('../../assets/icons/SOSForm/bloodAmountInput.png')}
        />
        <TextInput
          placeholder={'Tên đơn vị tổ chức hiến máu'}
          value={orgName}
          onChangeText={text => setOrgName(text)}
          style={inputStyles.textInput}
        />
      </View>
      <View>
        {/* <Pressable onPress={() => handleShowDatePicker('time')}>
          <View pointerEvents="none" style={inputStyles.container}>
            <Image
              source={require('../../assets/icons/SOSForm/timeInput.png')}
            />
            <TextInput
              placeholder={'Thời gian hiến máu'}
              value={timeValue}
              style={inputStyles.textInput}
            />
          </View>
        </Pressable> */}
        <Pressable onPress={() => handleShowDatePicker('date')}>
          <View pointerEvents="none" style={inputStyles.container}>
            <Image
              source={require('../../assets/icons/SOSForm/timeInput.png')}
            />
            <TextInput
              placeholder={'Ngày hiến máu'}
              value={dateValue}
              style={inputStyles.textInput}
            />
          </View>
        </Pressable>
        {showDatePicker && (
          <DatePicker
            setValue={mode === 'date' ? setDateValue : setTimeValue}
            setShow={setShowDatePicker}
            mode={mode}
          />
        )}
      </View>
      <View style={inputStyles.container}>
        <Image
          source={require('../../assets/icons/SOSForm/locationInput.png')}
        />
        <TextInput
          placeholder={'Nhập địa chỉ đầy đủ của bệnh viện'}
          value={hospitalAddress}
          onChangeText={text => setHospitalAddress(text)}
          style={inputStyles.textInput}
        />
      </View>
      {/* <Text>Chọn nhóm máu cần kêu gọi</Text> */}
      {/* <DropDownPicker
        open={open}
        value={bloodTypeChoice}
        items={bloodTypeOptions}
        setOpen={setOpen}
        setValue={setBloodTypeChoice}
        setItems={setBloodTypeOptions}
        listMode="SCROLLVIEW"
        style={dropdownStyles}
        containerStyle={containerStyles}
        placeholder="Chọn nhóm máu"
        showArrowIcon={false}
      /> */}
      {/* <Text>Lưu ý</Text> */}
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

export default CreateSchedule;

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
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
});

const contentContainerStyle = {
  flexGrow: 1,
  paddingVertical: 20,
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

const submitButtonStyles = {
  marginLeft: '5%',
  marginRight: '5%',
  marginTop: '5%',
  marginBottom: '5%',
  width: '90%',
  // backgroundColor: '#951515',
};
