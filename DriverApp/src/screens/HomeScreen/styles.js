import { StyleSheet, Dimensions } from 'react-native';


  /** 
 * This file holds the styling information index.js uses
*/
const styles = StyleSheet.create({
  bottomContainer: {
    height: 100,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  bottomText: {
    fontSize: 20,
    color: '#4a4a4a',
  },
  roundButton: {
    position: 'absolute',
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 20,
  },
  goButton: {
    position: 'absolute',
    backgroundColor: 'orange',
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    bottom: 110,
    left: Dimensions.get('window').width / 2 - 37,
  },
  goText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },

  balanceButton: {
    position: 'absolute',
    backgroundColor: '#1c1c1c',
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    top: 20,
    left: Dimensions.get('window').width / 2 - 50,
  },
  balanceText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  }
});

export default styles;
