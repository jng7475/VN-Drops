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
      <Image source={props.imageLink} />
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: (windowWidth * 4) / 10,
    height: windowHeight / 10,
    borderRadius: 15,
    backgroundColor: '#F5F5F5',
    elevation: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default CustomButton;
