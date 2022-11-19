import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';

export const HealthReport = async result => {
  console.log('health report');
  const currentUserID = firebase.auth().currentUser?.uid;
  if (currentUserID) {
    await firestore()
      .collection('users')
      .doc(currentUserID)
      .collection('medicalProfle')
      .doc(currentUserID)
      .set({
        result,
      });
  }
};
