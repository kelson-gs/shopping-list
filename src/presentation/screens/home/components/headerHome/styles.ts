import { StyleSheet } from 'react-native'; 

const headerHomeStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: '15%',
    padding: 5
  },
  
  textHeader: {
    color: '#000',
    fontFamily: 'Jua_400Regular',
    marginLeft: '30%',
    fontSize: 16
  }
})

export default headerHomeStyle;