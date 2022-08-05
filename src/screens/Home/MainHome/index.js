import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import NewsPieces from './component/NewsPieces';
import { NewsInfo } from '../../../utilities/newsInfo';
import CustomButton from './component/CustomButton';
import { mainButtonData } from '../../../utilities/mainButtonData';
import { scheduleButtonData } from '../../../utilities/mainButtonData';

const windowWidth = Dimensions.get('window').width - 20;
const windowHeight = Dimensions.get('window').height;

const MainHomeScreen = ({ navigation }) => {
  const MainButton = mainButtonData.map(value => {
    return <CustomButton text={value.text} imageLink={value.imageLink} />;
  });
  const NewsPiece = NewsInfo.map((value, index) => {
    return (
      <NewsPieces
        key={index}
        link={value.link}
        title={value.title}
        imageLink={value.imageLink}
      />
    );
  });
  return (
    <View style={styles.container}>
      <View style={styles.curvedLine} />
      <View style={styles.top}>
        <View style={styles.homeTitleWrapper}>
          <Text style={styles.homeTitleText}>VN Drops</Text>
          <Text style={styles.homeSloganText}>Giọt máu cho sự sống</Text>
        </View>
        <View style={styles.importantNewsWrapper}>
          <Text style={styles.importantNewsText}>Thông tin quan trọng !!!</Text>
          <View style={styles.importantNews}>
            <Text>bla bla</Text>
          </View>
        </View>
      </View>
      <View style={styles.mid}>
        <View style={styles.midLine1}>
          <CustomButton
            text={scheduleButtonData.text}
            imageLink={scheduleButtonData.imageLink}
          />
        </View>
        <View style={styles.midOthers}>{MainButton}</View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.newsText}>Tin tức</Text>
        <ScrollView
          horizontal={true}
          style={{ marginTop: '20%', width: windowWidth * 5 }}>
          {NewsPiece}
        </ScrollView>
      </View>
    </View>
  );
};

export default MainHomeScreen;
