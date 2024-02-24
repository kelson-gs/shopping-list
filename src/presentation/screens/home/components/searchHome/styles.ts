import { StyleSheet } from 'react-native'; 

const searchStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15%'
  },

  containerRow:{
    display: 'flex',
    flex: 1,
    width: '75%',
    height: 38,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset:{
    width: 0,
    height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    padding: 10,
    marginBottom: 10,
    borderRadius: 12
  },

  inputSearch: {
    width: '80%',
    height: 25, 
    paddingLeft: 5,
    fontFamily: 'Jua_400Regular',
  }
})

export default searchStyles;