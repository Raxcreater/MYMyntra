import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import React from 'react';
import styles from './BrandStyles';
import TopBrands from './TopBrands';
import Spotlight from './Spotlight';
import LAUNCHES from './Lunches';

const Brands = () => {
  let top = [
    {image: require('./../../Assets/Images/Bamboo.jpg')},
    {image: require('./../../Assets/Images/surya.jpg')},
    {image: require('./../../Assets/Images/threeboys.jpg')},
  ];
  let branding = ({item, index}: any) => {
    return <TopBrands item={item} index={index} />;
  };
  let spot = [
    {image: require('./../../Assets/Images/s1.jpg')},
    {image: require('./../../Assets/Images/s2.jpg')},
    {image: require('./../../Assets/Images/s3.jpg')},
  ];
  let spotlight = ({item, index}: any) => {
    return <Spotlight item={item} index={index} />;
  };
  let lunch = [
    {image: require('./../../Assets/Images/b1.jpg')},
    {image: require('./../../Assets/Images/b2.jpg')},
    {image: require('./../../Assets/Images/b3.jpg')},
    {image: require('./../../Assets/Images/b4.jpg')},
  ];
  let lunchItem = ({item, index}: any) => {
    return <LAUNCHES item={item} index={index} />;
  };
  const windowWidth = Dimensions.get('window').width;
  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={styles.topView}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.myntraText}>Myntra</Text>
          <Image
            source={require('./../../Assets/Images/down-arrow.png')}
            style={styles.downImage}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            source={require('./../../Assets/Images/search.png')}
            style={styles.rihtICons}
          />
          <Image
            source={require('./../../Assets/Images/heart.png')}
            style={styles.hrt}
          />
          <Image
            source={require('./../../Assets/Images/bag.png')}
            style={styles.bag}
          />
        </View>
      </View>
      <ScrollView>
        <View>
          <Image
            source={require('./../../Assets/Images/store.jpg')}
            style={[styles.storeImge, {width: windowWidth - 30}]}
          />
        </View>
        <View>
          <FlatList
            data={top}
            renderItem={branding}
            horizontal={true}
            pagingEnabled={true}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <Text style={styles.spotlight}>BRAND IN THE SPOTLIGHT</Text>
        <View>
          <FlatList
            data={spot}
            renderItem={spotlight}
            horizontal={true}
            pagingEnabled={true}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <Text style={styles.fresh}> FRESH LAUNCHES</Text>
        <View>
          <FlatList
            data={lunch}
            renderItem={lunchItem}
            horizontal={true}
            pagingEnabled={true}
            showsVerticalScrollIndicator={false}
          />
          <FlatList
            data={lunch}
            renderItem={lunchItem}
            horizontal={true}
            pagingEnabled={true}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Brands;
