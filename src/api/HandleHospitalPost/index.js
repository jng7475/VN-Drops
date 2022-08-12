import firestore from '@react-native-firebase/firestore';

export async function handleHospitalPost(message) {
  firestore()
    .collection('FCMToken')
    .get()
    .then(querySnapshot => {
      querySnapshot.docs.map(documentSnapshot => {
        const tokens = documentSnapshot.data().tokens;
        // console.log(tokens);
        fetch('https://radiant-garden-75217.herokuapp.com/hospital-post', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            tokens: tokens,
            message: {
              title: 'From Hospital',
              body: message,
            },
          }),
        });
      });
    });
}
