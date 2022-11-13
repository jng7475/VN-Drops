import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  top: {
    flex: 0.4,
  },
  title: {
    width: '60%',
    borderRadius: 10,
    backgroundColor: '#DAC5C5',
    padding: 10,
    position: 'absolute',
    bottom: '-5%',
    right: width / 5,
  },
  bottom: {
    marginTop: '6%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
});

export default styles;
