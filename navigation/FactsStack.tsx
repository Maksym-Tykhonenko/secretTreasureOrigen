import React from 'react';
import {FactItem} from '../data/facts';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FactsScreen} from '../screens/FactsScreen';
import {TreasureFactScreen} from '../screens/TreasureFactScreen';
import {TreasurePhotoScreen} from '../screens/TreasurePhotoScreen';

export type FactStackParamList = {
  FactsScreen: undefined;
  TreasureFactScreen: {item: FactItem};
  TreasurePhotoScreen: undefined;
};

const Stack = createNativeStackNavigator<FactStackParamList>();

export const FactsNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="FactsScreen" component={FactsScreen} />
    <Stack.Screen name="TreasureFactScreen" component={TreasureFactScreen} />
    <Stack.Screen name="TreasurePhotoScreen" component={TreasurePhotoScreen} />
  </Stack.Navigator>
);