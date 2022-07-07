import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  top: {
    flex: 1.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 50,
    color: '#723838',
  },
  VNDropText: {
    fontSize: 40,
    color: '#DE2121',
  },
  middle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    width: '100%',
    padding: 15,
    borderRadius: 15,
  },
  buttonText: {
    color: '#450B0B',
    fontWeight: '700',
    fontSize: 33,
  },
  buttonOutline: {
    backgroundColor: '#0782f9',
    width: '100%',
    padding: 15,
    borderRadius: 15,
    borderColor: 'green',
    borderWidth: 1,
  },
  buttonOutlineText: {
    fontWeight: '700',
    fontSize: 16,
    color: 'white',
  },
  forgotPassword: {
    flex: 0.5,
    width: '95%',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  forgotPasswordText: {
    fontWeight: 'bold',
    color: 'black',
    opacity: 0.5,
    paddingRight: 10,
  },
  loginWith: {
    width: '80%',
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  loginWithButton: {
    alignItems: 'center',
    // justifyContent: 'space-around',
    backgroundColor: '#EBE4DC',
    width: '40%',
    padding: 15,
    borderRadius: 5,
  },
  signUp: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  logo: {
    width: 136,
    height: 135,
  },
});

export default styles;
