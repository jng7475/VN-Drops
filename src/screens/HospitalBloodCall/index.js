import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';
import { handleHospitalPost } from '../../api/HandleHospitalPost';
import DropDownPicker from 'react-native-dropdown-picker';

const HospitalBloodCall = () => {
  const [content, setContent] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [bloodType, setBloodType] = useState([
    { label: 'O', value: 'O' },
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'AB', value: 'AB' },
  ]);

  const handlePost = () => {
    if (content !== '' && value !== null) {
      handleHospitalPost(content, value);
    }
  };

  return (
    <View>
      <Text>Đơn kêu gọi hiến máu</Text>
      <TextInput
        placeholder="Nhập lời nhắn"
        value={content}
        onChangeText={text => setContent(text)}
        style={styles.input}
      />
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
      <Button title="submit" onPress={handlePost} />
      <Text>{content}</Text>
    </View>
  );
};

export default HospitalBloodCall;

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
