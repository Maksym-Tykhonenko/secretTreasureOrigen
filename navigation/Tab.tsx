import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CrosswordScreen} from '../screens/CrosswordScreen';
import {LocationScreen} from '../screens/LocationScreen';
import {NavigatorScreenParams} from '@react-navigation/native';
//import {FactStackParamList, FactsNavigator} from './FactsStack';
import { FactStackParamList, FactsNavigator } from './FactsStack';
import {TestStackParamList, TreasureTestNavigator} from './TestStack';
//import {QuizNavigator, QuizStackParamList} from './QuizStack';
import { QuizNavigator, QuizStackParamList } from './QuizStack';
import {GradientTabBarBackground} from '../ui/GradientTabBarBackground';
import {Image} from 'react-native';
import {iconMap} from '../constants/images';

export type MainTabsParamList = {
  Facts: NavigatorScreenParams<FactStackParamList>;
  Test: NavigatorScreenParams<TestStackParamList>;
  Quiz: NavigatorScreenParams<QuizStackParamList>;
  Crossword: undefined;
  Location: undefined;
};

const Tab = createBottomTabNavigator<MainTabsParamList>();

export const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarBackground: GradientTabBarBackground,
      tabBarStyle: {
        borderTopWidth: 0,
      },
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBarIcon: ({focused}) => (
        <Image
          source={
            focused ? iconMap[route.name].focused : iconMap[route.name].default
          }
        />
      ),
    })}>
    <Tab.Screen name="Facts" component={FactsNavigator} />
    <Tab.Screen name="Test" component={TreasureTestNavigator} />
    <Tab.Screen name="Quiz" component={QuizNavigator} />
    <Tab.Screen name="Crossword" component={CrosswordScreen} />
    <Tab.Screen name="Location" component={LocationScreen} />
  </Tab.Navigator>
);