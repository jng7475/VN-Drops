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

const CustomButton = props => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={{ maxHeight: 40, maxWidth: 40 }} source={props.imageLink} />
      <View style={{ width: '80%' }}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: (windowWidth * 4.2) / 10,
    height: (windowHeight * 1.1) / 10,
    borderRadius: 15,
    backgroundColor: '#F5F5F5',
    elevation: 15,
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0.04 * windowWidth,
  },
  text: {
    fontFamily: 'RobotoSlab-SemiBold',
    fontSize: 14,
    textAlign: 'center',
  },
});
export default CustomButton;
