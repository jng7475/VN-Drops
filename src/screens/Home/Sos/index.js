import { View, ScrollView, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import { getBloodCalls } from '../../../api/BloodCallCRUD';
import HospitalCard from './components/HospitalCard';

export default function Sos() {
  const [bloodCalls, setBloodCalls] = useState([]);

  useEffect(() => {
    getBloodCalls()
      .then(data => {
        // console.log('data', data[0].calls);
        setBloodCalls(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <ScrollView>
      {bloodCalls.map((hospital, index) => {
        return (
          <View key={'hospital ' + index}>
            {hospital.calls.map((call, callIndex) => {
              console.log(call);
              return (
                // <ScrollView key={'call ' + callIndex}>
                //   <Text>
                //     {index + callIndex + 1}.Thông báo khẩn cấp từ bệnh viện{' '}
                //     {hospital.hospitalName}
                //   </Text>
                //   <Text>Nội dung: {call.callData.message}</Text>
                //   <Text>Nhóm máu cần khẩn cấp: {call.callData.bloodType}</Text>
                // </ScrollView>
                <HospitalCard
                  key={'call ' + callIndex}
                  hospitalName={hospital.hospitalName}
                  callData={call.callData}
                />
              );
            })}
          </View>
        );
      })}
    </ScrollView>
  );
}
