import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import AdvancedText from '../../components/advancedText';
import { mainHosButtonData } from '../../utilities/mainHosButtonData';
import MainButton from './component/mainButton';
import MyText from '../../components/text';
export default function HospitalHomeScreen({ navigation }) {
  const mainButtons = mainHosButtonData.map((value, index) => {
    return (
      <MainButton
        key={index}
        text={value.text}
        image={value.image}
        id={value.id}
        navigation={navigation}
      />
    );
  });
  return (
    <View style={styles.container}>
      <View styles={styles.top}>
        <View style={{ width: '100%' }}>
          <Image source={require('../../assets/hosHomeBackground.png')} />
        </View>
        <View style={styles.title}>
          <AdvancedText
            text="Quản lý bệnh viện"
            size={21}
            family="RobotoSlab-Bold"
            color="#B51515"
            align="center"
          />
        </View>
      </View>
      <View style={styles.bottom}>{mainButtons}</View>
    </View>
  );
}
