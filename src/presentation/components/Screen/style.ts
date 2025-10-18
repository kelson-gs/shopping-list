import { StyleSheet, Dimensions } from 'react-native';

const screenComponent = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  content: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10
  }
})

export default screenComponent;