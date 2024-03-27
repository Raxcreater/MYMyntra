import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import Category from './Category';
import styles from './homeStyle';
import BifBanner from './BifBanner';
import Trends from './Trends';
import Exploring from './Exploring';

const Home = () => {
  let categotylist = [
    {
      image: require('./../../Assets/Images/shoes.jpg'),
      text: 'Sneakes',
    },
    {
      image: require('./../../Assets/Images/men.jpg'),
      text: 'Men',
    },
    {
      image: require('./../../Assets/Images/women.jpg'),
      text: 'Women',
    },
    {
      image: require('./../../Assets/Images/kids.jpg'),
      text: 'Kids',
    },

    {
      image: require('./../../Assets/Images/foot.jpg'),
      text: 'Footwear',
    },
  ];
  let renderCategory = ({item, index}: any) => {
    return <Category item={item} index={index} />;
  };
  let Posterlist = [
    {
      image: require('./../../Assets/Images/firstP.jpg'),
    },
    {
      image: require('./../../Assets/Images/secondP.jpg'),
    },
    {
      image: require('./../../Assets/Images/thirdP.jpg'),
    },
  ];
  let renderPoster = ({item, index}: any) => {
    return <BifBanner item={item} index={index} />;
  };
  const tendlist = [
    {
      image: require('./../../Assets/Images/a.jpg'),
    },
    {
      image: require('./../../Assets/Images/r.jpg'),
    },
    {
      image: require('./../../Assets/Images/at.jpg'),
    },
  ];
  let trend = ({item, index}: any) => {
    return <Trends item={item} index={index} />;
  };
  const exploreData = [
    {
      image: require('./../../Assets/Images/E1.png'),
    },
    {
      image: require('./../../Assets/Images/E2.png'),
    },
    {
      image: require('./../../Assets/Images/E3.png'),
    },
    {
      image: require('./../../Assets/Images/E4.png'),
    },
    {
      image: require('./../../Assets/Images/E5.png'),
    },
  ];
  const explore = ({item}: any) => {
    return <Exploring item={item} />;
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
          <Text style={styles.bisect}>|</Text>

          <Image
            source={require('./../../Assets/Images/insder.png')}
            style={styles.crowninder}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            source={require('./../../Assets/Images/bell.png')}
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
      <View style={styles.searchInput}>
        <View style={styles.searchViewleft}>
          <Image
            source={require('./../../Assets/Images/search.png')}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search for brands"
            placeholderTextColor={'#b5b5b7'}
            style={styles.inputsearch}
          />
          <Image
            source={require('./../../Assets/Images/camera.png')}
            style={styles.cameraImage}
          />
          <Image
            source={require('./../../Assets/Images/microphone.png')}
            style={styles.micImage}
          />
        </View>
      </View>
      <ScrollView>
        <View style={styles.smallrounds}>
          <TouchableOpacity style={styles.fashion}>
            <Text style={styles.txtFasion}>Fashion</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.beauty}>
            <Text style={styles.txtFasion}>Beauty</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.beauty}>
            <Text style={styles.txtFasion}>Home</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={categotylist}
            renderItem={renderCategory}
            horizontal={true}
          />
        </View>
        <View>
          <FlatList
            data={Posterlist}
            renderItem={renderPoster}
            horizontal={true}
            pagingEnabled={true}
          />
        </View>
        <View style={{backgroundColor: 'yellow', marginTop: 22}}>
          <Text
            style={{
              fontSize: 38,
              textAlign: 'center',
              color: 'black',
              fontFamily: 'Poppins-Bold',
            }}>
            TREND-SCAPE
          </Text>
          <Text
            style={{
              fontSize: 16,
              textAlign: 'center',
              color: 'black',
              fontFamily: 'Poppins-SemiBold',
            }}>
            The Biggest And Hotest Of The Season
          </Text>
        </View>
        <View>
          <FlatList data={tendlist} renderItem={trend} horizontal={true} />
        </View>
        <Text
          style={{
            fontSize: 44,
            justifyContent: 'center',
            textAlign: 'center',
            color: 'black',
            fontFamily: 'Poppins-SemiBold',
          }}>
          Just Lunched
        </Text>
        <View>
          <FlatList data={exploreData} renderItem={explore} horizontal={true} />
        </View>
      </ScrollView>
    </View>
  );
};
export default Home;
