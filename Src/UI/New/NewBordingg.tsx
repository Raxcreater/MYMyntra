import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const NewBordingg = ({item, index}: any) => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <View style={styles.main}>
      <Image source={item.image} style={[styles.image, {width: windowWidth}]} />
    </View>
  );
};

export default NewBordingg;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 14,
  },
  image: {
    height: 430,
  },
});
