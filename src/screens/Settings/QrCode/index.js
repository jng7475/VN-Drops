import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from 'react-native';
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { firebase } from '@react-native-firebase/auth';
import { getUserStatus, getPersonalInfo } from '../../../api/GetPersonalInfo';
import styles from '../styles';
import QRCodeScanner from 'react-native-qrcode-scanner';
import QRCode from 'react-native-qrcode-svg';

// import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const QrCode = ({ navigation }) => {

  const currentUserID = firebase.auth().currentUser?.uid;
  const [otherID, setOtherID] = useState('');
  const [userInfo, setUserInfo] = useState({}); //info of the scanned code
  const allInfo = Object.entries(userInfo).map(([key, value]) => {
    return (
      <View key={key}>
        <Text>
          {key}: {value}
        </Text>
      </View>
    );
  });
  useEffect(() => {
    if (otherID) {
      getPersonalInfo(otherID).then(info => {
        setUserInfo(info);
      });
    }
  }, [otherID]);
  const onSuccess = async QRcode => {
    await setOtherID(QRcode.data);
  };
  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <QRCode value={currentUserID} size={300} />
    </View>
  );
};

export default QrCode;