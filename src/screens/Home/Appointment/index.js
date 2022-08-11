import { Text, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { AppointmentInputs } from '../../../utilities/AppointmentInputs';
import { styles } from './styles';
import Input from './components/Input';
import BirthdateInput from './components/BirthdateInput';
import GenderInput from './components/GenderInput';
import LocationInput from './components/LocationInput';
import DateInput from './components/DateInput';
import SubmitButton from './components/SubmitButton';
import { postAppointmentDetails } from '../../../api/PostAppointment';
import ResponseModal from './components/ResponseModal';

const Appointment = ({ navigation }) => {
  const [patientDetails, setPatientDetails] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');

  const handleScheduleAppointment = async () => {
    console.log(patientDetails);
    const status = await postAppointmentDetails(patientDetails);
    console.log('status ', status);
    if (status === 'success') {
      setModalText('Appointment Successfully Scheduled!');
    } else {
      setModalText('One or more fields missing!');
    }
    setModalVisible(true);
  };

  const Inputs = AppointmentInputs.map((input, index) => {
    return input.id === 'DOB' ? (
      <BirthdateInput
        key={index}
        id={input.id}
        placeholder={input.placeholder}
        setPatientDetails={setPatientDetails}
        icon={input.icon}
      />
    ) : (
      <Input
        key={index}
        id={input.id}
        placeholder={input.placeholder}
        setPatientDetails={setPatientDetails}
        icon={input.icon}
      />
    );
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={contentContainerStyle}>
        <Text style={styles.title}>Thông tin người đặt lịch</Text>
        <View style={styles.textInput}>{Inputs}</View>
        <GenderInput
          style={styles.genderInput}
          setPatientDetails={setPatientDetails}
        />
        <LocationInput setPatientDetails={setPatientDetails} />
        <DateInput setPatientDetails={setPatientDetails} />
      </ScrollView>
      <SubmitButton
        handleScheduleAppointment={handleScheduleAppointment}
        title="Đặt hẹn"
      />
      <ResponseModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalText={modalText}
        navigation={navigation}
      />
    </View>
  );
};

export default Appointment;

const contentContainerStyle = {
  flexGrow: 1,
  paddingBottom: 10,
};
