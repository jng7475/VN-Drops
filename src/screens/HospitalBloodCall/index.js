import React, { useState, useEffect } from 'react';
import SOSForm from './SOSForm';
import SOSManage from './SOSManage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChoosingPage from './ChoosingPage';
import { getUserStatus } from '../../api/GetPersonalInfo';

const SosScreensStack = createNativeStackNavigator();

const HospitalBloodCall = ({ navigation }) => {
  const [confirm, setConfirm] = useState(false);
  const [choice, setChoice] = useState(null);
  const [status, setStatus] = useState(null);
  // const ScreenAppear = () => {
  //   return confirm === false ? <Step1 /> : <Step2 />;
  // };
  useEffect(() => {
    getUserStatus().then(result => {
      setStatus(result);
    });
  });
  // if (choice === null) {
  //   return (
  //     <>
  //       <ChoosingPage
  //         text={'Kêu gọi hiến máu khẩn cấp'}
  //         id={'SOSForm'}
  //         // navigation={navigation}
  //         setChoice={setChoice}
  //       />
  //       <ChoosingPage
  //         text={'Quản lý hiến máu khẩn cấp'}
  //         id={'SOSManage'}
  //         // navigation={navigation}
  //         setChoice={setChoice}
  //       />
  //     </>
  //   );
  // }
  // loading component
  if (status === null) {
    return <></>;
  }

  return status === 'none' ? (
    <SOSForm navigation={navigation} />
  ) : (
    <SOSManage navigation={navigation} />
  );
  // <ChoosingPage
  //   text={'Kêu gọi hiến máu khẩn cấp'}
  //   id={'SOSFrom'}
  //   navigation={navigation}
  // />
  // <SosScreensStack.Navigator>
  //   <SosScreensStack.Screen
  //     name="SOSForm"
  //     component={SOSForm}
  //     options={{
  //       headerShown: false,
  //     }}
  //   />
  //   <SosScreensStack.Screen
  //     name="SOSManage"
  //     component={SOSManage}
  //     options={{
  //       headerShown: false,
  //     }}
  //   />
  // </SosScreensStack.Navigator>
};

export default HospitalBloodCall;
