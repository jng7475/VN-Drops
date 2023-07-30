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

export default function ChoosingPage({ text, id, setChoice }) {
  const handleNavigate = () => {
    setChoice(id);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      {/* <Image style={{ maxHeight: 40, maxWidth: 40 }} source={image} /> */}
      <View style={{ width: '80%' }}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: (windowWidth * 5) / 10,
    height: (windowHeight * 1.2) / 10,
    borderRadius: 15,
    backgroundColor: 'lightyellow',
    // backgroundColor: '#F5F5F5',
    elevation: 15,
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0.04 * windowWidth,
  },
  text: {
    fontFamily: 'Khand-Bold',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
