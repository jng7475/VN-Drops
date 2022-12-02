import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';

export const handleUserSOS = async hospitalID => {
  await firestore()
    .collection('HospitalFCMToken')
    .doc(hospitalID)
    .get()
    .then(documentSnapshot => {
      // console.log(documentSnapshot.data());
      const tokens = documentSnapshot.data().tokens;
      console.log(tokens);
      fetch('https://radiant-garden-75217.herokuapp.com/hospital-post', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tokens: tokens,
          message: {
            title: 'SOS',
            body: 'Có 1 phản hồi mới!',
          },
        }),
      });
    });
};
