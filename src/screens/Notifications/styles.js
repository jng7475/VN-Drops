import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  top: {
    padding: 2,
    flex: 3,
    backgroundColor: 'red',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  bottom: {
    flex: 7,
  },
  titleWrapper: {
    textAlign: 'center',
    marginTop: '5%',
  },
  profile: {
    height: '200%',
    weight: '200%',
    resizeMode: 'contain',
  },
  profileWrapper: {
    position: 'absolute',
    right: '5%',
    top: '10%',
  },
  progressBar: {
    marginTop: '10%',
    backgroundColor: 'white',
    width: '80%',
    height: '100%',
    borderRadius: 20,
    elevation: 10,
    flexDirection: 'row',
  },
  graphWrapper: {
    flex: 0.6,
    padding: 5,
  },
  graph: {
    width: '80%',
    resizeMode: 'contain',
  },
  progressButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.4,
  },
  achievement: {
    borderRadius: 10,
    paddingTop: '5%',
    backgroundColor: '#CD1515',
    height: '36%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  noti: {
    color: 'black',
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 16,
    marginRight: '35%',
    marginLeft: '3%',
  },
  viewAll: {
    fontFamily: 'RobotoSlab-light',
    fontSize: 16,
    marginRight: '3%',
  },
  notiWrapper: {
    // justifyContent: 'center',
    marginTop: '5%',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    paddingBottom: '10%',
    // backgroundColor: 'blue',
  },
  image: {
    opacity: 0.3,
    resizeMode: 'contain',
    width: '90%',
  },
});

export default styles;
