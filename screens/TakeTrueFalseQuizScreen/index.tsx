import {Image, ScrollView, Text} from 'react-native';
import React from 'react';
import {GradientBackground} from '../../ui/GradientBackground';
import {SafeAreaView} from 'react-native-safe-area-context';
import {icons, quiz} from '../../constants/images';
import {Button} from '../../ui/Button';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {QuizStackParamList} from '../../navigation/QuizStack';
import {styles} from './styles';

export const TakeTrueFalseQuizScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<QuizStackParamList>>();

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container} edges={['top', 'right', 'left']}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}>
          <Image source={icons.timer} />
          <Text style={styles.title}>Take the True or False Quiz</Text>
          <Image source={quiz} style={styles.image} />
          <Button
            title="Start Quiz"
            onPress={() => navigation.navigate('TrueFalseQuizScreen')}
          />
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
};
