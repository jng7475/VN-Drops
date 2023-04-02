import React, { useEffect, useState, useContext } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import styles from './styles';
import { getPersonalInfo } from '../../../api/GetPersonalInfo';
import { firebase } from '@react-native-firebase/auth';
import { AuthContext } from '../../../navigations/AuthProvider';
import { setUserStatus } from '../../../api/GetPersonalInfo';
const SECTIONS = [
  {
    header: 'Thông tin tài khoản',
    icon: 'settings',
    items: [
      { icon: 'edit', color: '#fe9400', label: 'Quản lý thông tin cá nhân', id: 'none', type: 'link' },
      { icon: 'bookmark', color: '#ef476f', label: 'Lịch sử', id: 'none', type: 'link' },
      { icon: 'award', color: '#007afe', label: 'Vinh danh', id: 'none', type: 'link' },
      { icon: 'maximize', color: '#118ab2', label: 'Mã QR', id: 'QrCode', type: 'link' },
      { icon: 'check-circle', color: '#32c759', label: 'Chế độ sẵn sàng', value: true, type: 'boolean' },
    ],
  },
  {
    header: 'Cài đặt',
    icon: 'help-circle',
    items: [
      { icon: 'lock', color: '#7F7F7F', label: 'Bảo mật', type: 'link' },
      { icon: 'settings', color: '#7F7F7F', label: 'Cài đặt', type: 'link' },
      { icon: 'help-circle', color: '#007afe', label: 'Hỗ trợ', type: 'link' },

    ],
  },
];


export default function MainSetting({ navigation }) {
  const { signOut } = useContext(AuthContext);

  const currentUserID = firebase.auth().currentUser?.uid;
  const [info, setInfo] = useState({});
  const getInfoFromFirebase = async () => {
    await setInfo(await getPersonalInfo(currentUserID));
    console.log(info);
  }
  useEffect(() => {
    getInfoFromFirebase();

  }, [])
  // const name = await getPersonalInfo(currentUserID).name;
  const handleReset = () => {
    console.log('reset');
    setUserStatus('none');
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profile}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={styles.profileAvatarWrapper}>
              <Image
                source={require('../../../assets/profile.png')}
                style={styles.profileAvatar}
              />

              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}>
                <View style={styles.profileAction}>
                  <FeatherIcon color="#fff" name="edit-3" size={15} />
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <View style={styles.profileBody}>
            <Text style={styles.profileName}>{info.fullname}</Text>

            <Text style={styles.profileAddress}>
              {info.phoneNumber}
            </Text>
          </View>
        </View>

        {SECTIONS.map(({ header, items }) => (
          <View style={styles.section} key={header}>
            <Text style={styles.sectionHeader}>{header}</Text>
            {items.map(({ label, icon, type, value, color, id }, index) => {
              return (
                <TouchableOpacity
                  key={label}
                  onPress={() => {
                    if (id === "QrCode") { navigation.navigate(id) }
                  }}>
                  <View style={styles.row}>
                    <View style={[styles.rowIcon, { backgroundColor: color }]}>
                      <FeatherIcon color="#fff" name={icon} size={18} />
                    </View>

                    <Text style={styles.rowLabel}>{label}</Text>

                    <View style={styles.rowSpacer} />

                    {type === 'boolean' && <Switch
                      trackColor={{ false: '#767577', true: '#e06666' }}
                      thumbColor={value ? '#cc0000' : '#f4f3f4'}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={value}
                      value={value} />}

                    {type === 'link' && (
                      <FeatherIcon
                        color="#0c0c0c"
                        name="chevron-right"
                        size={22}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}

        <View style={styles.button1}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => { signOut() }}>
            <Text style={{ color: '#CF1C1C' }}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ position: 'absolute', left: 0, height: 100, width: 150 }} onPress={handleReset}>
            <Text> </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
