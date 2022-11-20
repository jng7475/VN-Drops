import firestore from '@react-native-firebase/firestore';

export const postAppointmentDetails = async allInfo => {
  if (
    true
    // patientDetails.fullname &&
    // patientDetails.DOB &&
    // patientDetails.phoneNumber &&
    // patientDetails.email &&
    // patientDetails.bloodType &&
    // patientDetails.gender &&
    // patientDetails.hospital &&
    // patientDetails.appointmentDate
  ) {
    firestore()
      .collection('appointments')
      .add(allInfo)
      // .add(personalInfo.bloodType)
      .then(() => {})
      .catch(error => {
        console.log(error);
      });
    return 'success';
  } else {
    return 'failed';
  }
};
