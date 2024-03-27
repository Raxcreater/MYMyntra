import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const TopBrands = ({item, index}: any) => {
  return (
    <View style={styles.main}>
      <Image source={item.image} style={[styles.image]} resizeMode="contain" />
    </View>
  );
};

export default TopBrands;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // marginTop: 6,
    // marginHorizontal: 8,
    // backgroundColor: 'red',
  },
  image: {
    height: 310,
    marginHorizontal: 12,
    width: windowWidth - 24,
  },
});
