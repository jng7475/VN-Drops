import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleSignOut = () => {
    // auth
    //   .signOut()
    //   .then(() => {
    //     navigation.replace('login');
    //   })
    //   .catch(error => alert(error.message));
    navigation.replace('login');
  };
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 50, height: 50 }}
        source={require('../../assets/logo.png')}
      />
      <Text style={styles.text}>
        Your account:
        {/* {auth.currentUser?.email} */}
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign out </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D4E9EC',
  },
  text: {
    fontSize: 17,
  },
  button: {
    backgroundColor: '#0782f9',
    width: '30%',
    padding: 15,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
