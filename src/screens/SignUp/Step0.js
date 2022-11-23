import {
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import styles, { step0Styles } from './styles';

const Step0 = ({ navigation }) => {
  const [choice, setChoice] = useState('');
  const handleLogIn = () => {
    navigation.navigate('Login');
  };

  const handleNext = () => {
    if (choice === 'user') {
      navigation.navigate('UserSignup');
    } else if (choice === 'hospital') {
      navigation.navigate('HospitalSignup');
    } else {
      console.log('error');
    }
  };

  const handleUserButtonClicked = () => {
    setChoice('user');
  };
  const handleHospitalButtonClicked = () => {
    setChoice('hospital');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}>
      <View style={styles.top}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
        <Text style={styles.welcomeText}>ĐĂNG KÝ</Text>
      </View>
      <View style={styles.bottom}>
        <View style={{ marginTop: 20 }}>
          <Text style={step0Styles.question}>Bạn là ai?</Text>
        </View>
        <View style={styles.loginWith}>
          <TouchableOpacity
            style={
              choice === 'user' ? step0Styles.buttonChosen : step0Styles.button
            }
            onPress={handleUserButtonClicked}>
            <Text style={styles.loginStyleText}>Người hiến máu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              choice === 'hospital'
                ? step0Styles.buttonChosen
                : step0Styles.button
            }
            onPress={handleHospitalButtonClicked}>
            <Text style={styles.loginStyleText}>Bệnh viện, tổ chức y tế</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signUp}>
          <Text>Bạn đã có tài khoản? </Text>
          <TouchableOpacity onPress={handleLogIn}>
            <Text>Đăng Nhập</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleNext} style={styles.button}>
            <Text style={styles.buttonText}>Tiếp Theo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Step0;
