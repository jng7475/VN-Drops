import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1 },
  // scrollView: {
  //   flex: 8,
  // },
  title: {
    fontWeight: 'bold',
    marginTop: '5%',
    textAlign: 'center',
    fontSize: 20,
    height: 31,
  },
  buttonWrapper: {
    marginTop: '10%',
    flex: 1,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'blue',
    flexWrap: 'wrap',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: 'grey',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: 100,
    alignItems: 'center',
  },
  okButton: {
    backgroundColor: 'green',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});


export default styles;