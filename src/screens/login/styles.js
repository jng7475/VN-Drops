import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  InputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    borderRadius: 50,
    backgroundColor: '#DCD6D0',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 5,
    width: '80%',
  },
  buttonContainer: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
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
    fontSize: 16,
  },
  buttonOutline: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0782f9',
    width: '100%',
    padding: 15,
    borderRadius: 15,
    marginTop: 5,
    borderColor: 'green',
    borderWidth: 1,
  },
  buttonOutlineText: {
    fontWeight: '700',
    fontSize: 16,
    color: 'white',
  },
  forgotPassword: {
    marginTop: 15,
    marginRight: 70,
    width: '95%',
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    fontWeight: 'bold',
    color: 'black',
    opacity: 0.5,
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
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  logo: {
    width: 136,
    height: 135,
  },
});

export default styles;
