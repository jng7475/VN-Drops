import { Platform } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({ setValue, setShow, minimumDate, mode }) => {
  const [date, setDate] = useState(new Date());
  const handleDatePicker = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    const tempDate = new Date(currentDate);
    if (mode === 'time') {
      const fullTime =
        tempDate.getHours() + ' giờ ' + tempDate.getMinutes() + ' phút';
      setValue(fullTime);
    } else {
      const fullDate =
        tempDate.getDate() +
        '/' +
        (tempDate.getMonth() + 1) +
        '/' +
        tempDate.getFullYear();
      setValue(fullDate);
    }
  };
  return (
    <DateTimePicker
      testID="dateTimePicker"
      value={date}
      mode={mode !== undefined ? mode : 'date'}
      is24Hour={true}
      display="default"
      onChange={handleDatePicker}
      minimumDate={minimumDate}
    />
  );
};

export default DatePicker;
