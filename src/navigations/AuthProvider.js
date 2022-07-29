import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { postUserDetails } from '../api/SignUp';

export const AuthContext = createContext();

const login = async (email, password) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.log('login error', error);
  }
};

const register = async (email, password, fullname, phoneNumber) => {
  try {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        const user = {
          email: email,
          fullname: fullname,
          phoneNumber: phoneNumber,
          accountType: 'user',
        };
        postUserDetails(user);
      });
  } catch (error) {
    console.log('signup error', error);
  }
};

const signOut = async () => {
  try {
    await auth().signOut();
  } catch (error) {
    console.log('login error', error);
  }
};

// Provider to provide states and functions to other modules as context
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const contextValue = {
    user,
    setUser,
    login: login,
    register: register,
    signOut: signOut,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
