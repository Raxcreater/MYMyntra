import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Src/UI/Home/Home';
import Fwd from './Src/UI/Fwd/Fwd';
import New from './Src/UI/New/New';
import Brands from './Src/UI/Brands/Brands';
import User from './Src/UI/User/User';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Fwd" component={Fwd} options={{headerShown: false}} />
      <Tab.Screen name="New" component={New} options={{headerShown: false}} />
      <Tab.Screen
        name="Brands"
        component={Brands}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Profile" component={User} />
    </Tab.Navigator>
  );
};

export default BottomTab;
