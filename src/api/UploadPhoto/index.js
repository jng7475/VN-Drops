import storage from '@react-native-firebase/storage';

export const saveImageToFirebase = async (uri, type, name) => {
  const filename = uri.substring(uri.lastIndexOf('/') + 1);

  try {
    await storage()
      .ref(type + '/' + name)
      .putFile(uri);
  } catch (err) {
    console.log('error ', err);
  }
};
