import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Exploring = ({item}: any) => {
  return (
    <View style={styles.mainview}>
      <Image source={item.image} style={styles.image} />
    </View>
  );
};

export default Exploring;

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    margin: 3,
  },
  image: {
    height: 320,
    width: 200,
    borderWidth: 1,
    // borderColor: 'lightgrey',
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    marginLeft: 12,
  },
});
