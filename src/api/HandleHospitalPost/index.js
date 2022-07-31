// Node.js
// var admin = require('firebase-admin');

// var serviceAccount = require('/Users/trungnguyen/Documents/VNDrops/service-account-file.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

export async function handleHospitalPost(ownerId, userId, picture) {
  // Get the owners details
  // const userDevices = admin
  //   .firestore()
  //   .collection('FCMToken')
  //   .get()
  //   .then(querySnapshot => {
  //     querySnapshot.map(documentSnapshot => {
  //       const data = documentSnapshot.data();
  //       return data.token;
  //     });
  //   });
  // console.log(userDevices);
  console.log('test');
  // // Get the users details
  // const user = admin.firestore().collection('users').doc(userId).get();

  // await admin.messaging().sendToDevice(
  //   userDevices.tokens, // ['token_1', 'token_2', ...]
  //   {
  //     data: {
  //       owner: JSON.stringify(userDevices),
  //       user: JSON.stringify(user),
  //       picture: JSON.stringify(picture),
  //     },
  //   },
  //   {
  //     // Required for background/quit data-only messages on iOS
  //     contentAvailable: true,
  //     // Required for background/quit data-only messages on Android
  //     priority: 'high',
  //   },
  // );
}
