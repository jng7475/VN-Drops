import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';

export const postUserDetails = async user => {
  const currentUserID = firebase.auth().currentUser?.uid;
  if (currentUserID) {
    await firestore().collection('users').doc(currentUserID).set({
      email: user.email,
      fullName: user.fullname,
      phoneNumber: user.phoneNumber,
      accountType: user.accountType,
    });
  }
};
