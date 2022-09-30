import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles';

export default function BeforeDonationScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Bạn đã đủ tiêu chuẩn </Text>
        <Text style={styles.title}>hiến máu</Text>
      </View>
      <View style={styles.top}>
        <Text style={styles.topText}>Số lần hiến máu:      01</Text>
        <Text style={styles.topText}>Lần cuối hiến máu:      19/9/2022</Text>
        <Text style={styles.topText}>Tình trạng sức khỏe hiện tại:      Ổn định</Text>
      </View>
      <View style={styles.middle}>
        {/* <Image source={require('../../../../assets/screenshot.jpg')}/> */}
      </View>
      <View style={styles.bottom}></View>
    </View>
  );
}
