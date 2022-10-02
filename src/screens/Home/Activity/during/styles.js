import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleText: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: 27,
    color: '#C91414',
    textShadowOffset: { width: 1, height: 5 },
    textShadowRadius: 10,
    textAlign: 'center',
  },
  titleContainer: {
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10%',
  },
  registerText: {
    color: 'black',
    fontFamily: 'RobotoSlab-Medium',
    fontSize: 14,
  },
  mainWrapper: {
    height: '70%',
    width: '100%',
    alignItems: 'center',
  },
  donateDayInfoWrapper: {
    width: '85%',
    height: '45%',
    borderWidth: 1,
    marginVertical: 10,
    alignItems: 'center',
  },
  donateDayTitle: {
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 19,
    color: '#DE2121',
    marginVertical: 5,
    textAlign: 'center',
  },
  healthNoticeWrapper: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // backgroundColor: 'lightgreen',
    width: '90%',
    flex: 1,
  },
});

export default styles;
