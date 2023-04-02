import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles1 } from './styles';
import UserInfo from './component/UserInfo';
import AdvancedText from '../../components/advancedText';
import MyText from '../../components/text';
import Time from './component/Time';
import { getUserList } from '../../api/UserSOSCRUD';
import { setUserStatus } from '../../api/GetPersonalInfo';
import { endSOSCall } from '../../api/confirmSOSAppointment';
import Map from './component/Map';

export default function SOSManage({ navigation }) {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    getUserList().then(list => {
      setUserList(list);
    });
  }, []);
  const endHour = 16;
  const endMin = 30;
  // const currentTime = 'Bây giờ là' + { endHour } + 'h :' + { endMin };
  const totalBlood = 1000;
  const alreadyHaveBlood = 500;
  const endSOSCallHandler = () => {
    setUserStatus('none');
    endSOSCall();
    navigation.navigate('HospitalMainHome');
  };
  const ManageLines = ({ text }) => {
    return (
      <View style={{ width: '100%' }}>
        <MyText text={text} size={15} family="RobotoSlab-Bold" />
      </View>
    );
  };
  return (
    <View style={styles1.container}>
      <View style={styles1.top}>
        <ScrollView
          style={styles1.infoWrapper}
          contentContainerStyle={styles1.infoScrollWrapper}>
          {userList.map((appointment, index) => {
            return (
              <UserInfo
                key={index}
                userID={appointment.userID}
                userNote={appointment.userNote}
                appointmentID={appointment.bloodCallID}
                navigation={navigation}
              />
            );
          })}


        </ScrollView>
      </View>
      <View style={styles1.bottom}>
        <View style={{ flex: 1, width: '100%' }}>
          <Map />
        </View>
        <View style={{ flex: 0.2 }}>
          <TouchableOpacity style={endingButton} onPress={endSOSCallHandler}>
            <MyText
              text="KẾT THÚC KÊU GỌI"
              size={12}
              color="#FFFFFF"
              family="RobotoSlab-Bold"
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={styles1.bottom}>
        <View>
          <AdvancedText
            text="BẢNG QUẢN LÝ"
            color="#FF0000"
            family="RobotoSlab-Bold"
            size={22}
          />
        </View>
        <View style={styles1.timeLeft}>
          <View style={{ width: '50%' }}>
            <ManageLines text="Thời gian kết thúc: " />
            <ManageLines text="Thời gian hiện tại: " />
            <ManageLines text="Số máu kêu gọi: " />
            <ManageLines text="Số máu đã có: " />
          </View>
          <View style={{ width: '50%' }}>
            <Text>
              {endHour}h : {endMin}
            </Text>
            <Time />
            <Text>{totalBlood} ml</Text>
            <Text>{alreadyHaveBlood} ml</Text>
          </View>
        </View>
        <TouchableOpacity style={styles1.confirmButton1} onPress={handler}>
          <MyText
            text="NGỪNG KÊU GỌI"
            size={16}
            color="white"
            family="RobotoSlab-Bold"
          />
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const endingButton = {
  // position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: '5%',
  paddingHorizontal: '5%',
  width: '50%',
  backgroundColor: '#C00000',
  borderRadius: 10,
  marginTop: '6%',
};
