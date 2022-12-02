import {
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import { step1Styles } from './styles';
import { useNavigation } from '@react-navigation/native';

const Step1 = ({ navigation, setStep, setUserDetails }) => {
  const [bloodType, setBloodType] = useState('');
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [homeAdress, setHomeAdress] = useState('');
  const handleLogIn = () => {
    navigation.navigate('Login');
  };

  const handleNext = () => {
    if (email && fullname && phone) {
      setUserDetails({
        email: email,
        fullname: fullname,
        phoneNumber: phone,
        homeAdress: homeAdress,
        bloodType: bloodType,
      });
      setStep(step => step + 1);
    }
  };

  return (
    <KeyboardAvoidingView
      style={step1Styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}>
      <View style={step1Styles.top}>
        <Image
          style={step1Styles.logo}
          source={require('../../../assets/logo.png')}
        />
        <Text style={step1Styles.welcomeText}>Đăng ký</Text>
      </View>
      <View style={step1Styles.middle}>
        <View style={step1Styles.InputContainer}>
          <TextInput
            placeholder="Họ và tên"
            value={fullname}
            onChangeText={text => setFullname(text)}
            style={step1Styles.input}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={step1Styles.input}
          />
          <TextInput
            placeholder="Số điện thoại"
            value={phone}
            onChangeText={text => setPhone(text)}
            style={step1Styles.input}
          />
          <TextInput
            placeholder="Địa chỉ thường trú (thành phố, quận, phường, số nhà)"
            value={homeAdress}
            onChangeText={text => setHomeAdress(text)}
            style={step1Styles.input}
          />
          <TextInput
            placeholder="Nhóm máu"
            value={bloodType}
            onChangeText={text => setBloodType(text)}
            style={step1Styles.input}
          />
        </View>
      </View>

      <View style={step1Styles.bottom}>
        <View style={{ marginTop: 20 }}>
          <Text>hoặc đăng nhập bằng</Text>
        </View>
        <View style={step1Styles.loginWith}>
          <TouchableOpacity style={step1Styles.loginWithButton}>
            <Text style={step1Styles.loginStyleText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={step1Styles.loginWithButton}>
            <Text style={step1Styles.loginStyleText}>Facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={step1Styles.signUp}>
          <Text>Bạn đã có tài khoản? </Text>
          <TouchableOpacity onPress={handleLogIn}>
            <Text>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
        <View style={step1Styles.buttonContainer}>
          <TouchableOpacity onPress={handleNext} style={step1Styles.button}>
            <Text style={step1Styles.buttonText}>Tiếp theo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Step1;
