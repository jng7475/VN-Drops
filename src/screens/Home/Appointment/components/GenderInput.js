import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const GenderInput = ({ style, setPatientDetails }) => {
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    setPatientDetails(prev => ({
      ...prev,
      gender: selected,
    }));
  }, [selected, setPatientDetails]);
  const handleGender = gender => {
    setSelected(gender);
  };
  return (
    <View>
      <Text style={styles.title}>Giới tính</Text>
      <View style={styles.btnContainer}>
        <Pressable
          onPress={() => handleGender('male')}
          style={selected === 'male' ? styles.selected : styles.initial}>
          <MaterialCommunityIcons
            name="gender-male"
            size={30}
            style={styles.icon}
          />
          <Text style={styles.btnText}>Nam</Text>
        </Pressable>
        <Pressable
          onPress={() => handleGender('female')}
          style={selected === 'female' ? styles.selected : styles.initial}>
          <MaterialCommunityIcons
            name="gender-female"
            size={30}
            style={styles.icon}
          />
          <Text style={styles.btnText}>Nữ</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GenderInput;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '5%',
    marginBottom: '5%',
    fontSize: 17,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  initial: {
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '5%',
    marginBottom: '5%',
    height: 39,
    alignItems: 'center',
    backgroundColor: '#EEEDEB',
    // width: '50%',
    // padding: 10,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
  },
  selected: {
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '5%',
    marginBottom: '5%',
    height: 39,
    alignItems: 'center',
    // width: '46%',
    // padding: 10,
    borderRadius: 10,
    backgroundColor: '#C91414',
    flex: 1,
    flexDirection: 'row',
  },
  btnText: {
    flex: 1,
    paddingTop: 5,
    paddingRight: 25,
    paddingBottom: 5,
    paddingLeft: 0,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: { padding: 5 },
});
