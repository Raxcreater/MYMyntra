import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;

const Spotlight = ({item, index}: any) => {
  return (
    <View style={styles.main}>
      <Image source={item.image} style={styles.image} />
    </View>
  );
};

export default Spotlight;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 12,
  },
  image: {
    height: 100,
    marginRight: 4,
    width: 390,
  },
});
