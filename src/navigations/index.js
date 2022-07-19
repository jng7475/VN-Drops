import React from 'react';
import { AuthProvider } from './AuthProvider';
import Routes from './Routes';


const NavigationProvider = () => {
  return <AuthProvider children={<Routes />} />;
};

export default NavigationProvider;
