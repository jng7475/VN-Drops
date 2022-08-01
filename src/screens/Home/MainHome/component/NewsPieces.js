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
      <View style={styles.redLine} />
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={props.imageLink} />
      </View>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>{props.title}</Text>
      </View>
      <View style={styles.descriptionTextContainer}>
        <Text style={styles.descriptionText}>{props.description}</Text>
      </View>
      <Image
        style={styles.arrow}
        source={require('../../../../assets/arrow.png')}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth - 20,
    height: '90%',
    marginHorizontal: 20,
    // backgroundColor: '#E3242B',
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 15,
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    display: 'flex',
    flexDirection: 'row',
  },
  redLine: {
    left: 0,
    top: 10,
    height: 40,
    width: 3,
    backgroundColor: 'red',
    zIndex: 1,
  },
  imgContainer: {
    width: '30%',
    margin: 10,
    borderRadius: 30,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  titleTextContainer: {
    marginVertical: 15,
    width: '55%',
  },
  titleText: {
    fontSize: 13,
    color: 'black',
    fontFamily: 'RobotoSlab-Bold',
    ellipsizeMode: 'tail',
  },
  descriptionTextContainer: {
    marginVertical: 35,
    marginLeft: 10,
    width: '62%',
  },
  descriptionText: {
    color: 'black',
    fontFamily: 'RobotoSlab-Light',
  },
  arrow: {
    position: 'absolute',
    right: 0,
    top: '30%',
  },
});
