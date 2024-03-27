import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from '../BottomTab';
import T1 from '../Src/UI/Fwd/T1';
import T2 from '../Src/UI/Fwd/T2';
import T3 from '../Src/UI/Fwd/T3';
import T4 from '../Src/UI/Fwd/T4';
import T5 from '../Src/UI/Fwd/T5';

const Navigation = () => {
  let Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTab">
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{headerShown: false}}
        />
        <Stack.Screen name="UNRL" component={T1} />
        <Stack.Screen name="Bonker Corner" component={T2} />
        <Stack.Screen name="Bewakoof" component={T3} />
        <Stack.Screen name="Roadster" component={T4} />
        <Stack.Screen name="FCUK" component={T5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
