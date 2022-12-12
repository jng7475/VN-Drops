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
        style={{ maxHeight: 40, maxWidth: 40, marginBottom: '5%' }}
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
    // width: (windowWidth * 4) / 10,
    // height: (windowHeight * 1) / 10,
    // borderRadius: 15,
    // backgroundColor: '#E8F3FE',
    // elevation: 15,
    // shadowColor: '#000000',
    // shadowOpacity: 0.5,
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: 0.04 * windowWidth,
    width: (windowWidth * 4.8) / 10,
    height: (windowHeight * 1.3) / 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#E8F3FE',
    elevation: 25,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0.04 * windowWidth,
  },
  text: {
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 17,
    textAlign: 'center',
    color: 'black',
  },
});
export default CustomButton;
