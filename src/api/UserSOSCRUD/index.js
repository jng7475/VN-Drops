import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';

export const getUserList = async () => {
  const currentUserID = firebase.auth().currentUser?.uid;
  await firestore()
    .collection('bloodCalls')
    .doc(currentUserID)
    .get()
    .then(documentSnapshot => {
      console.log(documentSnapshot.data());
    });
};
