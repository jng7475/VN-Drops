import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import NewsPieces from './component/NewsPieces';
import { NewsInfo } from '../../../utilities/newsInfo';
import CustomButton from './component/CustomButton';
import { mainButtonData } from '../../../utilities/mainButtonData';
import { SosButton } from '../../../utilities/mainButtonData';
import MyText from '../../../components/text';
import SosCustomButton from './component/SosCustomButton';
import ImportantInfo from './component/ImportantInfo';

const windowWidth = Dimensions.get('window').width - 20;
const windowHeight = Dimensions.get('window').height;

const MainHomeScreen = ({ navigation }) => {
  const [reload, setReload] = useState(false);

  const handleScroll = event => {
    const scrollPosition = event.nativeEvent.contentOffset.y;
    if (scrollPosition === 0) {
      setReload(true);
    }
  };

  const reloadPage = () => {
    setReload(false);
    navigation.replace('MainHomeScreen');
  };
  const MainButton = mainButtonData.map((value, index) => {
    return (
      <CustomButton
        key={index}
        text={value.text}
        imageLink={value.imageLink}
        id={value.id}
        navigation={navigation}
      />
    );
  });
  const NewsPiece = NewsInfo.map((value, index) => {
    return (
      <NewsPieces
        key={index}
        link={value.link}
        title={value.title}
        imageLink={value.imageLink}
      />
    );
  });
  return (
    <View
      style={styles.container}
      onScroll={handleScroll}
      scrollEventThrottle={16}
      scrollEnabled={true}>
      <View style={styles.curvedLine} />
      <View style={styles.top}>
        <View style={styles.homeTitleWrapper}>
          <Text style={styles.homeTitleText}>VN Drops</Text>
          <Text style={styles.homeSloganText}>Giọt máu cho sự sống</Text>
        </View>
        <View style={styles.importantNewsWrapper}>
          <Text style={styles.importantNewsText}>Thông tin quan trọng !!!</Text>
          <View style={styles.importantNews}>
            <ImportantInfo />
            {/* <Image source={require('../../../assets/sosImages.png')} /> */}
          </View>
        </View>
      </View>
      <View style={styles.mid}>
        <View style={styles.midLine1}>
          {/* <CustomButton
            text={SosButton[0].text}
            imageLink={SosButton[0].imageLink}
            id="Sos"
            navigation={navigation}
          /> */}
          <SosCustomButton
            text={SosButton[0].text}
            imageLink={SosButton[0].imageLink}
            id="Sos"
            navigation={navigation}
          />
        </View>
        <View style={styles.midOthers}>{MainButton}</View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.newsText}>Tin tức</Text>
        <ScrollView
          horizontal={true}
          style={{ marginTop: '8%', width: windowWidth * 5 }}>
          {NewsPiece}
        </ScrollView>
        {/* <FlatList
          horizontal
          data={NewsInfo}
          keyExtractor={item => item.id.toString()}
          renderItem={NewsPiece}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
        /> */}
      </View>
    </View>
  );
};

export default MainHomeScreen;
