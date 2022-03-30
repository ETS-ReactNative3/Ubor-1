import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  bottomContainer: {
    height: 100,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  bottomText: {
    fontSize: 24,
    color: '#4a4a4a',
  },
  roundButton: {
    position: 'absolute',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 35,
  },
  goButton: {
    position: 'absolute',
    backgroundColor: '#1495ff',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    bottom: 100,
    left: Dimensions.get('window').width / 2 - 30,
  },
  goText: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  },

  balanceButton: {
    position: 'absolute',
    backgroundColor: '#1c1c1c',
    width: 100,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 52,
    top: 9,
    left: Dimensions.get('window').width / 2 - 45,
  },
  balanceText: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
  }
});

export default styles;
