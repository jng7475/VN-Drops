import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import MyText from '../../components/text';
import styles from './styles';
import Achievement from './component/Achievement';
import Noti from './component/Noti';

const Notifications = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.titleWrapper}>
          <MyText
            text="Thông Báo"
            color="white"
            size={28}
            family="RobotoSlab-Medium"
          />
        </View>
        {/* <View style={styles.profileWrapper}>
          <Image
            source={require('../../assets/profile.png')}
            style={styles.profile}
          />
          <MyText text="N.Trung" size={15} color="white" />
        </View> */}

        <View style={styles.progressBar}>
          <View
            style={{ position: 'absolute', top: 0, width: '50%', left: 60 }}>
            <Image
              source={require('../../assets/bloodRecord.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.graphWrapper}>
            <Image
              source={require('../../assets/graph2.png')}
              style={styles.graph}
            />
          </View>
          <View style={styles.progressButton}>
            <Achievement num="5" text="Lần hiến " small="+1" />
            <Achievement num="1224" text="ml máu" small="+350" />
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={{ height: '30%' }} />
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.noti}>Thông báo gần đây</Text>
          <Text style={styles.viewAll}>Xem tất cả</Text>
        </View>
        <View style={styles.notiWrapper}>
          <Noti
            text="Skyline giao chỉ tiêu hiến máu cho các cán bộ"
            small="Hãy cùng chung tay."
            image={require('../../assets/aim.png')}
          />
          <Noti
            text="Hãy khai báo y tế"
            small="Để có thể đăng ký hiến máu hoặc hiến máu khẩn cấp"
            image={require('../../assets/report.png')}
          />
          <Noti
            text="Đã Xác Thực Tài Khoản Thành Công"
            small="Vào ngày 6/9/2021"
            image={require('../../assets/profile.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default Notifications;

// import React, { useState, useEffect } from 'react';
// import firestore from '@react-native-firebase/firestore';
// import { firebase } from '@react-native-firebase/auth';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   FlatList,
// } from 'react-native';
// import { GetNoti } from '../../api/HandleNotification';
// import { PushNoti } from '../../api/HandleNotification';

// const Item = props => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{props.day}</Text>
//     <Text style={styles.title}>{props.address}</Text>
//   </View>
// );

// const PushNotiHandle = async () => {
//   await PushNoti('a', 'a', 'a');
// };

// const Notifications = () => {
//   const [data, setData] = useState('asd');
//   const renderItem = ({ item }) => <Item day={item.day} />;
//   return (
//     <View>
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
//       <TouchableOpacity onPress={PushNotiHandle} style={styles.submit}>
//         <Text>PushNoti</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   submit: {
//     width: '50%',
//     backgroundColor: 'lightgreen',
//     marginTop: 100,
//     height: '20%',
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });
