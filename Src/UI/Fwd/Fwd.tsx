import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from './Fwdstyle';
import FasionP from './FasionP';
import FasionBording from './FasionBording';
import Item from './Item';

const Fwd = () => {
  let fwd = [{name: 'Men'}, {name: 'Women'}];
  const [selcted, setselcted] = useState(0);
  const fasionList = [
    {
      image: require('./../../Assets/Images/f1.jpg'),
      text1: 'INSTA',
      text2: 'STYLES',
    },
    {
      image: require('./../../Assets/Images/f2.jpg'),
      text1: 'DRESSES',
      text2: 'UNDER ₹799',
    },
    {
      image: require('./../../Assets/Images/f3.jpg'),
      text1: 'DRESSES',
      text2: 'UNDER ₹599',
    },
    {
      image: require('./../../Assets/Images/f4.jpg'),
      text1: 'UNIQUE',
      text2: 'COLLECTION',
    },
    {
      image: require('./../../Assets/Images/f5.jpg'),
      text1: 'WALLET',
      text2: 'UNDER ₹299 ',
    },
    {
      image: require('./../../Assets/Images/f6.jpg'),
      text1: 'BAGS',
      text2: 'UNDER ₹699',
    },
    {
      image: require('./../../Assets/Images/f7.jpg'),
      text1: 'WALLETS',
      text2: 'UNDER ₹299',
    },
  ];
  let fasionPp = ({item, index}: any) => {
    return <FasionP item={item} index={index} />;
  };
  let FasionBoard = [
    {image: require('./../../Assets/Images/men1.jpg')},
    {image: require('./../../Assets/Images/men2.jpg')},
    {image: require('./../../Assets/Images/men3.jpg')},
    {image: require('./../../Assets/Images/men4.jpg')},
  ];
  let bbb = ({item, index}: any) => {
    return <FasionBording item={item} index={index} />;
  };
  const myItems = [
    {
      image: require('./../../Assets/Images/t1.jpeg'),
      text1: 'UNRL',
      text2: '₹499 30% off',
      text3: 'Best price ₹399',
    },
    {
      image: require('./../../Assets/Images/t2.jpeg'),
      text1: 'Bonker Corner',
      text2: '₹555 40% off',
      text3: 'Best price ₹450',
    },
    {
      image: require('./../../Assets/Images/t3.jpeg'),
      text1: 'Bewakoof',
      text2: '₹699 50% off',
      text3: 'Best price ₹450',
    },
    {
      image: require('./../../Assets/Images/t4.jpeg'),
      text1: 'Bewakoof',
      text2: '₹799 20% off',
      text3: 'Best price ₹699',
    },
    {
      image: require('./../../Assets/Images/t5.jpeg'),
      text1: 'FCUK',
      text2: '₹799 30% off',
      text3: 'Best price ₹599 ',
    },
    {
      image: require('./../../Assets/Images/t6.jpeg'),
      text1: 'Roadster',
      text2: '₹499 50% off',
      text3: 'Best price ₹399',
    },
  ];
  let listItems = ({item}: any) => {
    return <Item item={item} />;
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
      <View style={styles.smallrounds}>
        {fwd.map((item: any, index: any) => {
          return (
            <TouchableOpacity
              onPress={() => setselcted(index)}
              style={{
                ...styles.men,
                backgroundColor: index == selcted ? 'skylue' : 'white',
              }}>
              <Text
                style={{
                  ...styles.txtmen,
                  color: index == selcted ? 'white' : 'black',
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <ScrollView>
        <View>
          <FlatList
            data={fasionList}
            renderItem={fasionPp}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View>
          <FlatList
            data={FasionBoard}
            renderItem={bbb}
            horizontal={true}
            pagingEnabled={true}
          />
        </View>
        <View style={styles.twoView}>
          <View style={styles.firstone}>
            <Text style={styles.firstext}>EVERYTHING{'\n'}UNDER</Text>
            <Text style={styles.firssubtext}>₹500</Text>
          </View>
          <View style={styles.secondone}>
            <Text style={styles.firstext}>HOT{'\n'}STEALS</Text>
            <Text style={styles.firssubtext}>MIN.60% OFF</Text>
          </View>
        </View>
        <View style={styles.display}>
          <Text style={styles.textDisplay}>EARLY ACCESS TO SALE</Text>
        </View>
        <Image
          source={require('./../../Assets/Images/single.jpg')}
          style={styles.singleImage}
        />
        <View>
          <FlatList data={myItems} renderItem={listItems} horizontal={true} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Fwd;
