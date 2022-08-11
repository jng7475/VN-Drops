import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import React, { useEffect, useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LocationInput = ({ setPatientDetails }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [hospitals, setHospital] = useState([
    { label: 'Vinmec', value: 'Vinmec' },
    { label: 'Hoàn Mỹ', value: 'Hoàn Mỹ' },
  ]);
  useEffect(() => {
    setPatientDetails(prev => ({
      ...prev,
      hospital: value,
    }));
  }, [value, setPatientDetails]);

  return (
    <View>
      {/* <FontAwesome name="location-arrow" size={30} /> */}
      <Text style={styles.title}>Địa điểm</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={hospitals}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setHospital}
        listMode="SCROLLVIEW"
        style={dropdownStyles}
        containerStyle={containerStyles}
        placeholder="Chọn địa điểm"
        showArrowIcon={false}
      />
    </View>
  );
};

export default LocationInput;

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
const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '5%',
    marginBottom: '5%',
    fontSize: 17,
  },
});
