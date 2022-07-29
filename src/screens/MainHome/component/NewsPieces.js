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
      onPress={() => Linking.openURL(props.link)}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={props.imageLink} />
      </View>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>{props.title}</Text>
      </View>
      <View style={styles.descriptionTextContainer}>
        <Text style={styles.descriptionText}>{props.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: '90%',
    marginHorizontal: 10,
    // backgroundColor: '#E3242B',
    backgroundColor: '#C9F5D9',
    borderRadius: 15,
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
    color: 'black',

    fontFamily: 'RobotoSlab-Bold',
  },
  descriptionTextContainer: {
    marginVertical: 5,
    marginLeft: 10,
    width: '62%',
  },
  descriptionText: {
    color: 'black',
    fontFamily: 'RobotoSlab-Light',
  },
});
