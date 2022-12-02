import { StyleSheet } from 'react-native';

// chia ra step1Styles, step2Styles, etc
export const step1Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  top: {
    // flex: 1,
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  welcomeText: {
    fontSize: 40,
    fontFamily: 'Buenard-Bold',
    color: 'black',
  },
  middle: {
    flex: 2,
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
    justifyContent: 'center',
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
    top: 45,
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
    width: '80%',
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export const step2Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  top: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
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
    flex: 1,
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
    justifyContent: 'center',
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
    top: 45,
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
    width: '80%',
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  logo: {
    width: 100,
    height: 100,
  },
});
