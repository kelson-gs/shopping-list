import { StyleSheet } from 'react-native';

const loginFormStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  input: {
    width: 250,
    height: 30,
    marginTop: 70,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderLeftColor: '#fff',
    borderBottomColor: '#fff',
    padding: 5,
    paddingLeft: 15,
    color: '#fff'
  },
  containerInput: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 250,
    height: 31,
    marginTop: 70,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderLeftColor: '#fff',
    borderBottomColor: '#fff',
    paddingLeft: 15,
    color: '#fff'
  },
  inputPassword: {
    maxWidth: 200,
    color: '#fff'
  },
  icon:{
   marginBottom: 2
  },
  TextForgotPassword: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
    marginRight: 130,
    textDecorationLine: 'underline',
    fontWeight: '700'
  },
  TextRegister:{
    color: '#fff',
    marginTop: 4,
    fontSize: 15,
    fontWeight: '600'
  }
})

export default loginFormStyle;