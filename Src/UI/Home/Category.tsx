import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Category = ({item, index}: any) => {
  return (
    <View style={styles.mainView}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },

  image: {
    height: 90,
    width: 80,
    marginLeft: 18,
    marginTop: 18,
  },
  text: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Poppins-ExtraLight',
    marginLeft: 16,
  },
});
