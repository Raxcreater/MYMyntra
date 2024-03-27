import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const FasionBording = ({item, index}: any) => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.main}>
        <Image
          source={item.image}
          style={[styles.image, {width: windowWidth}]}
        />
      </View>
    </TouchableOpacity>
  );
};

export default FasionBording;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 12,
  },
  image: {
    height: 440,
  },
});
