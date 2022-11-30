import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
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
import { scheduleButtonData } from '../../../utilities/mainButtonData';
import CustomButton from '../MainHome/component/CustomButton';
import { ImportantNews } from './components/importantNews';
import { getPersonalInfo, setUserStatus } from '../../../api/GetPersonalInfo';
import { getUserHealth } from '../../../api/GetUserHealth';

const Appointment = ({ navigation }) => {
  const [patientDetails, setPatientDetails] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');
  let personalInfo = {};
  // const [personalInfo, setPersonalInfo] = useState({});
  // const [userHealth, setUserHealth] = useState();

  const handleScheduleAppointment = async () => {
    personalInfo = await getPersonalInfo();
    const userHealth = await getUserHealth();
    // console.log(userHealth);
    let allInfo = { ...patientDetails, personalInfo };
    allInfo = { ...allInfo, userHealth };
    const status = await postAppointmentDetails(allInfo);
    // console.log(allInfo);
    console.log('status ', status);
    if (status === 'success') {
      setModalText('Đã đặt hẹn thành công!');
      setUserStatus('appointment');
    } else {
      setModalText('Một hoặc nhiều chi tiết chưa được cung cấp!');
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
  // const scheduleButton = scheduleButtonData.map((value, index) => {
  //   return (
  //     <CustomButton
  //       key={index}
  //       text={value.text}
  //       imageLink={value.imageLink}
  //       id={value.id}
  //       navigation={navigation}
  //     />
  //   );
  // });
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={contentContainerStyle}>
        {/* <Text style={styles.title}>Thông tin người đặt lịch</Text>
        <View style={styles.textInput}>{Inputs}</View>
        <GenderInput
          style={styles.genderInput}
          setPatientDetails={setPatientDetails}
        /> */}
        {/* <View style={styles.buttonWrapper}>{scheduleButton}</View> */}
        <View style={{ width: '100%', height: '5%' }} />
        <Text style={styles.title}>Đặt lịch</Text>
        <LocationInput setPatientDetails={setPatientDetails} />
        <DateInput setPatientDetails={setPatientDetails} />
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
      </ScrollView>
    </View>
  );
};

export default Appointment;

const contentContainerStyle = {
  flexGrow: 1,
  paddingVertical: 20,
};
