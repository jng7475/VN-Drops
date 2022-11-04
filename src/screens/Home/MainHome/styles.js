import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
  },
  top: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'black',
  },
  mid: {
    width: '100%',
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  bottom: {
    width: '100%',
    flexDirection: 'row',
    flex: 0.45,
    // backgroundColor: 'lightgreen',
  },
  curvedLine: {
    width: '135%',
    height: '70%',
    position: 'absolute',
    top: '-10%',
    borderRadius: 180,
    backgroundColor: '#E82323',
    transform: [{ scaleX: 1.1 }, { scaleY: 1 }],
    borderWidth: 0,
    zIndex: 0,
  },
  homeTitleWrapper: {
    flex: 1,
    width: '95%',
    margin: 15,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  homeTitleText: {
    fontSize: 36,
    fontFamily: 'RobotoSlab-SemiBold',
    color: 'white',
  },
  homeSloganText: {
    fontSize: 16,
    fontFamily: 'RobotoSlab-Regular',
    color: 'white',
  },
  importantNewsWrapper: {
    width: '80%',
    flex: 2.5,
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

  midLine1: {
    marginTop: '9%',
    width: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  midOthers: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'blue',
    flexWrap: 'wrap',
  },
  newsText: {
    position: 'absolute',
    top: '30%',
    left: 10,
    fontFamily: 'RobotoSlab-Medium',
    fontSize: 15,
  },
  image: {
    width: 129,
    height: 129,
    borderRadius: 64.5,
    zIndex: 1,
  },
});

export default styles;
