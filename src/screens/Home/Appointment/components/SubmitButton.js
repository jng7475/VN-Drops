import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

const SubmitButton = ({ title, handleScheduleAppointment }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1.0 },
        styles.container,
      ]}
      onPress={handleScheduleAppointment}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C91414',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '5%',
    marginBottom: '5%',
    borderRadius: 19,
    // height: 57,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    padding: 17,
    fontSize: 19,
  },
});
