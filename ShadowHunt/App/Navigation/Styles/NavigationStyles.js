import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.backgroundColor
    },
  icon: {
    padding: 20
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    padding: 32
  },
  app:{
    // flex: 1,
    // marginLeft: 140,
    marginLeft: 32,
    width: 80,
    height: 80,
    resizeMode: 'contain'
  }
})
