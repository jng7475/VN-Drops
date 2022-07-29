import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import React from 'react';
import { Dimensions } from 'react-native';
import { NewsInfo } from '../../../utilities/newsInfo';

const windowWidth = Dimensions.get('window').width - 20;
const windowHeight = Dimensions.get('window').height;

export default function NewsPieces(props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        Linking.openURL(
          'https://baohatinh.vn/nui-hong-song-la/bi-thu-chi-doan-khuyet-mot-canh-tay-va-35-lan-hien-mau-cuu-nguoi/234440.htm',
        )
      }>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={require('.../../assets/news1.jpg')} />
      </View>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>{props.title}</Text>
      </View>
      <View style={styles.descriptionTextContainer}>
        <Text>{props.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: '90%',
    marginHorizontal: 10,
    backgroundColor: 'lightgray',
    borderRadius: 15,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  imgContainer: {
    position: 'absolute',
    right: 10,
    top: 20,
    bottom: 20,
    width: '30%',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  titleTextContainer: {
    marginVertical: 5,
    marginLeft: 10,
    width: '60%',
  },
  titleText: {
    fontSize: 15,
    fontFamily: 'RobotoSlab-Bold',
  },
  descriptionTextContainer: {
    marginVertical: 5,
    marginLeft: 10,
    width: '60%',
  },
});
