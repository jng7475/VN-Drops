import { View, ScrollView, Text, Modal, Alert, TouchableOpacity, TouchableHighlight } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import { getBloodCalls } from '../../../api/BloodCallCRUD';
import HospitalCard from './components/HospitalCard';
import Confirmation from './components/Confirmation';
import { createUserSOSAppointment } from '../../../api/CreateUserSOSAppointment';
import { handleUserSOS } from '../../../api/HandleUserSOS'; 

export default function Sos({ navigation }) {
  const [bloodCalls, setBloodCalls] = useState([]);
  const [selected, setSelected] = useState(false);
  const [hospitalDetails, setHospitalDetails] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = async (hospitalInfo) => {
    setModalVisible(true);
    await setHospitalDetails(hospitalInfo);
   
  };
  const confirmedHandler = async () => {
    await createUserSOSAppointment(
      hospitalDetails.hospitalID,
      hospitalDetails.callID,
    );
    await handleUserSOS(hospitalDetails.hospitalID);
    navigation.navigate('MainHome');
  }
  const closeModal = () => {
    setModalVisible(false);
  }

  useEffect(() => {
    getBloodCalls()
      .then(data => {
        setBloodCalls(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: '#F6F6F6' }}>
      {bloodCalls.length === 0 ? (
        <View>
          <Text>
            Không có cuộc huy động SOS nào. Vui lòng kiểm tra lại sau.
          </Text>
        </View>
      ) : (
        <></>
      )}
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Bạn có chắc chắn muốn đăng ký</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Hủy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.okButton}
                onPress={confirmedHandler}
              >
                <Text style={styles.buttonText}>Đồng ý</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>



    </ScrollView>

  );
}





