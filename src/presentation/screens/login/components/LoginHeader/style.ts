import { StyleSheet } from 'react-native';

const loginHeadStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderBottomWidth: 5,
    borderBottomColor: '#fff',
    padding: 15,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 75
  },

  icon: {
    width: 155,
    height:155,
  },

  title: {
    fontFamily: 'Jua_400Regular',
    fontSize: 24,
    color: '#fff',
  }
})

export default loginHeadStyle;