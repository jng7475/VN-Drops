import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';
import { createBloodCall } from '../BloodCallCRUD';

export async function handleHospitalPost(message, bloodType) {
  // get eligible users based on blood type (for now)
  const eligibleUsers = await getEligibleUsers(bloodType);
  const hospitalName = await getHospitalInfo();
  const messageTitle = 'Thông báo khẩn cấp từ bệnh viện ' + hospitalName;
  await createBloodCall(bloodType, message, hospitalName);
  await firestore()
    .collection('FCMToken')
    .get()
    .then(querySnapshot => {
      querySnapshot.docs.map(documentSnapshot => {
        if (eligibleUsers[documentSnapshot.id] === 1) {
          const tokens = documentSnapshot.data().tokens;
          // fetch('https://radiant-garden-75217.herokuapp.com/hospital-post', {
          //   method: 'post',
          //   headers: {
          //     'Content-Type': 'application/json',
          //   },
          //   body: JSON.stringify({
          //     tokens: tokens,
          //     message: {
          //       title: messageTitle,
          //       body: message,
          //     },
          //   }),
          // });
        }
      });
    });
}

const getEligibleUsers = async bloodType => {
  let eligibleUsers = {};
  await firestore()
    .collection('users')
    .get()
    .then(querySnapshot => {
      querySnapshot.docs.forEach(documentSnapshot => {
        const data = documentSnapshot.data();
        const id = documentSnapshot.id;
        if (data.accountType === 'user') {
          firestore()
            .collection('users')
            .doc(id)
            .collection('details')
            .get()
            .then(detailsQuerySnapshot => {
              detailsQuerySnapshot.docs.forEach(detailsDocumentSnapshot => {
                const detailsData = detailsDocumentSnapshot.data();
                /*NEED WORK HERE*/
                // pass blood type through args
                if (detailsData.userDetails.bloodType === bloodType) {
                  eligibleUsers[id] = 1;
                } else {
                  eligibleUsers[id] = -1;
                }
              });
            });
        }
      });
    });
  return eligibleUsers;
};

const getHospitalInfo = async () => {
  let hospitalName = '';
  const hospitalID = firebase.auth().currentUser?.uid;
  await firestore()
    .collection('users')
    .doc(hospitalID)
    .collection('details')
    .get()
    .then(detailsQuerySnapshot => {
      detailsQuerySnapshot.docs.forEach(detailsDocumentSnapshot => {
        const detailsData = detailsDocumentSnapshot.data();
        /*NEED WORK HERE*/
        // pass blood type through args
        hospitalName = detailsData.userDetails.fullname;
      });
    });
  return hospitalName;
};
