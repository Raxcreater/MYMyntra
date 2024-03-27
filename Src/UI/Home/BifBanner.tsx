import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BifBanner = ({item, index}: any) => {
  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={{flex: 1}}>
      <Image source={item.image} style={[styles.image, {width: windowWidth}]} />
    </View>
  );
};

export default BifBanner;

const styles = StyleSheet.create({
  image: {
    height: 480,
    // width: '100%',
  },
});
