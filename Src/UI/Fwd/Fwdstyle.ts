import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;
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
  smallrounds: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    marginTop: 16,
  },
  men: {
    height: 40,
    width: 185,
    // backgroundColor: '#0047AB',
    marginLeft: 8,
    borderRadius: 20,
    borderWidth: 0.6,
  },

  txtmen: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 12,
    fontFamily: 'Poppins-Bold',
  },
  txtwomen: {
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 12,
    fontFamily: 'Poppins-Bold',
  },
  twoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'green',
    marginTop: 34,
    // marginLeft: 14,
  },
  firstone: {
    backgroundColor: 'red',
    height: 120,
    width: 180,
    marginLeft: 12,
    borderRadius: 14,
  },
  secondone: {
    backgroundColor: '#33ccff',
    marginRight: 12,
    height: 120,
    width: 180,
    borderRadius: 14,
  },
  firstext: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
    fontFamily: 'Poppins-Bold',
  },
  firssubtext: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },
  display: {
    backgroundColor: 'purple',
    height: 50,
    marginTop: 26,
    justifyContent: 'center',
  },
  textDisplay: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
  },
  singleImage: {
    height: 160,
    marginTop: 12,
    width: width,
  },
});
export default styles;
