import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TakeTreasureTestScreen} from '../screens/TakeTreasureTestScreen';
import {TreasureTestScreen} from '../screens/TreasureTestScreen';
import {ResultScreen} from '../screens/ResultScreen';

export type TestStackParamList = {
  TakeTreasureTestScreen: undefined;
  TreasureTestScreen: undefined;
  ResultScreen: {
    totalQuestions: number;
    correctAnswers: number;
  };
};

const Stack = createNativeStackNavigator<TestStackParamList>();

export const TreasureTestNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name="TakeTreasureTestScreen"
      component={TakeTreasureTestScreen}
    />
    <Stack.Screen name="TreasureTestScreen" component={TreasureTestScreen} />
    <Stack.Screen name="ResultScreen" component={ResultScreen} />
  </Stack.Navigator>
);
