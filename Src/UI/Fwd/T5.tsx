import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
const width = Dimensions.get('window').width;

const T5 = () => {
  const [selected, setselcted] = useState();
  const [stage, setstage] = useState();

  let sizes = [
    {size: 'S'},
    {size: 'M'},
    {size: 'L'},
    {size: 'XL'},
    {size: 'XXL'},
  ];
  let productstage = [{order: 'Wishlist'}, {order: 'Add to bag'}];

  return (
    <ScrollView>
      <View style={styles.main}>
        <Image
          source={require('./../../Assets/Images/t5.jpeg')}
          style={styles.image}
        />
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textLable}>FCUK</Text>
          <Text style={styles.lighttextLabl}>
            Loose Fit Cotton T-shirt Green
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.price}> Just in </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Poppins-SemiBold',
              color: 'black',
            }}>
            ₹559
          </Text>
          <View style={styles.dicount}>
            <Text style={styles.discoutText}>30% OFF!</Text>
          </View>
        </View>
        <Image
          source={require('./../../Assets/Images/bankOffer.jpg')}
          style={styles.offerImage}
        />
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Poppins-SemiBold',
            color: 'black',
            marginTop: 20,
            marginLeft: 14,
          }}>
          Select Size
        </Text>
        <View style={styles.sizeSelection}>
          {sizes.map((item: any, index: any) => {
            return (
              <TouchableOpacity
                onPress={() => setselcted(index)}
                style={{
                  ...styles.sizeBox,
                  backgroundColor: index == selected ? 'black' : 'white',
                }}
                activeOpacity={0.7}>
                <Text
                  style={{
                    ...styles.txtinbox,
                    color: index == selected ? 'white' : 'black',
                  }}>
                  {item.size}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.smallrounds}>
          {productstage.map((item: any, index: any) => {
            return (
              <TouchableOpacity
                onPress={() => setstage(index)}
                style={{
                  ...styles.stagepont,
                  backgroundColor: index == stage ? '#ff1694' : 'white',
                }}>
                <Text
                  style={{
                    ...styles.txtstage,
                    color: index == stage ? 'white' : 'black',
                  }}>
                  {item.order}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Image
          source={require('./../../Assets/Images/terms.jpg')}
          style={styles.termsImage}
        />
      </View>
    </ScrollView>
  );
};

export default T5;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  image: {
    height: 600,
    width: width,
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23,
  },
  textLable: {
    marginLeft: 8,
    marginTop: 18,
    fontSize: 16,
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
  },
  lighttextLabl: {
    marginTop: 18,
    fontSize: 13,
    color: 'black',
    marginLeft: 8,
  },
  price: {
    marginTop: 2,
    marginLeft: 8,
    fontSize: 14,
    color: 'skyblue',
  },
  //     textDecorationLine: 'line-through',// to pla
  //   },
  dicount: {
    height: 22,
    width: 59,
    marginLeft: 6,
    backgroundColor: 'purple',
    justifyContent: 'center',
  },
  discoutText: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
  offerImage: {
    width: width,
    height: 150,
    marginTop: 25,
  },
  sizeBox: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'red',
    borderRadius: 11,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  sizeSelection: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginLeft: 5,
  },
  txtinbox: {
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
  },
  smallrounds: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    marginTop: 16,
  },
  stagepont: {
    height: 40,
    width: 185,
    // backgroundColor: '#0047AB',
    marginLeft: 8,
    borderRadius: 20,
    borderWidth: 0.6,
  },
  txtstage: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 12,
    fontFamily: 'Poppins-Bold',
  },
  termsImage: {
    height: 180,
    width: width,
    marginTop: 25,
  },
});
