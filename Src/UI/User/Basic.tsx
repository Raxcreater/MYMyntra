import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Basic = ({item, index}: any) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
};

export default Basic;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    // backgroundColor: 'pink',
    borderWidth: 0.7,
    height: 40,
    width: 100,
    margin: 6,
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 20,
    backgroundColor: 'white',
  },
  text: {
    // backgroundColor: 'pink',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
});
