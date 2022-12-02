import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { setUserStatus } from '../../api/GetPersonalInfo';
import { AuthContext } from '../../navigations/AuthProvider';

const Settings = () => {
  const { signOut } = useContext(AuthContext);
  const handleSignOut = () => {
    signOut();
  };
  const handleReset = () => {
    setUserStatus('none');
  };
  return (
    <View>
      <Text>Settings</Text>
      <TouchableOpacity onPress={handleSignOut}>
        <Text>Sign out </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 100 }} onPress={handleReset}>
        <Text>Reset </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
