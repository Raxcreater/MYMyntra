import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LAUNCHES = ({item, index}: any) => {
  return (
    <View style={styles.main}>
      <Image source={item.image} style={styles.image} />
    </View>
  );
};

export default LAUNCHES;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  image: {
    height: 200,
    // marginRight: 4,
    width: 200,
  },
});
