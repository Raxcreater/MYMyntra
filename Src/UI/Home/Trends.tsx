import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Trends = ({item, index}: any) => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <View>
      <Image source={item.image} style={[styles.image, {width: windowWidth}]} />
    </View>
  );
};

export default Trends;

const styles = StyleSheet.create({
  image: {
    height: 480,
  },
});
