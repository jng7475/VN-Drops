import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Pressable,
  ScrollView,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { handleSOSCall } from '../../api/HandleSOSCall';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from '../Home/Appointment/components/DatePicker';
import ResponseModal from '../Home/Appointment/components/ResponseModal';
import { setUserStatus } from '../../api/GetPersonalInfo';
import { source } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import MyText from '../../components/text';

const SOSForm = ({ navigation }) => {
  const [dateValue, setDateValue] = useState(null);
  const [timeValue, setTimeValue] = useState(null);
  const [bloodAmount, setBloodAmount] = useState(null);
  const [hospitalAddress, setHospitalAddress] = useState(
    '30 tháng 4, Hoà Cường Bắc, Quận Hải Châu, Đà Nẵng',
  );
  const [noteContent, setNoteContent] = useState(
    'Hãy đến giúp bệnh nhân ngay!',
  );
  const [open, setOpen] = useState(false);
  const [bloodTypeChoice, setBloodTypeChoice] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [mode, setMode] = useState('date');
  const [bloodTypeOptions, setBloodTypeOptions] = useState([
    {
      label: 'O',
      value: 'O',
      icon: () => (
        <Image
          source={require('../../assets/icons/SOSForm/bloodTypeInput.png')}
        />
      ),
    },
    {
      label: 'A',
      value: 'A',
      icon: () => (
        <Image
          source={require('../../assets/icons/SOSForm/bloodTypeInput.png')}
        />
      ),
    },
    {
      label: 'B',
      value: 'B',
      icon: () => (
        <Image
          source={require('../../assets/icons/SOSForm/bloodTypeInput.png')}
        />
      ),
    },
    {
      label: 'AB',
      value: 'AB',
      icon: () => (
        <Image
          source={require('../../assets/icons/SOSForm/bloodTypeInput.png')}
        />
      ),
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');

  const handleSubmit = async () => {
    if (
      noteContent !== '' &&
      bloodTypeChoice !== null &&
      // dateValue !== null &&
      // timeValue !== null &&
      hospitalAddress !== null &&
      bloodAmount !== null
    ) {
      // navigation.navigate('Step2');
      const details = {
        // date: dateValue,
        // time: timeValue,
        bloodAmount: bloodAmount,
        address: hospitalAddress,
        bloodType: bloodTypeChoice,
        note: noteContent,
      };
      const status = await handleSOSCall(details);
      // console.log(status);
      if (status === 'success') {
        setModalText('Đã kêu gọi thành công!');
        setUserStatus('sos');
        // navigation.navigate('HospitalMainHome');
      }
    } else {
      setModalText('Một hoặc nhiều chi tiết chưa được cung cấp!');
    }
    setModalVisible(true);
  };
  const handleShowDatePicker = showMode => {
    setMode(showMode);
    setShowDatePicker(true);
  };

  const TextInputTitle = props => {
    return (
      <View style={inputStyles.textInputTitle}>
        <View style={{ marginRight: '1.5%' }}>
          <Image source={props.image} style={{ maxHeight: '100%' }} />
        </View>
        <Text style={{ fontFamily: 'notoSans-Bold', fontSize: 15 }}>
          {props.text}
        </Text>
      </View>
    );
  };
  return (
    <ScrollView contentContainerStyle={contentContainerStyle}>
      <Text style={generalStyles.topTitle}>KÊU GỌI NGAY!</Text>
      <View>
        <View
          style={{
            flex: 1,
          }}>
          <View style={{ flex: 1 }}>
            <TextInputTitle
              text="Địa điểm"
              image={require('../../assets/icons/SOSForm/destination.png')}
            />
            <View style={inputStyles.container}>
              <TextInput
                placeholder={'Nhập địa chỉ đầy đủ của bệnh viện'}
                value={hospitalAddress}
                onChangeText={text => setHospitalAddress(text)}
                style={inputStyles.textInput}
              />
            </View>
          </View>
        </View>
        {/* */}
        <View style={{ flex: 1 }}>
          <TextInputTitle
            text="Số lượng"
            image={require('../../assets/icons/SOSForm/bloodAmount.png')}
          />
          <View style={inputStyles.container}>
            <TextInput
              placeholder={'Số lượng máu với đơn vị là cc'}
              value={bloodAmount}
              onChangeText={text => setBloodAmount(text)}
              style={inputStyles.textInput}
            />
          </View>
        </View>
      </View>
      <View>
        {/* {icon} */}
        {/* <Image
          source={require('../../assets/icons/SOSForm/bloodAmountInput.png')}
        /> */}
        {/* <View style={{ flex: 1 }}>
          <TextInputTitle
            text="Nhóm máu"
            image={require('../../assets/icons/SOSForm/bloodGroup.png')}
          />
          <View style={inputStyles.container}>
            <TextInput
              placeholder={'Nhập lượng máu cần kêu gọi với đơn vị cc'}
              value={bloodAmount}
              onChangeText={text => setBloodAmount(text)}
              style={inputStyles.textInput}
            />
          </View>
        </View> */}
      </View>
      {/* <Text>Chọn nhóm máu cần kêu gọi</Text> */}
      <TextInputTitle
        text="Nhóm máu kêu gọi"
        image={require('../../assets/icons/SOSForm/bloodGroup.png')}
      />
      <DropDownPicker
        open={open}
        value={bloodTypeChoice}
        items={bloodTypeOptions}
        setOpen={setOpen}
        setValue={setBloodTypeChoice}
        setItems={setBloodTypeOptions}
        listMode="SCROLLVIEW"
        style={dropdownStyles}
        containerStyle={containerStyles}
        placeholder="Chọn nhóm máu"
        showArrowIcon={false}
      />
      {/* <Text>Lưu ý</Text> */}
      <View>
        <View style={{ flex: 1 }}>
          <TextInputTitle
            text="Lưu ý"
            image={require('../../assets/icons/SOSForm/note.png')}
          />
        </View>
        <View style={{ flex: 1 }}>
          <View style={noteStyles.container}>
            <TextInput
              placeholder="Nhập lời nhắn"
              value={noteContent}
              onChangeText={text => setNoteContent(text)}
              style={noteStyles.textInput}
              multiline={true}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          height: '8%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={handleSubmit} style={submitButtonStyles}>
          <MyText text="Xác Nhận" family="Lato-Bold" size={18} color="white" />
        </TouchableOpacity>
        {/* <Button
          title="xác nhận"
          onPress={handleSubmit}
          color={'#951515'}
          style={{ borderRadius: 30 }}
        /> */}
      </View>
      <ResponseModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalText={modalText}
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default SOSForm;

const generalStyles = StyleSheet.create({
  topTitle: {
    textAlign: 'center',
    fontSize: 28,
    color: '#C91414',
    fontFamily: 'Lato-Bold',
    marginVertical: '6%',
  },
});

const dropdownStyles = {
  backgroundColor: '#dde0e5',
  paddingTop: 10,
  paddingRight: 10,
  paddingBottom: 10,
  paddingLeft: 15,
  width: '90%',
  marginLeft: '5%',
};
const containerStyles = {
  marginLeft: '5%',
  marginRight: '5%',
  marginTop: '5%',
  marginBottom: '5%',
  width: '90%',
  height: 52,
};

const inputStyles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    marginLeft: '9%',
    marginRight: '9%',
    marginBottom: '9%',
    // borderBottomWidth: 1,
    backgroundColor: '#dde0e5',
    borderRadius: 30,
  },
  textInput: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 15,
  },
  textInputTitle: {
    marginLeft: '9%',
    marginRight: '9%',
    flexDirection: 'row',
    paddingBottom: '1%',
  },
});

const contentContainerStyle = {
  flexGrow: 1,
  paddingVertical: 20,
};

const noteStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '10%',
    borderBottomColor: '#BAAFAF', // Add this to specify bottom border color
    width: '90%',
    paddingLeft: 15,
    paddingRight: 15,
  },
  eachInput: {},
  textInput: {
    flex: 1,
    // paddingTop: 10,
    paddingRight: 10,
    // paddingBottom: 10,
    paddingLeft: 15,
    backgroundColor: '#dde0e5',
    textAlignVertical: 'top',
    borderRadius: 20,
  },
});

const submitButtonStyles = {
  marginLeft: '5%',
  marginRight: '5%',
  marginTop: '5%',
  marginBottom: '5%',
  width: '60%',
  height: '100%',
  borderRadius: 50,
  backgroundColor: '#C00000',
  justifyContent: 'center',
  alignItems: 'center',
};

// <Pressable onPress={() => handleShowDatePicker('time')}>
//             {/* <Text>Thời gian kết thúc kêu gọi</Text> */}
//             <TextInputTitle
//               text="Địa điểm"
//               image={require('../../assets/icons/SOSForm/destination.png')}
//             />
//             <View pointerEvents="none" style={inputStyles.container}>
//               <TextInput
//                 placeholder={'Thời gian kết thúc kêu gọi'}
//                 value={timeValue}
//                 style={inputStyles.textInput}
//               />
//             </View>
//           </Pressable>
