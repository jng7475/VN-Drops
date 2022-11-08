import firestore from '@react-native-firebase/firestore';

export async function handleHospitalPost(message) {
  let eligibleUsers = {};
  await firestore()
    .collection('users')
    .get()
    .then(querySnapshot => {
      querySnapshot.docs.forEach(documentSnapshot => {
        const data = documentSnapshot.data();
        const id = documentSnapshot.id;
        if (data.accountType === 'user') {
          firestore()
            .collection('users')
            .doc(id)
            .collection('details')
            .get()
            .then(detailsQuerySnapshot => {
              detailsQuerySnapshot.docs.forEach(detailsDocumentSnapshot => {
                const detailsData = detailsDocumentSnapshot.data();
                /*NEED WORK HERE*/
                // pass blood type through args
                if (detailsData.userDetails.bloodType === 'O') {
                  eligibleUsers[id] = 1;
                } else {
                  eligibleUsers[id] = -1;
                }
              });
            });
        }
      });
    });

  await firestore()
    .collection('FCMToken')
    .get()
    .then(querySnapshot => {
      querySnapshot.docs.map(documentSnapshot => {
        const uid = documentSnapshot.id;
        if (eligibleUsers[documentSnapshot.id] === 1) {
          const tokens = documentSnapshot.data().tokens;
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
        }
      });
    });
}
