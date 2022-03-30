import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    height: 42,
    width: 82,
    resizeMode: 'contain',
  },
  middleContainer: {
    flex: 1,
    marginHorizontal: 14,
  },
  type: {
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 5,
  },
  time: {
    color: '#5d5d5d',
  },
  rightContainer: {
    width: 100,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 19,
    marginLeft: 5,
  },
});

export default styles;
