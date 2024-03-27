import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Item = ({item}: any) => {
  const navigation = useNavigation();
  const onclick = item => {
    console.log(item, ';;;;;;');
    if (item.text1 == 'UNRL') {
      navigation.navigate('UNRL');
    }
    if (item.text1 == 'Bonker Corner') {
      navigation.navigate('Bonker Corner');
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => onclick(item)}>
      <View style={styles.main}>
        <View>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.text1}>{item.text1}</Text>
          <Text style={styles.text2}>{item.text2}</Text>
          <Text style={styles.text3}>{item.text3}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    borderRadius: 0.5,
    marginLeft: 8,
    marginTop: 2,
    shadowColor: 'black',
  },
  image: {
    height: 200,
    width: 180,
    // marginLeft: 8,
  },
  text1: {
    fontSize: 16,
    color: 'black',

    fontFamily: 'Poppins-Bold',
    marginLeft: 12,
  },
  text2: {
    fontSize: 10,
    color: 'black',
    // textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 12,
  },
  text3: {
    fontSize: 10,
    color: 'pink',
    // textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 12,
  },
});
