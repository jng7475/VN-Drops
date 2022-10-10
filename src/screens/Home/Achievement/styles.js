import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  top: {
    flex: 0.35,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleWrapper: {
    width: '90%',
    paddingVertical: '5%',
  },
  bottom: {
    flex: 0.65,
    width: '100%',
  },
  honorTable: {
    borderRadius: 15,
    width: '80%',
    flex: 1,
    backgroundColor: '#DF8A3C',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  certiWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  callWrapper: {
    width: '85%',
    paddingVertical: '3%',
  },
  findmoreInfor: {
    position: 'absolute',
    bottom: '20%',
    left: '25%',
  },
});

export default styles;
