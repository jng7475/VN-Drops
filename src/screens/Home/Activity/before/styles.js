import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: 27,
    color: '#C91414',
    textShadowOffset: { width: 1, height: 5 },
    textShadowRadius: 10,
  },
  titleWrapper: {
    height: '15%',
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  top: {
    flex: 0.8,
    justifyContent: 'space-around',
    paddingLeft: '10%',
    paddingTop: 20,
    // backgroundColor: 'blue',
  },
  topText: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: 16,
  },
  middle: {
    flex: 1.6,
    // backgroundColor: 'blue',
    flexDirection: 'row',
    paddingTop: 10,
    marginBottom: 10,
  },
  midLeft: {
    // backgroundColor: 'green',
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 0.8,
    paddingLeft: 10,
  },
  yesNoBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
    paddingRight: 10,
  },
  yesNoText: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: 15,
  },
  categories: {
    fontFamily: 'RobotoSlab-Regular',
    fontSize: 16,
  },
  midRight: {
    // backgroundColor: 'orange',
    flex: 0.3,
    flexDirection: 'column',
    justifyContent: 'space-around',
    // alignItems: 'flex-start',
    paddingRight: 10,
  },
  bottom: {
    paddingTop: 10,
    flex: 1.8,
    // backgroundColor: 'red',
  },
  bottomTop: {
    flexDirection: 'row',
    width: '100%',
    height: '50%',
    // backgroundColor: 'blue',
  },
  bottomTopTextWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '20%',
    left: '35%',
  },
  bottomTopText: {
    fontSize: 18,
    fontFamily: 'RobotoSlab-Medium',
    // textAlign: 'center',
    paddingLeft: 5,
  },
  slogan: {
    paddingTop: '4%',
    color: 'black',
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 18,
    textAlign: 'center',
  },
  signForDonation: {
    position: 'absolute',
    borderRadius: 10,
    right: '20%',
    left: '20%',
    width: '60%',
    height: '20%',
    bottom: '8%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clickHereText: {
    color: '#FF0000',
    fontFamily: 'RobotoSlab-Regular',
    fontSize: 16,
  },
});

export default styles;
