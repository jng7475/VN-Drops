import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import DateBox from './DateBox';
import { styles } from '../styles';
import { daysToShow } from '../getDaysToShow';

const DateInput = ({ setPatientDetails }) => {
  const [chosenId, setChosenId] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={stlyes.title}>Ngày khám mong muốn</Text>
      <View style={stlyes.dateBoxContainer}>
        {daysToShow.map((day, index) => {
          return (
            <DateBox
              key={index}
              id={index}
              day={day.day}
              month={day.month}
              status={day.status}
              fullform={day.fullform}
              setPatientDetails={setPatientDetails}
              setChosenId={setChosenId}
              chosenId={chosenId}
            />
          );
        })}
      </View>
    </View>
  );
};

export default DateInput;

const stlyes = StyleSheet.create({
  container: {},
  title: {
    fontWeight: 'bold',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '5%',
    marginBottom: '5%',
    fontSize: 15,
  },
  dateBoxContainer: {
    flex: 1,
    flexDirection: 'row',
    // height: '100%',
    // height: 52,
  },
});
