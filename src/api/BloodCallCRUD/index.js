import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';

export const createBloodCall = async (callDetails, hospitalName) => {
  const currentUserID = firebase.auth().currentUser?.uid;
  let existed = false;
  await firestore()
    .collection('bloodCalls')
    .doc(currentUserID)
    .get()
    .then(documentSnapshot => {
      if (documentSnapshot.exists) {
        existed = true;
      }
    });
  if (existed) {
    await firestore()
      .collection('bloodCalls')
      .doc(currentUserID)
      .collection('calls')
      .add({
        date: callDetails.date,
        time: callDetails.time,
        bloodAmount: callDetails.bloodAmount,
        address: callDetails.address,
        bloodType: callDetails.bloodType,
        note: callDetails.note,
      });
  } else {
    await firestore()
      .collection('bloodCalls')
      .doc(currentUserID)
      .set({ hospitalName: hospitalName });
    await firestore()
      .collection('bloodCalls')
      .doc(currentUserID)
      .collection('calls')
      .add({
        date: callDetails.date,
        time: callDetails.time,
        bloodAmount: callDetails.bloodAmount,
        address: callDetails.address,
        bloodType: callDetails.bloodType,
        note: callDetails.note,
      });
  }
};

export const deleteBloodCall = async () => {};

export const getBloodCalls = async () => {
  let bloodCalls = [];
  await firestore()
    .collection('bloodCalls')
    .get()
    .then(async querySnapshot => {
      const data = await Promise.all(
        querySnapshot.docs.map(async documentSnapshot => {
          let bloodCallDetails = {};
          const hospitalData = documentSnapshot.data();
          bloodCallDetails.hospitalName = hospitalData.hospitalName;
          // bloodCallDetails.calls = [];
          const id = documentSnapshot.id;
          // let details = [];
          bloodCallDetails.calls = await getBloodCallDetails(id);
          return bloodCallDetails;
        }),
      );
      bloodCalls = data;
    });

  return bloodCalls;
};
const getBloodCallDetails = async id => {
  let bloodCallDetails = [];
  await firestore()
    .collection('bloodCalls')
    .doc(id)
    .collection('calls')
    .get()
    .then(detailsQuerySnapshot => {
      detailsQuerySnapshot.docs.forEach(callDocumentSnapshot => {
        const callData = callDocumentSnapshot.data();
        const callID = callDocumentSnapshot.id;
        bloodCallDetails.push({
          callData: callData,
          callID: callID,
        });
      });
    });
  return bloodCallDetails;
};
