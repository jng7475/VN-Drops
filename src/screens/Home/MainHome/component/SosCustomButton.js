import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CustomButton = ({ imageLink, text, id, navigation }) => {
  const handleNavigate = () => {
    navigation.navigate(id);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <Image
        style={{ maxHeight: 60, maxWidth: 60, marginBottom: 12 }}
        source={imageLink}
      />
      <View style={{ width: '80%' }}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: (windowWidth * 4.8) / 10,
    height: (windowHeight * 1.4) / 10,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: '#D13F3F',
    elevation: 25,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0.04 * windowWidth,
  },
  text: {
    fontFamily: 'NotoSans-Bold',
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
  },
});
export default CustomButton;
