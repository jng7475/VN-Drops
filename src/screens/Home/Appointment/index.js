import {
  View,
  Text,
  ScrollView,
  Alert,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { getRegularBloodCalls } from '../../../api/BloodCallCRUD';
import AppointmentCard from './components/AppointmentCard';
import AppointmentConfirmation from './components/AppointmentConfirmation';
import ResponseModal from '../../Home/Appointment/components/ResponseModal';
import { setUserStatus } from '../../../api/GetPersonalInfo';
import styles from './styles';
import { createRegularAppointment } from '../../../api/createRegularAppointment';

const Appointment = ({ navigation }) => {
  const [bloodCalls, setBloodCalls] = useState([]);
  const [selected, setSelected] = useState(false);
  const [hospitalDetails, setHospitalDetails] = useState({});

  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('Đã đặt lịch thành công');

  const confirmedHandler = async hospitalInfo => {
    console.log('confirm');
    await createRegularAppointment(
      hospitalDetails.hospitalID,
      hospitalDetails.callID,
    );
    setUserStatus('appointment');
    setModalVisible(false);
    Alert.alert(
      'Bạn đã đăng kí hiến máu thành công',
      'Hãy đến hiến máu sớm nhất có thể. Sự sống của bệnh nhân đang trông cậy vào nguồn máu từ bạn',
    );
    navigation.navigate('MainHome');
  };
  const handlePress = hospitalInfo => {
    setModalVisible(true);
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

      {bloodCalls.map((hospital, index) => {
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
      })}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Bạn có chắc chắn muốn đăng ký</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Hủy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.okButton}
                onPress={confirmedHandler}>
                <Text style={styles.buttonText}>Đồng ý</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Appointment;
