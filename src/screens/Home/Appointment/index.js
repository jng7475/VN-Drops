import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getRegularBloodCalls } from '../../../api/BloodCallCRUD';
import AppointmentCard from './components/AppointmentCard';
import AppointmentConfirmation from './components/AppointmentConfirmation';

const Appointment = ({ navigation }) => {
  const [bloodCalls, setBloodCalls] = useState([]);
  const [selected, setSelected] = useState(false);
  const [hospitalDetails, setHospitalDetails] = useState({});
  const handlePress = hospitalInfo => {
    setSelected(true);
    setHospitalDetails(hospitalInfo);
  };

  useEffect(() => {
    getRegularBloodCalls()
      .then(data => {
        // console.log('data', data[0].calls);
        setBloodCalls(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: '#F6F6F6' }}>
      <Text>{'LỊCH HIẾN MÁU'}</Text>
      {selected === false ? (
        bloodCalls.map((hospital, index) => {
          return (
            <View key={'hospital ' + index}>
              {hospital.calls.map((call, callIndex) => {
                // console.log('test', call.callData);
                return (
                  <AppointmentCard
                    key={'call ' + callIndex}
                    hospitalName={hospital.hospitalName}
                    hospitalID={hospital.hospitalID}
                    callData={call.callData}
                    callID={call.callID}
                    handlePress={handlePress}
                  />
                );
              })}
              <View>
                <Text
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    color: '#5C2D2D',
                    paddingLeft: 5,
                    fontSize: 16,
                    fontWeight: '600',
                  }}>
                  LƯU Ý: Thời gian đăng ký tham gia hiến máu tại các địa điểm
                  trên: từ 7h đến 10h
                </Text>
              </View>
            </View>
          );
        })
      ) : (
        <AppointmentConfirmation
          hospitalDetails={hospitalDetails}
          navigation={navigation}
          setSelected={setSelected}
        />
      )}
    </ScrollView>
  );
};

export default Appointment;
