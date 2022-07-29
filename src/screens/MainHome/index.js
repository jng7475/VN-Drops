import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles';
import CustomBigButton from './component/CustomBigButton';
import CustomSmallButton from './component/CustomSmallButton';
import NewsPieces from './component/NewsPieces';
import { NewsInfo } from '../../utilities/newsInfo';

const MainHomeScreen = ({ navigation }) => {
  const NewsPiece = NewsInfo.map(index => {
    return <NewsPieces title={index.title} description={index.description} />;
  });
  return (
    <View style={styles.container}>
      <View style={styles.curvedLine} />
      {/* top (name and profile image*/}
      <View style={styles.top}>
        <View style={{ marginBottom: 15 }}>
          <Text style={styles.userName}>Nguyen Thanh Trung</Text>
        </View>
        <Image
          style={styles.image}
          source={require('../../assets/profile.jpg')}
        />
      </View>
      {/* middle (main function*/}
      <View style={styles.mid}>
        <View style={styles.mainFunc}>
          <View style={styles.mainButtonWrapper}>
            <View style={styles.topWrapper}>
              <CustomBigButton navigation={navigation} />
            </View>
            <View style={styles.bottomWrapper}>
              <CustomSmallButton
                image={require('../../assets/question.png')}
                text={'Hỏi Đáp'}
                navigation={navigation}
                route={'Forum'}
              />
              <CustomSmallButton
                image={require('../../assets/achievement.png')}
                text={'Thành tích'}
                navigation={navigation}
                route={'Achievement'}
              />
            </View>

            {/* <View style={styles.mainButtonTopWrapper}>
              <CustomMainButton />
            </View>
            <View style={styles.mainButtonBottomWrapper}>
              <CustomMainButton />
              <CustomMainButton />
            </View> */}
          </View>
        </View>
        <View style={{ flex: 1.6 }}>
          <View style={{ margin: 10 }}>
            <Text style={{ fontSize: 20, fontFamily: 'RobotoSlab-Medium' }}>
              Tin Tức
            </Text>
          </View>

          <ScrollView
            horizontal
            contentContainerStyle={styles.newsContainer}
            style={{ flex: 1 }}>
            {NewsPiece}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default MainHomeScreen;
