import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const HospitalAppStack = () => {
  const { signOut } = useContext(AuthContext);
  const handleSignOut = () => {
    signOut();
  };
  return (
    <View>
      <Text>HospitalAppStack</Text>
      <TouchableOpacity onPress={handleSignOut}>
        <Text>Sign out </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HospitalAppStack;
