import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';
import { getOneBloodCall } from '../BloodCallCRUD';

export const createUserSOSAppointment = async (
  hospitalID,
  callID,
  noteContent,
) => {
  const currentUserID = firebase.auth().currentUser?.uid;
  console.log(currentUserID);
  const bloodCall = await getOneBloodCall(hospitalID, callID);
  console.log('bbb', bloodCall);
  await firestore().collection('userSOSAppointments').doc(hospitalID).set({
    userID: currentUserID,
    userNote: noteContent,
    dateRegister: new Date(),
  });
};
