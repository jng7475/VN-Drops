import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';

export const postFCMToken = async token => {
  const currentUserID = firebase.auth().currentUser?.uid;
  let existed = false;
  await firestore()
    .collection('FCMToken')
    .doc(currentUserID)
    .get()
    .then(documentSnapshot => {
      if (documentSnapshot.exists) {
        existed = true;
      }
    });
  // if (existed) {
  //   await firestore()
  //     .collection('FCMToken')
  //     .doc(currentUserID)
  //     .update({
  //       tokens: firestore.FieldValue.arrayUnion(token),
  //     });
  // } else {
  await firestore()
    .collection('FCMToken')
    .doc(currentUserID)
    .set({
      tokens: firestore.FieldValue.arrayUnion(token),
    });
  // }
};

export const deleteFCMToken = async () => {
  const currentUserID = firebase.auth().currentUser?.uid;
  await firestore().collection('FCMToken').doc(currentUserID).delete();
};
