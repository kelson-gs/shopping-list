import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '55%'
  },
  image: {
    marginLeft: -90,
    marginTop: -60,
    transform: [{ rotate: '135deg' }]
  },
  title: {
    height: 63,
    textAlign: 'center',
    fontSize: 53,
    fontFamily: 'Jua_400Regular',
  },
  subtitle: {
    textAlign: 'justify',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Jua_400Regular',
    lineHeight: 20,
    paddingLeft: 10,
    paddingRight: 10,
    color: 'rgba(0,0,0,0.77)',
    marginTop: 10,
  },
  button: {
    display: 'flex',
    width: '90%',
    height: 48,
    alignSelf: 'center',
    alignItems:'center',
    justifyContent: 'center',
    marginTop: 140,
    backgroundColor: '#099652',
    borderRadius: 16
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    fontFamily: 'Jua_400Regular',
  }
})

export default loginStyles;