import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import styles from './Newstyles';
import NewBordingg from './NewBordingg';
import Exploring from './Exploring';

const New = () => {
  const windowWidth = Dimensions.get('window').width;

  let listarry = [
    {image: require('./../../Assets/Images/new1.jpg')},
    {image: require('./../../Assets/Images/new2.jpg')},
    {image: require('./../../Assets/Images/new3.jpg')},
  ];
  const bording = ({item, index}: any) => {
    return <NewBordingg item={item} index={index} />;
  };
  let explore = [
    {image: require('./../../Assets/Images/brand.jpg'), text: 'Brand'},
    {image: require('./../../Assets/Images/star.jpg'), text: 'Collection'},
    {image: require('./../../Assets/Images/coolection.jpg'), text: 'Trends'},
  ];
  let exploringList = ({item, index}: any) => {
    return <Exploring item={item} index={index} />;
  };
  return (
    <View style={styles.mainContainer}>
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
          <FlatList
            data={listarry}
            renderItem={bording}
            horizontal={true}
            pagingEnabled={true}
          />
        </View>
        <Text style={styles.exploreText}> Explore a world of new</Text>
        <View>
          <FlatList
            data={explore}
            renderItem={exploringList}
            horizontal={true}
          />
        </View>
        <View>
          <Image
            source={require('./../../Assets/Images/watch.jpg')}
            style={[styles.watch, {width: windowWidth}]}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default New;
