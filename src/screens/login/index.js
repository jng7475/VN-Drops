import { useNavigation } from '@react-navigation/core';
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
// import { auth } from '../firebase';
import styles from './styles';
// import logo from "..assets/icon"

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       navigation.replace('home');
  //     }
  //   });

  //   return unsubscribe;
  // }, ['']);

  const handleSignUp = () => {
    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((userCredentials) => {
    //     const user = userCredentials.user;
    //     console.log('successfully registered');
    //   })
    //   .catch((error) => {
    //     alert(error.message), console.log(email + password);
    //   });
  };
  const handleLogIn = () => {
    // auth
    //   .signInWithEmailAndPassword(email, password)
    //   .then((userCredentials) => {
    //     const user = userCredentials.user;
    //     console.log('login with: ', email);
    //   })
    //   .catch((error) => {
    //     alert(error.message), console.log(email + password);
    //   });
    navigation.replace('home');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Passwords ?</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogIn} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 50 }}>
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
        <Text>Don't have an account ? </Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text>Sign up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
