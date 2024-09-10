import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TakeTrueFalseQuizScreen} from '../screens/TakeTrueFalseQuizScreen';
import {TrueFalseQuizScreen} from '../screens/TrueFalseQuizScreen';
import {ResultTrueFalseScreen} from '../screens/ResultTrueFalseScreen';

export type QuizStackParamList = {
  TakeTrueFalseQuizScreen: undefined;
  TrueFalseQuizScreen: undefined;
  ResultTrueFalseScreen: {
    totalQuestions: number;
    correctAnswers: number;
  };
};

const Stack = createNativeStackNavigator<QuizStackParamList>();

export const QuizNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name="TakeTrueFalseQuizScreen"
      component={TakeTrueFalseQuizScreen}
    />
    <Stack.Screen name="TrueFalseQuizScreen" component={TrueFalseQuizScreen} />
    <Stack.Screen
      name="ResultTrueFalseScreen"
      component={ResultTrueFalseScreen}
    />
  </Stack.Navigator>
);