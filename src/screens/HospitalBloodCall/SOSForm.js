import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Pressable,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { handleHospitalPost } from '../../api/HandleHospitalPost';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from '../Home/Appointment/components/DatePicker';

const SOSForm = ({ navigation }) => {
  const [content, setContent] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [dateValue, setDateValue] = useState(null);
  const [timeValue, setTimeValue] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [mode, setMode] = useState('date');
  const [bloodType, setBloodType] = useState([
    { label: 'O', value: 'O' },
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'AB', value: 'AB' },
  ]);

  const handlePost = () => {
    if (content !== '' && value !== null) {
      handleHospitalPost(content, value);
      // navigation.navigate('Step2');
    }
  };
  const handleShowDatePicker = showMode => {
    setMode(showMode);
    setShowDatePicker(true);
  };

  return (
    <ScrollView contentContainerStyle={contentContainerStyle}>
      <Text>Đơn kêu gọi hiến máu</Text>
      <View>
        <Pressable onPress={() => handleShowDatePicker('date')}>
          <Text>Chọn ngày cuối cùng cần hiến máu</Text>
          <View pointerEvents="none" style={inputStyles.container}>
            {/* {icon} */}
            <TextInput
              placeholder={'Chọn ngày'}
              value={dateValue}
              style={inputStyles.textInput}
            />
          </View>
        </Pressable>
        <Pressable onPress={() => handleShowDatePicker('time')}>
          <Text>Chọn giờ cuối cùng cần máu</Text>
          <View pointerEvents="none" style={inputStyles.container}>
            {/* {icon} */}
            <TextInput
              placeholder={'Chọn giờ'}
              value={timeValue}
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
      <Text>Chọn nhóm máu cần kêu gọi</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={bloodType}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setBloodType}
        listMode="SCROLLVIEW"
        style={dropdownStyles}
        containerStyle={containerStyles}
        placeholder="Chọn nhóm máu"
        showArrowIcon={false}
      />
      {/* <TextInput
        placeholder="Nhập lời nhắn"
        value={content}
        onChangeText={text => setContent(text)}
        style={styles.input}
      /> */}
      <Button title="submit" onPress={handlePost} />
      <Text>{content}</Text>
    </ScrollView>
  );
};

export default SOSForm;

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: '#DCD6D0',
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '80%',
  },
});

const dropdownStyles = {
  backgroundColor: '#EEEDEB',
};
const containerStyles = {
  marginLeft: '10%',
  marginRight: '10%',
  marginTop: '5%',
  marginBottom: '5%',
  width: '80%',
  height: 52,
};

const inputStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: '10%',
    marginRight: '10%',
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
  },
});

const contentContainerStyle = {
  flexGrow: 1,
  paddingVertical: 20,
};
