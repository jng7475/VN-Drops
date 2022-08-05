import {
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../navigations/AuthProvider';
import { step2Styles } from './styles';

const Step2 = ({ userDetails }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { register } = useContext(AuthContext);

  const handleSignUp = () => {
    if (userDetails && password) {
      register(userDetails, password, 'user');
    }
  };

  return (
    <KeyboardAvoidingView
      style={step2Styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={step2Styles.top}>
        <Image
          style={step2Styles.logo}
          source={require('../../../assets/logo.png')}
        />
        <Text style={step2Styles.welcomeText}>SIGN UP</Text>
      </View>
      <View style={step2Styles.middle}>
        <View style={step2Styles.InputContainer}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={step2Styles.input}
            secureTextEntry
          />
          <TextInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
            style={step2Styles.input}
            secureTextEntry
          />
        </View>
      </View>

      <View style={step2Styles.bottom}>
        <View style={step2Styles.buttonContainer}>
          <TouchableOpacity onPress={handleSignUp} style={step2Styles.button}>
            <Text style={step2Styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Step2;
