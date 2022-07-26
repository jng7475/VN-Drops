import { Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useContext } from 'react';
import styles from './styles';
import { AuthContext } from '../../navigations/AuthProvider';
import CustomBigButton from './component/CustomBigButton';
import CustomSmallButton from './component/CustomSmallButton';

const HomeScreen = ({ navigation }) => {
  const { signOut } = useContext(AuthContext);
  const handleSignOut = () => {
    signOut();
  };

  const handleChatNavigate = () => {
    navigation.navigate('Chat');
  };

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
              <CustomBigButton />
            </View>
            <View style={styles.bottomWrapper}>
              <CustomSmallButton
                image={require('../../assets/question.png')}
                text={'Hỏi Đáp'}
              />
              <CustomSmallButton
                image={require('../../assets/achievement.png')}
                text={'Thành tích'}
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
      {/* bottom (navbar) */}
      <View style={styles.bottom}>
        <Text>Nav bar</Text>
        <TouchableOpacity style={styles.button} onPress={handleChatNavigate}>
          <Text style={styles.buttonText}>Go to Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Sign out </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
