// import firestore from '@react-native-firebase/firestore';
// import { firebase } from '@react-native-firebase/auth';

// export const UpdateUserInfo = async newInfo => {
//   console.log('health report');
//   const currentUserID = newInfo.id;
//   if (currentUserID) {
//     await firestore()
//       .collection('users')
//       .doc(currentUserID)
//       .collection('hosUpdate')
//       .add(newInfo)
//       .then(() => {});
//     // .collection('medicalProfile')
//     // .doc(currentUserID)
//     // .set({
//     //   newInfo,
//     // });
//   }
//   return 'success';
// };

import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';

export const UpdateUserInfo = async newInfo => {
  console.log('UpdateUserInfo');
  let currentUserID = 'FbVjopjrsYYeTxjJHn6F2u88fmY2';
  if (currentUserID) {
    await firestore()
      .collection('users')
      .doc(currentUserID)
      .collection('medicalProfile')
      .doc(currentUserID)
      .set({
        newInfo,
      });
  }
  return 'success';
};
