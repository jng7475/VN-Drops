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

export default function MainButton({ image, text, id, navigation }) {
  const handleNavigate = () => {
    navigation.navigate(id);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <Image style={{ maxHeight: 40, maxWidth: 40 }} source={image} />
      <View
        style={{
          width: '65%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: '4.5%',
        }}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: (windowWidth * 5.5) / 10,
    height: (windowHeight * 1.4) / 10,
    borderRadius: 15,
    backgroundColor: '#FFD1D1',
    elevation: 15,
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0.04 * windowWidth,
    flexDirection: 'row',
    paddingHorizontal: '4.5%',
  },
  text: {
    fontFamily: 'NotoSans-Bold',
    fontSize: 19,
    textAlign: 'center',
    color: 'black',
  },
});
