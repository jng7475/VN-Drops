import {
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';

const Step1 = ({ setStep, setUserDetails }) => {
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [address, setAddress] = useState('');

  const handleNext = () => {
    if (email && fullname && address) {
      setUserDetails({
        email: email,
        fullname: fullname,
        address: address,
      });
      setStep(step => step + 1);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}>
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
            placeholder="Address"
            value={address}
            onChangeText={text => setAddress(text)}
            style={styles.input}
          />
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleNext} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Step1;
