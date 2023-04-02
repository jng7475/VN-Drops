import { View, Text, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import React from 'react';
import MyText from '../../../../components/text';
import FeatherIcon from 'react-native-vector-icons/Feather';
// import { LinearGradient } from 'expo-linear-gradient';
import LinearGradient from 'react-native-linear-gradient';

//const navigation = useNavigation();
//const questionHandler = () => {
//  navigation.navigate('Chat');
//};
const healthNoticeHandler = () => {
  Linking.openURL(
    'https://vsh.org.vn/nhung-dieu-nguoi-hien-mau-tinh-nguyen-can-biet.htm',
  );
};

export default function DuringDonationScreen() {
  const Infor = props => {
    return (
      <View style={{ flexDirection: 'row', margin: 8 }}>
        <View style={{ flex: 1 }}>
          <MyText
            family="RobotoSlab-Bold"
            size={16}
            text={props.title}
            color='#C91414'
            fontWeight='bold'
          />
        </View>
        <View style={{ flex: 3 }}>
          <MyText
            family="RobotoSlab-Regular"
            size={16}
            text={props.des}
            color="black"
          />
        </View>
      </View>
    );
  };
  const data = new Date().toLocaleString();
  const space = '   ';
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Bạn đã đăng ký hiến máu thành công</Text>
      </View>

      <View style={styles.register}>
        <Text style={styles.registerText}>
          {space}
          {space}Register in: {space}
          {data}
        </Text>
      </View>

      <View style={styles.wrapper}>
        <View style={styles.mainWrapper}>
          <Text style={styles.donateDayTitle}>Các thông tin về buổi hiến máu</Text>
          <View style={styles.donateDayInfoWrapper}>
            <Infor title="Thời gian:" des="9h30 ngày 3/12/2022" />
            <Infor
              title="Địa điểm:"
              des="30 Tháng 4, Hoà Cường Bắc, Cẩm Lệ, Đà Nẵng     "
            />
            <Infor
              title="Đơn vị :"
              des="Công ty cổ phần Bệnh viện đa khoa Quốc tế Vinmec"
            />
          </View>
        </View>

        <View style={styles.noticeWrapper}>
          <Text style={styles.noticeText}>Lưu ý từ bệnh viện</Text>
          <View style={styles.hospitalNotice}>
            <Text style={styles.hospitalNoticeText}></Text>
          </View>
        </View>
        <TouchableOpacity 
          style={{width:'100%', flex: 0.1}} 
          onPress = {healthNoticeHandler}>
          
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FDEAD9', '#FFEAE7', '#FFD1D1']} style={styles.linearGradient}>
          <View style={styles.row} >
            <View style={[styles.rowIcon, { backgroundColor: '#FFD1D1' }]}>
              <FeatherIcon color='#C91414' name='heart' size={18} />
            </View>
            <Text style={styles.rowLabel}>Lưu ý về sức khỏe trước khi hiến máu</Text>
          </View>
        </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => {}}
            style={{ alignItems: 'center', width: '100%' }}>
            <MyText
              color="#49A2CB"
              text="Bạn còn thắc mắc ? Giải đáp ngay"
              size={18}
            />
          </TouchableOpacity>

        </View>
    </View>     
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // marginVertical: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: 25,
    color: '#C91414',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  titleContainer: {
    flex: 0.1,
    paddingVertical: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  register:{
    flex: 0.05
  },
  registerText: {
    color: 'black',
    fontFamily: 'RobotoSlab-Medium',
    fontSize: 15,
    textAlign: 'center',
  },
  wrapper: {
    flex: 0.8,
    justifyContent: 'space-between',
    alignItems:'center',
    width: '85%',
  },
  mainWrapper: {
    flex: 0.4,
    width: '100%',
    alignItems: 'center',
    
  },
  noticeWrapper: {
    flex: 0.3,
    width: '100%',
    justifyContent:'center',
  },
  donateDayInfoWrapper: {
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#FDEAD9',
  },
  donateDayTitle: {
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 19,
    color: '#C91414',
    padding: '5%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  noticeText:{
    color: '#C91414',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf:'flex-start',
    marginLeft: '5%',
    paddingVertical: '5%',
  },
  hospitalNoticeText:{
    fontSize: 16,
  },
  hospitalNotice: {
    width: '100%',
    paddingVertical: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDEAD9',
    borderRadius: 10
  },

  linearGradient: {
    width: '100%',
    paddingVertical: '5%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
    color: '#8F1B1B',
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    
  },
});