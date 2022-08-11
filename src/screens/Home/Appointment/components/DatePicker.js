import { Platform } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({ setValue, setShow, minimumDate }) => {
  const [date, setDate] = useState(new Date());
  const handleDatePicker = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    const tempDate = new Date(currentDate);
    const fullDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    setValue(fullDate);
  };
  return (
    <DateTimePicker
      testID="dateTimePicker"
      value={date}
      mode="date"
      is24Hour={true}
      display="default"
      onChange={handleDatePicker}
      minimumDate={minimumDate}
    />
  );
};

export default DatePicker;
