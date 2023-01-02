import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import React, { useEffect } from 'react';

const AppointmentCard = ({
  hospitalID,
  hospitalName,
  callData,
  callID,
  handlePress,
}) => {
  return (
    <View style={hospitalCardStyles.generalContainer}>
      <Pressable
        onPress={() =>
          handlePress({
            hospitalName: hospitalName,
            date: callData.date,
            // time: callData.time,
            address: callData.address,
            hospitalID: hospitalID,
            callID: callID,
          })
        }>
        <View style={hospitalCardStyles.container}>
          <View style={hospitalCardStyles.leftContainer}>
            <Text style={hospitalCardStyles.date}>{callData.date}</Text>
          </View>
          <View style={hospitalCardStyles.dividerContainer} />
          <View style={hospitalCardStyles.rightContainer}>
            <Text style={hospitalCardStyles.orgName}>{callData.orgName}</Text>
            <Text style={hospitalCardStyles.address}>{callData.address}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default AppointmentCard;

const hospitalCardStyles = StyleSheet.create({
  generalContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#E6A97D',
    marginLeft: '7%',
    marginRight: '7%',
    marginTop: '5%',
    marginBottom: '5%',
    backgroundColor: '#FDEAD9',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  dividerContainer: { height: '100%', width: 1, backgroundColor: '#909090' },
  leftContainer: {
    flex: 4,
    marginLeft: '2%',
    // marginRight: '1%',
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 11,
    // textAlign: 'center',
    // marginLeft: '5%',
    // justifyContent: 'center',
  },
  date: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 20,
    paddingRight: 7,
    color: '#5C2D2D',
  },
  orgName: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    paddingTop: 10,
    color: '#5C2D2D',
  },
  address: {
    textAlign: 'center',
    paddingBottom: 10,
    fontWeight: '900',
    color: '#5C2D2D',
  },
});
