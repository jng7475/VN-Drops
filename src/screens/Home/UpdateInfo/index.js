import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import MyText from '../../../components/text.js';
import AdvancedText from '../../../components/advancedText';
import { RadioButton } from 'react-native-paper';
import Survey from './component/survey';
import Claim from './component/claim';
import { YesNoBox } from './component/yesNoBox';
import { useEffect } from 'react';

const UpdateInfo = () => {
  useEffect(() => {
    console.log(result);
  }, [result]);
  const [checked, setChecked] = React.useState(1);
  const [result, setResult] = useState({
    '1-week-question': true,
    '3-month-donation': true,
    '6-month-questions': true,
    // eslint-disable-next-line prettier/prettier
    'disability': true,
    'disease-history': true,
    'female-question': true,
  });
  useEffect(() => {
    console.log(result);
  }, [result]);
  // const [result, setResult] = useState(true);
  const onPressHandler = () => {};
  //////////////////////////////////////////////////////
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.titleWrapper}>
          <AdvancedText
            text="Khai báo sức khỏe"
            color="#C91414"
            size={27}
            family="RobotoSlab-Medium"
            align="center"
          />
        </View>
      </View>
      <View style={{ marginRight: '5%' }}>
        <AdvancedText
          text="Có   Không"
          color="black"
          size={16}
          family="RobotoSlab-Medium"
          align="right"
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Survey />
        <YesNoBox setResult={setResult} />
      </View>
      <View style={styles.claimWrapper}>
        <View style={{ width: '85%' }}>
          <Claim />
        </View>
        <View style={styles.okWrapper}>
          <View style={{ width: '10%', alignItems: 'center' }}>
            <RadioButton
              value={1}
              status={checked === 1 ? 'checked' : 'unchecked'}
              onPress={() => setChecked(checked * -1)}
            />
          </View>
          <MyText
            text="Đồng Ý"
            color="#C91414"
            family="RobotoSlab-Regular"
            size={12.5}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.sendFormButton}
            onPress={onPressHandler}>
            <AdvancedText
              text="Gửi Đơn"
              color="white"
              size={18}
              family="RobotoSlab-Medium"
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default UpdateInfo;
