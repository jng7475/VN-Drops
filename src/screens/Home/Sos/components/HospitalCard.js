import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const HospitalCard = ({ hospitalName, callData }) => {
  return (
    <View style={hospitalCardStyles.generalContainer}>
      <View style={hospitalCardStyles.titleContainer}>
        <Image
          source={require('../../../../assets/icons/UserSOS/anonymousHospitalLogo.png')}
        />
        <View style={hospitalCardStyles.rightContainer}>
          <Text style={hospitalCardStyles.titleText}>CẦN MÁU KHẨN CẤP</Text>
          {/* <View style={hospitalCardStyles.break} /> */}
          <Text style={hospitalCardStyles.bloodAmount}>
            {callData.bloodAmount} cc
          </Text>
        </View>
      </View>
      <View style={hospitalCardStyles.textContainer}>
        <Image
          source={require('../../../../assets/icons/UserSOS/hospitalIcon.png')}
        />
        <Text style={hospitalCardStyles.textLabel}>Bệnh viện: </Text>
        <Text style={hospitalCardStyles.textValue}>{hospitalName}</Text>
      </View>
      <View style={hospitalCardStyles.textContainer}>
        <Image
          source={require('../../../../assets/icons/UserSOS/timeIcon.png')}
        />
        <Text style={hospitalCardStyles.textLabel}>Hạn cuối: </Text>
        <Text style={hospitalCardStyles.textValue}>
          {callData.time} - {callData.date}
        </Text>
      </View>
      <View style={hospitalCardStyles.textContainer}>
        <Image
          source={require('../../../../assets/icons/UserSOS/locationIcon.png')}
        />
        <Text style={hospitalCardStyles.textLabel}>Địa chỉ: </Text>
        <Text style={hospitalCardStyles.textValue}>{callData.address}</Text>
      </View>
    </View>
  );
};

export default HospitalCard;

const hospitalCardStyles = StyleSheet.create({
  generalContainer: {
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: '7%',
    marginRight: '7%',
    marginTop: '5%',
    marginBottom: '5%',
    backgroundColor: '#EEEDEB',
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 5,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: '5%',
  },
  titleText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  // break: { flexBasis: '100%', height: '0%' },
  bloodAmount: {
    flex: 1,
    color: '#CF1C1C',
    textAlign: 'center',
    fontSize: 19,
    // flexWrap: 'wrap',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: '3%',
    // marginRight: '5%',
    marginTop: '5%',
    marginBottom: '5%',
  },
  textLabel: {
    flex: 2,
    marginLeft: '3%',
    fontSize: 16,
    fontWeight: '600',
    // width: '5%',
  },
  textValue: {
    flex: 5,
    fontSize: 16,
  },
});
