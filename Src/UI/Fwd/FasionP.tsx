import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FasionP = ({item, index}: any) => {
  return (
    <View style={styles.main}>
      <View>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text1}>{item.text1}</Text>
        <Text style={styles.text2}>{item.text2}</Text>
      </View>
    </View>
  );
};

export default FasionP;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    borderRadius: 0.5,
    marginLeft: 8,
    marginTop: 8,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 1,
  },

  image: {
    height: 90,
    width: 75,
    marginTop: 12,
  },
  text1: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    marginLeft: 12,
  },
  text2: {
    fontSize: 8,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 8,
  },
});
