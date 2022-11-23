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

const Step2 = ({ setStep, setUserDetails }) => {
  const [representativeName, setRepresentativeName] = useState('');
  const [representativePosition, setRepresentativePosition] = useState('');
  const [phone, setPhone] = useState('');

  const handleNext = () => {
    if (representativeName && representativePosition && phone) {
      setUserDetails(details => ({
        ...details,
        representativeName: representativeName,
        representativePosition: representativePosition,
        phone: phone,
      }));
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
            placeholder="Tên người đại diện"
            value={representativeName}
            onChangeText={text => setRepresentativeName(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Chức danh"
            value={representativePosition}
            onChangeText={text => setRepresentativePosition(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Số điện thoại"
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
            <Text style={styles.buttonText}>Tiếp theo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Step2;
