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



// import { View, Text, ScrollView, Alert, Modal } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import { getRegularBloodCalls } from '../../../api/BloodCallCRUD';
// import AppointmentCard from './components/AppointmentCard';
// import AppointmentConfirmation from './components/AppointmentConfirmation';

// const Appointment = ({ navigation }) => {
//   const [bloodCalls, setBloodCalls] = useState([]);
//   const [selected, setSelected] = useState(false);
//   const [hospitalDetails, setHospitalDetails] = useState({});
  
//   const [modalVisible, setModalVisible] = useState(false);
//   const [modalText, setModalText] = useState('');
//   const handlePress = hospitalInfo => {
//     setSelected(true);
//     setHospitalDetails(hospitalInfo);
//   };

//   useEffect(() => {
//     getRegularBloodCalls()
//       .then(data => {
//         // console.log('data', data[0].calls);
//         setBloodCalls(data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <ScrollView style={{ backgroundColor: '#F6F6F6' }}>
//       <Text>{'LỊCH HIẾN MÁU'}</Text>
//       {selected === false ? (
//         bloodCalls.map((hospital, index) => {
//           return (
//             <View key={'hospital ' + index}>
//               {hospital.calls.map((call, callIndex) => {
//                 // console.log('test', call.callData);
//                 return (
//                   <AppointmentCard
//                     key={'call ' + callIndex}
//                     hospitalName={hospital.hospitalName}
//                     hospitalID={hospital.hospitalID}
//                     callData={call.callData}
//                     callID={call.callID}
//                     handlePress={handlePress}
//                   />
//                 );
//               })}
//               <View>
//                 <Text
//                   // eslint-disable-next-line react-native/no-inline-styles
//                   style={{
//                     color: '#5C2D2D',
//                     paddingLeft: 5,
//                     fontSize: 16,
//                     fontWeight: '600',
//                   }}>
//                   LƯU Ý: Thời gian đăng ký tham gia hiến máu tại các địa điểm
//                   trên: từ 7h đến 10h
//                 </Text>
//               </View>
//             </View>
//           );
//         })
//       ) : (
//         <AppointmentConfirmation
//           hospitalDetails={hospitalDetails}
//           navigation={navigation}
//           setSelected={setSelected}
//         />
//       )}
//     </ScrollView>
//   );
// };

// export default Appointment;
