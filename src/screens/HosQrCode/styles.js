import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  MaterialCommunityIcons: { marginBottom: 5, marginRight: 5 },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
  infoWrapper: {
    width: '100%',
    backgroundColor: 'white',
  },
  infoScrollWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
