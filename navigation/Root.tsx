import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import {MainTabs} from './Tab';
import { MainTabs } from './Tab';
import {WelcomeScreen} from '../screens/WelcomeScreen';
import {WelcomeNextScreen} from '../screens/WelcomNextScreen';
//import {SplashScreen} from '../SplashScreen';
import { SplashScreen } from '../SplashScreen';

export type MainStackParamList = {
  SplashScreen: undefined;
  WelcomeScreen: undefined;
  WelcomeNextScreen: undefined;
  MainTabs: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
      <Stack.Screen name={'WelcomeScreen'} component={WelcomeScreen} />
      <Stack.Screen name={'WelcomeNextScreen'} component={WelcomeNextScreen} />
      <Stack.Screen name={'MainTabs'} component={MainTabs} />
    </Stack.Navigator>
  );
};