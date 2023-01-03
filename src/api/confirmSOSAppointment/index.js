import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';

export const confirmSOSAppointment = async (userID, appointmentID) => {
  const currentUserID = firebase.auth().currentUser?.uid;
  console.log(userID, appointmentID);
  await firestore()
    .collection('confirmedSOSAppointments')
    .doc(currentUserID)
    .collection('appointments')
    .doc(userID)
    .set({
      appointmentID: appointmentID,
    });
};
export const endSOSCall = async () => {
  const currentUserID = firebase.auth().currentUser?.uid;
  await firestore()
    .collection('userSOSAppointments')
    .doc(currentUserID)
    .collection('appointments')
    .get()
    .then(detailsQuerySnapshot => {
      detailsQuerySnapshot.docs.forEach(callDocumentSnapshot => {
        callDocumentSnapshot.ref.delete();
      });
    });
  await firestore()
    .collection('bloodCalls')
    .doc(currentUserID)
    .collection('calls')
    .get()
    .then(detailsQuerySnapshot => {
      detailsQuerySnapshot.docs.forEach(callDocumentSnapshot => {
        callDocumentSnapshot.ref.delete();
      });
    });
  await firestore()
    .collection('confirmedSOSAppointments')
    .doc(currentUserID)
    .collection('appointments')
    .get()
    .then(detailsQuerySnapshot => {
      detailsQuerySnapshot.docs.forEach(callDocumentSnapshot => {
        callDocumentSnapshot.ref.delete();
      });
    });
};
