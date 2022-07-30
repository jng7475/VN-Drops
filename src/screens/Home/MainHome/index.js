import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles';
import NewsPieces from './component/NewsPieces';
import { NewsInfo } from '../../../utilities/newsInfo';
import CustomButton from './component/CustomButton';
import { mainButtonData } from '../../../utilities/mainButtonData';

const MainHomeScreen = ({ navigation }) => {
  const MainButton = mainButtonData.map(value => {
    return <CustomButton text={value.text} imageLink={value.imageLink} />;
  });
  return (
    <View>
      <Text>fsdg</Text>
      {/* {MainButton} */}
      <CustomButton text={'d'} />
      {MainButton}
    </View>
  );
};

export default MainHomeScreen;
