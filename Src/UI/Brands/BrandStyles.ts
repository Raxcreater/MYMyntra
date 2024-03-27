import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 10,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  myntraText: {
    marginTop: 10,
    marginLeft: 8,
    fontSize: 21,
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
  },
  downImage: {
    width: 12,
    marginTop: 12,
    marginLeft: 6,
  },

  rihtICons: {
    // marginLeft: 80,
    marginTop: 18,
    height: 20,
    width: 20,
  },
  hrt: {
    height: 20,
    width: 20,
    marginLeft: 12,
    marginTop: 18,
  },
  bag: {
    height: 20,
    width: 20,
    marginLeft: 10,
    marginRight: 21,
    marginTop: 18,
  },
  storeImge: {
    height: 80,
    margin: 12,
    borderRadius: 12,
  },
  spotlight: {
    fontFamily: 'Poppins-Black ',
    fontSize: 18,
    color: 'black',
    marginLeft: 16,
    // marginTop: 10,
  },
  fresh: {
    fontFamily: 'Black ',
    fontSize: 18,
    color: 'black',
    marginLeft: 16,
    marginTop: 12,
  },
});
export default styles;
