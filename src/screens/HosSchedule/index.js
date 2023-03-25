import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getUserStatus } from '../../api/GetPersonalInfo';
import ChoosingPage from './ChoosingPage';
import CreateSchedule from './CreateSchedule';
import HosManage from '../HosManage';
import { View } from 'react-native';
const SosScreensStack = createNativeStackNavigator();

const HosSchedule = ({ navigation }) => {
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
  if (choice === null) {
    return (
      <View style={{ flexDirection: 'column' }}>
        <View>
          <ChoosingPage
            text={'Lên lịch hiến máu định kỳ'}
            id={'CreateSchedule'}
            // navigation={navigation}
            setChoice={setChoice}
          />
        </View>
        <View>
          <ChoosingPage
            text={'Quản lý hiến máu định kỳ'}
            id={'HosManage'}
            // navigation={navigation}
            setChoice={setChoice}
          />
        </View>
      </View>
    );
  }

  return choice === 'CreateSchedule' ? (
    <CreateSchedule navigation={navigation} />
  ) : (
    <HosManage navigation={navigation} />
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

export default HosSchedule;
