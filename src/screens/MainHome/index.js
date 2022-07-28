import { Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import CustomBigButton from './component/CustomBigButton';
import CustomSmallButton from './component/CustomSmallButton';

const MainHomeScreen = ({ navigation }) => {
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

        <View style={styles.news}>
          <Text>news</Text>
        </View>
      </View>
    </View>
  );
};

export default MainHomeScreen;
