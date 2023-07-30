import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
  ScrollView
} from 'react-native';
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { firebase } from '@react-native-firebase/auth';
import { sendMessageToRasa } from '../../api/RasaApi';
import { getUserStatus } from '../../api/GetPersonalInfo';
import styles from './styles';
import QRCodeScanner from 'react-native-qrcode-scanner';
import QRCode from 'react-native-qrcode-svg';
import UserInfo from './UserInfo';

// import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { getPersonalInfo } from '../../api/GetPersonalInfo';

const HosQrCode = ({ navigation }) => {
  const [otherID, setOtherID] = useState('');
  const [userInfo, setUserInfo] = useState({});
  const [scanned, setScanned] = useState(false);
  const [userList, setUserList] = useState([]);
  const [selected, setSelected] = useState(false);
  const [currentUserID, setCurrentUserID] = useState('');
  const [currentAppointmentID, setCurrentAppointmentID] = useState('');
  const onSuccess = async (QRcode) => {
    await setOtherID(QRcode.data);
    await setScanned(true);
  };

  useEffect(() => {
    // Set an interval to scan every 10 seconds
    const intervalId = setInterval(() => {
      setScanned(false);
    }, 10000000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (otherID) {
      getPersonalInfo(otherID).then((info) => {
        setUserInfo(info);
        setScanned(true);
      });
    }
  }, [otherID]);

  return (
    <>
      {scanned ? (
        <ScrollView
          style={styles.infoWrapper}
          contentContainerStyle={styles.infoScrollWrapper}>
          <UserInfo
            userID={otherID}
            setSelected={setSelected}
            appointmentID={currentAppointmentID}
            navigation={navigation}
          />
        </ScrollView>
      ) : (
        <QRCodeScanner
          onRead={onSuccess}
          flashMode={RNCamera.Constants.FlashMode.torch}
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>OK. Got it!</Text>
            </TouchableOpacity>
          }
          style={{ height: '30%' }}
        />
      )}
    </>
  );
};






export default HosQrCode;
