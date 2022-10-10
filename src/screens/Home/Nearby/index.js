import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import styles from './styles';
import HospitalsNearby from '../../../utilities/HospitalsNearby';
const Nearby = () => {
  const hospitals = HospitalsNearby.map((i, index) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.hostipalInfoWrapper}
        onPress={() => Linking.openURL(i.link)}>
        <View style={styles.hosImage}>{i.image}</View>
        <View style={styles.hosInfor}>
          <Text style={styles.heading}>{i.name}</Text>
        </View>
      </TouchableOpacity>
    );
  });
  return <ScrollView style={styles.container}>{hospitals}</ScrollView>;
};

export default Nearby;
