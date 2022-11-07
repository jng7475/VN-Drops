import { Text, View, Image, StyleSheet } from 'react-native';
import React from 'react';
import MyText from '../../../../components/text';

export default function ImportantNews() {
  return (
    <View style={styles.importantNewsWrapper}>
      <Text style={styles.importantNewsText}>Thông tin quan trọng !!!</Text>
      <View style={styles.importantNews}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  importantNewsWrapper: {
    width: '80%',
    height: '100%',
    backgroundColor: '#EEEDEB',
    borderRadius: 22,
    marginBottom: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  importantNewsText: {
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 18,
    color: '#646464',
    textAlign: 'center',
  },
  importantNews: {
    width: '90%',
    flex: 1,
    backgroundColor: '#EEEDEB',
    borderRadius: 22,
    marginVertical: '5%',
  },
});
