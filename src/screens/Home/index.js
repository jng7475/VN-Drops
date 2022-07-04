import { Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useContext } from 'react';
import styles from './styles';
import { AuthContext } from '../../navigations/AuthProvider';

const HomeScreen = () => {
  const { signOut } = useContext(AuthContext);
  const handleSignOut = () => {
    signOut();
  };
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 50, height: 50 }}
        source={require('../../assets/logo.png')}
      />
      <Text style={styles.text}>Your account:</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign out </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
