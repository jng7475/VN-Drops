import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';

export const postUserDetails = async (userDetails, accountType) => {
  const currentUserID = firebase.auth().currentUser?.uid;
  if (currentUserID) {
    await firestore().collection('users').doc(currentUserID).set({
      email: userDetails.email,
      accountType: accountType,
    });
    await firestore()
      .collection('users')
      .doc(currentUserID)
      .collection('details')
      .doc(currentUserID)
      .set({
        userDetails,
      });
  }
};
