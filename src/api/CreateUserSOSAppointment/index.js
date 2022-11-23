import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';
import { getOneBloodCall } from '../BloodCallCRUD';

export const createUserSOSAppointment = async (
  hospitalID,
  callID,
  noteContent,
) => {
  const currentUserID = firebase.auth().currentUser?.uid;
  // console.log(currentUserID);
  const bloodCall = await getOneBloodCall(hospitalID, callID);
  // console.log('bbb', bloodCall);
  const tempDate = new Date();
  const fullTime =
    tempDate.getHours() + ' giờ ' + tempDate.getMinutes() + ' phút';
  const fullDate =
    tempDate.getDate() +
    '/' +
    (tempDate.getMonth() + 1) +
    '/' +
    tempDate.getFullYear();
  await firestore()
    .collection('userSOSAppointments')
    .doc(hospitalID)
    .collection('appointments')
    .doc(currentUserID)
    .set({
      userID: currentUserID,
      userNote: noteContent,
      dateRegister: fullTime + ' - ' + fullDate,
    });
};
