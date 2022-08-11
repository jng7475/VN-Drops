import { View, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const Input = ({ id, placeholder, setPatientDetails, icon }) => {
  const [value, setValue] = useState('');
  const handleInputChange = text => {
    setValue(text);
    console.log(id);
    const fullname = id === 'fullname' ? text.toLowerCase() : text;
    setPatientDetails(prev => ({
      ...prev,
      [id]: fullname,
    }));
  };
  return (
    <View style={inputStyles.container}>
      {icon}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={text => handleInputChange(text)}
        style={inputStyles.textInput}
      />
    </View>
  );
};

export default Input;

const inputStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // margin: '5%',
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
