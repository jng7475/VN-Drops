import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const Height = Dimensions.get('window').height;
const styles = StyleSheet.create({
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
