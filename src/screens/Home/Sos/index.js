import { View, ScrollView, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import { getBloodCalls } from '../../../api/BloodCallCRUD';
import HospitalCard from './components/HospitalCard';
import Confirmation from './components/Confirmation';

export default function Sos({ navigation }) {
  const [bloodCalls, setBloodCalls] = useState([]);
  const [selected, setSelected] = useState(false);
  const [hospitalDetails, setHospitalDetails] = useState({});
  const handlePress = hospitalInfo => {
    setSelected(true);
    setHospitalDetails(hospitalInfo);
  };

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
      {selected === false ? (
        bloodCalls.map((hospital, index) => {
          return (
            <View key={'hospital ' + index}>
              {hospital.calls.map((call, callIndex) => {
                // console.log(call.callID);
                return (
                  <HospitalCard
                    key={'call ' + callIndex}
                    hospitalName={hospital.hospitalName}
                    hospitalID={hospital.hospitalID}
                    callData={call.callData}
                    callID={call.callID}
                    handlePress={handlePress}
                  />
                );
              })}
            </View>
          );
        })
      ) : (
        <Confirmation
          hospitalDetails={hospitalDetails}
          navigation={navigation}
          setSelected={setSelected}
        />
      )}
    </ScrollView>
  );
}
