import { StyleSheet } from 'react-native';

// chia ra step1Styles, step2Styles, etc
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  top: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '12%',
  },
  welcomeText: {
    fontSize: 50,
    fontFamily: 'Buenard-Bold',
    color: 'black',
  },
  middle: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  InputContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: '#DCD6D0',
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '80%',
  },
  buttonContainer: {
    width: '40%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EBE4DC',
    width: '80%',
    padding: 10,
    borderRadius: 25,
    position: 'absolute',
    marginTop: '40%',
  },
  buttonText: {
    color: 'black',
    fontFamily: 'HindMadurai-Regular',
    fontSize: 25,
  },

  forgotPassword: {
    flex: 0.5,
    width: '95%',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  forgotPasswordText: {
    fontFamily: 'HindMadurai-Regular',
    color: '#2C2727',
    paddingRight: 10,
  },
  loginWith: {
    width: '150%',
    marginVertical: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loginStyleText: {
    color: '#000000',
    fontFamily: 'Kadwa-Regular',
    fontSize: 20,
  },
  loginWithButton: {
    alignItems: 'center',
    // justifyContent: 'space-around',
    backgroundColor: '#EBE4DC',
    width: '40%',
    padding: 10,
    borderRadius: 5,
  },
  signUp: {
    marginTop: '10%',
    display: 'flex',
    flexDirection: 'row',
  },
  logo: {
    width: 126,
    height: 125,
  },
});

export default styles;

export const step0Styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    // justifyContent: 'space-around',
    backgroundColor: '#D9D9D9',
    width: '50%',
    paddingVertical: '5%',
    borderRadius: 15,
    marginBottom: 10,
  },
  buttonChosen: {
    alignItems: 'center',
    // justifyContent: 'space-around',
    backgroundColor: '#E95A5A',
    width: '50%',
    padding: '5%',
    borderRadius: 15,
    marginBottom: 10,
  },
  question: {
    color: 'black',
  },
});
