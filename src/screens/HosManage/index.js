import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import UserInfoWrapper from './UserInfoWrapper';
import { getRegularAppointmentList } from '../../api/getRegularAppointmentList';
import UserInfo from './UserInfo';

const HosManage = ({ navigation }) => {
  const [userList, setUserList] = useState([]);
  const [selected, setSelected] = useState(false);
  const [currentUserID, setCurrentUserID] = useState('');
  const [currentAppointmentID, setCurrentAppointmentID] = useState('');
  useEffect(() => {
    getRegularAppointmentList().then(list => {
      setUserList(list);
    });
  }, []);
  return (
    <View style={styles1.container}>
      <View style={styles1.top}>
        {selected === false ? (
          <ScrollView
            style={styles1.infoWrapper}
            contentContainerStyle={styles1.infoScrollWrapper}>
            {userList.map((appointment, index) => {
              return (
                <UserInfoWrapper
                  key={index}
                  userID={appointment.userID}
                  userNote={appointment.userNote}
                  appointmentID={appointment.appointmentID}
                  navigation={navigation}
                  selected={selected}
                  setSelected={setSelected}
                  setCurrentUserID={setCurrentUserID}
                  setCurrentAppointmentID={setCurrentAppointmentID}
                />
              );
            })}
          </ScrollView>
        ) : (
          <ScrollView
            style={styles1.infoWrapper}
            contentContainerStyle={styles1.infoScrollWrapper}>
            <UserInfo
              userID={currentUserID}
              setSelected={setSelected}
              appointmentID={currentAppointmentID}
              navigation={navigation}
            />
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default HosManage;
const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  top: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '6%',
    // backgroundColor: '#ECE1E1',
  },
  bottom: {
    flex: 0.3,
    alignItems: 'center',
    backgroundColor: '#ECEBE1',
  },
  infoWrapper: {
    width: '90%',
    backgroundColor: 'white',
  },
  infoScrollWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeLeft: {
    marginTop: '1%',
    width: '90%',
    // alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: '3%',
    // backgroundColor: 'red',
  },
  confirmButton1: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '8%',
    bottom: 10,
    width: '40%',
    backgroundColor: '#C00000',
    borderRadius: 10,
  },
});
