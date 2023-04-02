import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import UserInfoWrapper from './UserInfoWrapper';
import { getRegularAppointmentList } from '../../api/getRegularAppointmentList';
import UserInfo from './UserInfo';
import FeatherIcon from 'react-native-vector-icons/Feather';


const SECTIONS = [
  {
    header: 'Tiến trình kêu gọi',
    items: [
      { icon: 'user', iconColour: '#CF1C1C', color: '#FFEAE7', label: 'Số người đã kêu gọi' },
      { icon: 'droplet', iconColour: '#0539A6', color: '#C6D6FA', label: 'Số lít máu đã kêu gọi' },
    ],
  },
];

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
    <View style={styles1.componentContainer}>
      {selected === false ? (
        <>
          {SECTIONS.map(({ header, items }) => (
            <View style={styles1.section} key={header}>
              <Text style={styles1.sectionHeader}>{header}</Text>
              {items.map(({ label, icon, type, value, color, iconColour }, index) => {
                return (
                  <View style={[styles1.row, { borderColor: iconColour }]} key={index}>
                    <View style={[styles1.rowIcon, { backgroundColor: color }]}>
                      <FeatherIcon color={iconColour} name={icon} size={18} />
                    </View>
                    <Text style={styles1.rowLabel}>{label}</Text>
                    <View style={styles1.rowSpacer} />
                  </View>
                );
              })}
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
            </View>
          ))}
        </>
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
    width: '100%',
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
  componentContainer: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
  },
  section: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '10%',
  },
  sectionHeader: {
    paddingVertical: '5%',
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#CF1C1C',
    letterSpacing: 1.1,
    alignSelf: 'flex-start'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    height: '15%',
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,

  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 10,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowLabel: {
    fontSize: 15,
    fontWeight: '400',
    color: '#0c0c0c',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});



