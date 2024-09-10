import React from 'react';
import {GradientBackground} from '../../ui/GradientBackground';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from '../../ui/Button';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TestStackParamList} from '../../navigation/TestStack';
import {Image, ScrollView, Text, View} from 'react-native';
import {Header} from '../../ui/Header';
import {styles} from './styles';
import {GradientText} from '../../ui/GradientText';
import {cup} from '../../constants/images';

export const ResultScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<TestStackParamList>>();

  const {params} = useRoute<RouteProp<TestStackParamList, 'ResultScreen'>>();

  const {totalQuestions, correctAnswers} = params;

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container} edges={['top', 'right', 'left']}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header title="Quiz result" onPress={() => navigation.goBack()} />
          <View style={styles.image}>
            <Image source={cup} />
          </View>

          <Text style={styles.text}>Congratulations! Your result:</Text>

          <View style={styles.resultContainer}>
            <GradientText
              text={`${correctAnswers}/`}
              textStyle={styles.correctAnswers}
            />
            <GradientText
              text={totalQuestions + ''}
              textStyle={styles.totalQuestions}
            />
          </View>

          <Button
            title="Please try again"
            onPress={() => navigation.navigate('TakeTreasureTestScreen')}
          />
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
};
