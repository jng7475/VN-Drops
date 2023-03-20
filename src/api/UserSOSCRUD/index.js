import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';

export const getUserList = async () => {
  const currentUserID = firebase.auth().currentUser?.uid;
  let userList = {};
  await firestore()
    .collection('userSOSAppointments')
    .doc(currentUserID)
    .collection('appointments')
    .get()
    .then(async querySnapshot => {
      const data = await Promise.all(
        querySnapshot.docs.map(async documentSnapshot => {
          return documentSnapshot.data();
        }),
      );
      userList = data;
    });
  return userList;
};