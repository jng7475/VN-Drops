import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';

export const createBloodCall = async (bloodType, hospitalName) => {
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
        bloodType: bloodType,
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
        bloodType: bloodType,
      });
  }
};

export const deleteBloodCall = async () => {};

export const getBloodCalls = async () => {
  let bloodCalls = [];
  await firestore()
    .collection('bloodCalls')
    .get()
    .then(querySnapshot => {
      querySnapshot.docs.forEach(async documentSnapshot => {
        let bloodCallDetails = {};
        const data = documentSnapshot.data();
        // const hospitalName = data.hospitalName;
        bloodCallDetails.hospitalName = data.hospitalName;
        bloodCallDetails.calls = [];
        const id = documentSnapshot.id;
        await firestore()
          .collection('bloodCalls')
          .doc(id)
          .collection('calls')
          .get()
          .then(detailsQuerySnapshot => {
            detailsQuerySnapshot.docs.forEach(callDocumentSnapshot => {
              const callData = callDocumentSnapshot.data();
              const callID = callDocumentSnapshot.id;
              /*NEED WORK HERE*/
              // pass blood type through args
              // console.log(callData, callID);
              bloodCallDetails.calls.push({
                callData: callData,
                callID: callID,
              });
              bloodCalls.push(bloodCallDetails);
            });
            // console.log(bloodCallDetails.calls[0].callData);
            console.log('from', bloodCalls);
          });
      });
    });
  // .then(console.log(bloodCalls));
  return bloodCalls;
};
