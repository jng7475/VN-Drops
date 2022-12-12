import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;
export const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  top: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '6%',
    // backgroundColor: '#ECE1E1',
  },
  bottom: {
    flex: 0.3,
    alignItems: 'center',
    backgroundColor: '#ECEBE1',
  },
  infoWrapper: {
    width: '90%',
    backgroundColor: 'white',
  },
  infoScrollWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeLeft: {
    marginTop: '1%',
    width: '90%',
    // alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: '3%',
    // backgroundColor: 'red',
  },
  confirmButton1: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '8%',
    bottom: 10,
    width: '40%',
    backgroundColor: '#C00000',
    borderRadius: 10,
  },
});
