import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingBottom: '5%',
    backgroundColor: 'white',
  },
  titleWrapper: {
    margin: '5%',
  },
  claimWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  okWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sendFormButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BD0000',
    width: width / 2,
    padding: 10,
    borderRadius: 25,
    margin: 5,
    marginBottom: 15,
  },
});

export default styles;
