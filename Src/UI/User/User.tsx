import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconi from 'react-native-vector-icons/FontAwesome5';
import Icon6 from 'react-native-vector-icons/FontAwesome6';
import Iconii from 'react-native-vector-icons/MaterialIcons';
import Iconcom from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import styles from './Userstyles';
import Basic from './Basic';

const User = () => {
  let threeCat = [
    {text: 'Basic'},
    {text: 'Size Detils'},
    {text: ' Skins & Hair'},
  ];

  const threeText = ({item, index}: any) => {
    return <Basic item={item} index={index} />;
  };
  const options = [
    {
      iconname: 'cash',
      text: 'Payments & Currencies',
      subText: 'View balance and saved payment method',
      library: 'MaterialCommunityIcons',
    },

    {
      iconname: 'wallet',
      text: 'Earn & Redeem',
      subText: 'Scab coupons,view prize and earn rewards',
      library: 'MaterialCommunityIcons',
    },
    {
      iconname: 'edit',
      text: 'Manage & Account',
      subText: 'Your account details & saved addesses',
      library: 'FontAwesome',
    },
    {
      iconname: 'target',
      text: 'Challenges',
      subText: 'Earn prizes by completing fyn tasks',
      library: 'Feather',
    },
    {
      iconname: 'heart-o',
      text: 'Wishlist',
      subText: 'Your most loved styles',
      library: 'FontAwesome',
    },
    {
      iconname: 'stars',
      text: 'Myntra Suggets',
      subText: '100% personalized feed just foi you',
      library: 'MaterialIcons',
    },

    {
      iconname: 'settings',
      text: 'Settings',
      subText: 'Manage Notification',
      library: 'SimpleLineIcons',
    },
  ];
  const iconsMap = {
    FontAwesome: Icon,
    FontAwesome5: Iconi,
    FontAwesome6: Icon6,
    MaterialIcons: Iconii,
    MaterialCommunityIcons: Iconcom,
    Feather: IconFeather,
    SimpleLineIcons: IconSimple,
  };

  const renderOptionItem = ({item, index}: any) => {
    const IconComponent = iconsMap[item.library];
    // console.log('list...........', item);
    return (
      <View style={styles.mainoption}>
        <View style={styles.optionItem}>
          <IconComponent
            name={item.iconname}
            size={20}
            color="grey"
            style={styles.icon}
          />
          <Text style={styles.optiontext}>{item.text}</Text>
        </View>
        {/* <Iconii
          name="keyboard-arrow-right"
          size={25}
          color="grey"
          style={styles.arrowIcon}
        /> */}
        <View>
          <Text style={styles.subText}>{item.subText}</Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{backgroundColor: 'white'}}>
          <Image source={require('./../../Assets/Images/user.png')} />
        </View>
        <Text style={styles.shopingfor}>Shopping for User</Text>
        <View style={styles.circle}>
          <Text style={styles.add}>+</Text>
        </View>
        <Text style={styles.addText}>Add</Text>
        <View>
          <FlatList data={threeCat} renderItem={threeText} horizontal={true} />
        </View>
        <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
          <View style={styles.midview}>
            <Icon name="cube" size={20} color="grey" style={{marginLeft: 10}} />
            <Text style={styles.ordertext}>Orders</Text>
            <Iconii
              name="keyboard-arrow-right"
              size={25}
              color="grey"
              style={{marginLeft: 40}}
            />
          </View>
          <View style={styles.midview}>
            <Iconi
              name="crown"
              size={15}
              color="grey"
              style={{marginLeft: 10}}
            />
            <Text style={styles.ordertext}>Insider</Text>
            <Iconii
              name="keyboard-arrow-right"
              size={25}
              color="grey"
              style={{marginLeft: 40}}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
          <View style={styles.midview2}>
            <Icon6
              name="headset"
              size={20}
              color="grey"
              style={{marginLeft: 10}}
            />
            <Text style={styles.ordertext}>Help Center</Text>
            <Iconii
              name="keyboard-arrow-right"
              size={25}
              color="grey"
              style={{marginLeft: 10}}
            />
          </View>
          <View style={styles.midview2i}>
            <Iconcom
              name="ticket-percent-outline"
              size={20}
              color="grey"
              style={{marginLeft: 10}}
            />
            <Text style={styles.ordertext}>Coupons</Text>
            <Iconii
              name="keyboard-arrow-right"
              size={25}
              color="grey"
              style={{marginLeft: 27}}
            />
          </View>
        </View>
        <View>
          <FlatList data={options} renderItem={renderOptionItem} />
        </View>
        <View style={{flex: 1, marginTop: 20, backgroundColor: 'white'}}>
          <Text style={styles.tend}>FAQ</Text>
          <Text style={styles.tend}>ABOUT US</Text>
          <Text style={styles.tend}>TERMS AND CONDITION</Text>
          <Text style={styles.tend}> PRIVACY POLICY</Text>
        </View>
        <View style={{justifyContent: 'center', marginTop: 16}}>
          <TouchableOpacity
            style={{
              height: 40,
              marginHorizontal: 24,
              borderWidth: 0.7,
              borderColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'red', fontSize: 18, textAlign: 'center'}}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default User;

<Icon name="rocket" size={30} color="black" />;
