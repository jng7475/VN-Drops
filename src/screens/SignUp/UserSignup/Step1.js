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
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const handleLogIn = () => {
    navigation.navigate('Login');
  };

  const handleNext = () => {
    if (email && fullname && phone) {
      setUserDetails({
        email: email,
        fullname: fullname,
        phoneNumber: phone,
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
        <Text style={step1Styles.welcomeText}>SIGN UP</Text>
      </View>
      <View style={step1Styles.middle}>
        <View style={step1Styles.InputContainer}>
          <TextInput
            placeholder="Fullname"
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
            placeholder="Phone Number"
            value={phone}
            onChangeText={text => setPhone(text)}
            style={step1Styles.input}
            secureTextEntry
          />
        </View>
      </View>

      <View style={step1Styles.bottom}>
        <View style={{ marginTop: 20 }}>
          <Text>or connect using</Text>
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
          <Text>Already had an account? </Text>
          <TouchableOpacity onPress={handleLogIn}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={step1Styles.buttonContainer}>
          <TouchableOpacity onPress={handleNext} style={step1Styles.button}>
            <Text style={step1Styles.buttonText}>next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Step1;
