import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';
import { getHospitalInfo } from '../HandleSOSCall';

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
          // console.log(documentSnapshot.id);
          let bloodCallDetails = {};
          const hospitalData = documentSnapshot.data();
          bloodCallDetails.hospitalName = hospitalData.hospitalName;
          // bloodCallDetails.calls = [];
          const id = documentSnapshot.id;
          // let details = [];
          bloodCallDetails.hospitalID = id;
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

export const getOneBloodCall = async (hospitalID, callID) => {
  // console.log(hospitalID, 'aaa', callID);
  const bloodCall = await firestore()
    .collection('bloodCalls')
    .doc(hospitalID)
    .collection('calls')
    .doc(callID)
    .get()
    .then(documentSnapshot => {
      // console.log(documentSnapshot.data());
      return documentSnapshot.data();
    });
  // console.log(bloodCall);
  return bloodCall;
};

export const createRegularBloodCall = async callDetails => {
  const hospitalName = await getHospitalInfo();
  const currentUserID = firebase.auth().currentUser?.uid;
  let existed = false;
  await firestore()
    .collection('regularBloodCalls')
    .doc(currentUserID)
    .get()
    .then(documentSnapshot => {
      if (documentSnapshot.exists) {
        existed = true;
      }
    });
  if (existed) {
    await firestore()
      .collection('regularBloodCalls')
      .doc(currentUserID)
      .collection('calls')
      .add({
        date: callDetails.date,
        // time: callDetails.time,
        address: callDetails.address,
        note: callDetails.note,
        orgName: callDetails.orgName,
      })
      .catch(err => {
        console.log(err);
        return 'failed';
      });
  } else {
    await firestore()
      .collection('regularBloodCalls')
      .doc(currentUserID)
      .set({ hospitalName: hospitalName });
    await firestore()
      .collection('regularBloodCalls')
      .doc(currentUserID)
      .collection('calls')
      .add({
        date: callDetails.date,
        // time: callDetails.time,
        address: callDetails.address,
        note: callDetails.note,
        orgName: callDetails.orgName,
      })
      .catch(err => {
        console.log(err);
        return 'failed';
      });
  }
  return 'success';
};

// get blood calls for regular blood calls
export const getRegularBloodCalls = async () => {
  let bloodCalls = [];
  await firestore()
    .collection('regularBloodCalls')
    .get()
    .then(async querySnapshot => {
      const data = await Promise.all(
        querySnapshot.docs.map(async documentSnapshot => {
          // console.log(documentSnapshot.id);
          let bloodCallDetails = {};
          const hospitalData = documentSnapshot.data();
          bloodCallDetails.hospitalName = hospitalData.hospitalName;
          // bloodCallDetails.calls = [];
          const id = documentSnapshot.id;
          // let details = [];
          bloodCallDetails.hospitalID = id;
          bloodCallDetails.calls = await getRegularBloodCallDetails(id);
          return bloodCallDetails;
        }),
      );
      bloodCalls = data;
    });

  return bloodCalls;
};

const getRegularBloodCallDetails = async id => {
  let bloodCallDetails = [];
  await firestore()
    .collection('regularBloodCalls')
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
