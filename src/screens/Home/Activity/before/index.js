import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function BeforeDonationScreen() {
  const navigation = useNavigation();
  const moveToBloodDemand = () => {
    navigation.navigate('Nearby');
  };
  const moveToAppointment = () => {
    navigation.navigate('Appointment');
  };
  const moveToChabot = () => {
    navigation.navigate('Chat');
  };
  const space = '   ';
  const YesNoBox = () => {
    return (
      <View style={styles.yesNoBox}>
        <Image source={require('../../../../assets/no.png')} />
        <Image source={require('../../../../assets/yes.png')} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Bạn đã đủ tiêu chuẩn </Text>
        <Text style={styles.title}>hiến máu</Text>
      </View>
      <View style={styles.top}>
        <View style={styles.containerFortop}>
          <Text style={styles.topText}>Số lần hiến máu: 01</Text>
          <Text style={styles.topText}>Lần cuối hiến máu: 19/9/2022</Text>
          <Text style={styles.topText}>
            Tình trạng sức khỏe hiện tại: Ổn định
          </Text>
        </View>
      </View>
      <View style={styles.middle}>
        <Image
          source={require('../../../../assets/activityImage2.png')}
          style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
        />
        {/* <View style={styles.midLeft}>
          <Text style={styles.yesNoText}> Trong một tuần qua: </Text>
          <Text style={styles.categories}> Bị cúm, ho, nhức đầu, sốt ... </Text>
          <Text style={styles.categories}> Dùng thuốc kháng sinh </Text>
          <Text style={styles.categories}>
            {' '}
            Khám sức khỏe, làm xét nghiệm{'\n'} chửa răng{' '}
          </Text>
        </View>
        <View style={styles.midRight}>
          <Text style={styles.yesNoText}>
            {space} Có {space} Không{' '}
          </Text>
          <YesNoBox />
          <YesNoBox />
          <YesNoBox />
        </View> */}
        {/* <Image source={require('../../../../assets/screenshot.jpg')}/> */}
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomTop}>
          {/* <Image
            style={{ maxHeight: '100%', resizeMode: 'contain' }}
            source={require('../../../../assets/bloodDemand(2).png')}
          /> */}
          <View style={styles.bottomTopTextWrapper}>
            <Text style={styles.bottomTopText}>
              Những tổ chức y tế đang cần máu :
            </Text>
            <TouchableOpacity
              onPress={moveToBloodDemand}
              style={{ position: 'absolute', top: '80%', left: '40%' }}>
              <Text style={styles.clickHereText}>Xem tại đây</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Image
          source={require('../../../../assets/newChatbot.png')}
          style={{ position: 'absolute', left: '4%', bottom: '40%' }}
        />
        <TouchableOpacity style={{ paddingLeft: '10%' }} onPress={moveToChabot}>
          <Text style={styles.slogan}>Bạn còn thắc mắc? Giải đáp ngay!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signForDonation}
          onPress={moveToAppointment}>
          <Text style={{ color: 'white' }}>Nhấn vào để đặt lịch hiến máu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
