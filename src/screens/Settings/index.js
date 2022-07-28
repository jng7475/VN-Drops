import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../navigations/AuthProvider';

const Settings = () => {
  const { signOut } = useContext(AuthContext);
  const handleSignOut = () => {
    signOut();
  };
  return (
    <View>
      <Text>Settings</Text>
      <TouchableOpacity onPress={handleSignOut}>
        <Text>Sign out </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
