import {
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import React, { useContext, useState } from 'react';
import styles from './styles';
import { AuthContext } from '../../navigations/AuthProvider';

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
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}>
      <View style={styles.top}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
        <Text style={styles.welcomeText}>WELCOME TO</Text>
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
            placeholder="Mật khẩu"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>
        <View style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Quên mật khẩu ?</Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLogIn} style={styles.button}>
            <Text style={styles.buttonText}>Đăng Nhập</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text>hoặc đăng nhập với</Text>
        </View>
        <View style={styles.loginWith}>
          <TouchableOpacity style={styles.loginWithButton}>
            <Text style={styles.loginStyleText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginWithButton}>
            <Text style={styles.loginStyleText}>Facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signUp}>
          <Text>Chưa có tài khoản ? </Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
