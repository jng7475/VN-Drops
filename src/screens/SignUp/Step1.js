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
import styles from './styles';

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
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.top}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
        <Text style={styles.welcomeText}>SIGN UP</Text>
      </View>
      <View style={styles.middle}>
        <View style={styles.InputContainer}>
          <TextInput
            placeholder="Fullname"
            value={fullname}
            onChangeText={text => setFullname(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Phone Number"
            value={phone}
            onChangeText={text => setPhone(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleNext} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text>or connect using</Text>
        </View>
        <View style={styles.loginWith}>
          <TouchableOpacity style={styles.loginWithButton}>
            <Text>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginWithButton}>
            <Text>Facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signUp}>
          <Text>Already had an account? </Text>
          <TouchableOpacity onPress={handleLogIn}>
            <Text>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Step1;
