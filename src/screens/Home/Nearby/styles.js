import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const Height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: '5%',
  },
  hostipalInfoWrapper: {
    paddingTop: 10,
    flexDirection: 'row',
    height: Height / 6,
    // borderWidth: 1,
    // elevation: 5,
    // shadowColor: '#000000',
    // shadowOpacity: 0.5,
  },
  hosImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hosInfor: {
    flex: 3,
    // alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 25,
    paddingLeft: 15,
  },
  heading: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: 18,
  },
});

export default styles;
