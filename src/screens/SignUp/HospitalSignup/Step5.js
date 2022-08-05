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
import styles from './styles';

const Step5 = ({ userDetails }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { register } = useContext(AuthContext);

  const handleSignUp = () => {
    if (userDetails && password) {
      register(userDetails, password, 'hospital');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.top}>
        <Image
          style={styles.logo}
          source={require('../../../assets/logo.png')}
        />
        <Text style={styles.welcomeText}>SIGN UP</Text>
      </View>
      <View style={styles.middle}>
        <View style={styles.InputContainer}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
          <TextInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSignUp} style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Step5;
