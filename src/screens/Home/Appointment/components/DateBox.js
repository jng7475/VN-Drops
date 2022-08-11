import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import DatePicker from './DatePicker';

const DateBox = ({
  day,
  month,
  status,
  fullform,
  setPatientDetails,
  id,
  chosenId,
  setChosenId,
}) => {
  const [value, setValue] = useState('');
  const [chosenDate, setChosenDate] = useState(null);
  useEffect(() => {
    if (value !== '') {
      const firstSlashIndex = value.indexOf('/');
      const chosenDay = value.substring(0, firstSlashIndex);
      const secondSlashIndex = value.indexOf('/', firstSlashIndex + 1);
      const chosenMonth = value.substring(
        firstSlashIndex + 1,
        secondSlashIndex,
      );
      setChosenDate({
        day: chosenDay,
        month: chosenMonth,
      });
    }
  }, [value]);

  const [show, setShow] = useState(false);

  const handleOnPress = () => {
    if (day !== null && month !== null && status !== '' && fullform !== null) {
      setPatientDetails(prev => ({
        ...prev,
        appointmentDate: fullform,
      }));
    } else {
      setShow(true);
    }
    setChosenId(id);
  };

  return (
    <View
      style={
        id === 0
          ? styles.containerFirst
          : id === 3
          ? styles.containerLast
          : styles.container
      }>
      <Pressable
        style={chosenId === id ? styles.selectedDateBox : styles.dateBox}
        onPress={handleOnPress}>
        <Text>
          {month !== null || chosenDate !== null ? 'Tháng ' : ''}
          {month !== null ? month : ''}
          {month === null && chosenDate !== null ? chosenDate.month : ''}
        </Text>
        <Text>
          {day}
          {day === null && chosenDate !== null ? chosenDate.day : ''}
        </Text>
      </Pressable>
      <Text style={styles.dayStatus}>{status !== '' ? status : 'Khác'}</Text>
      {show && (
        <DatePicker
          setValue={setValue}
          setShow={setShow}
          minimumDate={new Date()}
        />
      )}
    </View>
  );
};

export default DateBox;

const styles = StyleSheet.create({
  container: {
    marginLeft: '2.5%',
    marginRight: '2.5%',
    // height: '100%',
    width: '16.25%',
  },
  containerFirst: {
    marginLeft: '10%',
    marginRight: '2.5%',
    // height: '100%',
    width: '16.25%',
  },
  containerLast: {
    marginLeft: '2.5%',
    // height: '100%',
    width: '16.25%',
  },
  dateBox: {
    backgroundColor: '#EEEDEB',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 71,
  },
  selectedDateBox: {
    backgroundColor: '#C91414',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 71,
  },
  dayStatus: {
    textAlign: 'center',
  },
});
