import firestore, { firebase } from '@react-native-firebase/firestore';

export const setCurrentAddress = async (latitude, longitude) => {
  const currentUserID = firebase.auth().currentUser?.uid;
  firestore()
    .collection('users')
    .doc(currentUserID)
    .collection('details')
    .doc(currentUserID)
    .set(
      {
        currentAddress: {
          latitude: latitude,
          longitude: longitude,
        },
      },
      { merge: true },
    );
};
