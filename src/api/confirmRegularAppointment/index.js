import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';

export const confirmRegularAppointment = async (userID, appointmentID) => {
  const currentUserID = firebase.auth().currentUser?.uid;
  await firestore()
    .collection('confirmedRegularAppointments')
    .doc(currentUserID)
    .collection('appointments')
    .doc(userID)
    .set({
      appointmentID: appointmentID,
    });
  await firestore()
    .collection('userRegularAppointments')
    .doc(currentUserID)
    .collection('appointments')
    .doc(userID)
    .delete();
};
