import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flex: 1,
    justifyContent: 'center',
    paddingLeft: '10%',
  },
  topText: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: 16,
  },
  middle: {
    flex: 1.5,
    backgroundColor: 'blue',
  },
  bottom: {
    flex: 1.5,
    backgroundColor: 'red',
  },
});

export default styles;
