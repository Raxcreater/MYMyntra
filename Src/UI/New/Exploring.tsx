import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Exploring = ({item, index}: any) => {
  return (
    <View style={styles.mainview}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
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
    height: 100,
    width: 110,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    marginLeft: 12,
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    color: 'black',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    marginLeft: 12,
    fontFamily: 'Poppins-SemiBold',
  },
});
