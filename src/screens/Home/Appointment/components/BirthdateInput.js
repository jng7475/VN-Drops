import { View, TextInput, Platform, Pressable, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from './DatePicker';

const BirthdateInput = ({ id, placeholder, setPatientDetails, icon }) => {
  const [value, setValue] = useState('');
  useEffect(() => {
    if (value) {
      setPatientDetails(prev => ({
        ...prev,
        [id]: value,
      }));
    }
  }, [value, id, setPatientDetails]);

  const [show, setShow] = useState(false);

  const handleShowDatePicker = () => {
    setShow(true);
  };
  return (
    <View>
      <Pressable onPress={handleShowDatePicker}>
        <View pointerEvents="none" style={inputStyles.container}>
          {icon}
          <TextInput
            placeholder={placeholder}
            value={value}
            style={inputStyles.textInput}
          />
        </View>
      </Pressable>
      {show && <DatePicker setValue={setValue} setShow={setShow} />}
    </View>
  );
};

export default BirthdateInput;

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
