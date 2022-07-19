import { Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useContext } from 'react';
import styles from './styles';
import { AuthContext } from '../../navigations/AuthProvider';

const HomeScreen = ({ navigation }) => {
  const { signOut } = useContext(AuthContext);
  const handleSignOut = () => {
    signOut();
  };

  const handleChatNavigate = () => {
    navigation.navigate('Chat');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/logo.png')} />
      <Text style={styles.text}>Your account:</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign out </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleChatNavigate}>
        <Text style={styles.buttonText}>Go to Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
