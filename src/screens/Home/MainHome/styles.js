import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#C91414',
  },
  top: {
    flex: 0.4,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mid: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    width: '100%',
    flexDirection: 'row',
    flex: 0.15,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
  },
  curvedLine: {
    width: '20%',
    height: '85%',
    position: 'absolute',
    bottom: -30,
    left: '40%',
    borderRadius: 35,
    backgroundColor: 'white',
    transform: [{ scaleX: 5 }, { scaleY: 1 }],
    borderWidth: 0,
    zIndex: 0,
  },
  mainFunc: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },
  mainButtonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '80%',
    height: '90%',
  },
  topWrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '90%',
  },
  newsContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  // news: {
  //   flex: 1.3,
  // },
  button: {
    backgroundColor: '#0782f9',
    width: '30%',
    padding: 15,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  userName: {
    fontSize: 30,
    fontFamily: 'RobotoSlab-Bold',
    color: 'white',
  },
  image: {
    width: 129,
    height: 129,
    borderRadius: 64.5,
    zIndex: 1,
  },
});

export default styles;
