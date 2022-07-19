import {
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
} from 'react-native';
import React, { useContext, useState } from 'react';
import styles from './styles';
import { AuthContext } from '../../navigations/AuthProvider';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useContext(AuthContext);

  const handleLogIn = () => {
    login(email, password);
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.top}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
        <Text style={styles.welcomeText}>welcome to</Text>
        <Text style={styles.VNDropText}>VN Drops</Text>
      </View>
      <View style={styles.middle}>
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
          <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLogIn} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{fontFamily: 'HindMadurai-Regular', fontSize: 20}}>
            or connect using
          </Text>
        </View>
        <View style={styles.loginWith}>
          <TouchableOpacity style={styles.loginWithButton}>
            <Text style={{fontSize: 20, fontFamily: 'Kadwa-Regular'}}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginWithButton}>
            <Text style={{fontSize: 20, fontFamily: 'Kadwa-Regular'}}>Facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signUp}>
          <Text>Don't have an account ? </Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
