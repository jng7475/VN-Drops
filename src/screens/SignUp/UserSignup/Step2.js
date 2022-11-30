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

const Step2 = ({ userDetails, setUserDetails }) => {

  const [disease, setDisease] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { register } = useContext(AuthContext);

  const handleSignUp = () => {
    // setUserDetails({
    //   ...userDetails,
    //   sex: sex,
    //   weight: weight,
    // });
    console.log(userDetails);
    if (userDetails && password) {
      register(userDetails, password, 'user');
    }
  };

  return (
    <KeyboardAvoidingView
      style={step2Styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}>
      <View style={step2Styles.top}>
        <Image
          style={step2Styles.logo}
          source={require('../../../assets/logo.png')}
        />
        <Text style={step2Styles.welcomeText}>SIGN UP</Text>
      </View>
      <View style={step2Styles.middle}>
        <View style={step2Styles.InputContainer}>
          {/* <TextInput
            placeholder="Giới tính"
            value={sex}
            onChangeText={text => setSex(text)}
            style={step2Styles.input}
          />
          <TextInput
            placeholder="Cân nặng (đơn vị kg)"
            value={weight}
            onChangeText={text => setWeight(text)}
            style={step2Styles.input}
          /> */}
          <TextInput
            placeholder="Các bệnh nền"
            value={disease}
            onChangeText={text => setDisease(text)}
            style={step2Styles.input}
          />
          <TextInput
            placeholder="Mật Khẩu"
            value={password}
            onChangeText={text => setPassword(text)}
            style={step2Styles.input}
            secureTextEntry
          />
          <TextInput
            placeholder="Xác nhận mật khẩu"
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
