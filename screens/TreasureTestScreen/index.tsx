import {FlatList, ScrollView, View} from 'react-native';
import React, {useCallback, useEffect, useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GradientBackground} from '../../ui/GradientBackground';
import {Header} from '../../ui/Header';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import {TestStackParamList} from '../../navigation/TestStack';
import {QuestionItem, questions} from '../../data/questions';
import {GradientText} from '../../ui/GradientText';
import {useQuestionHandler} from '../../hooks/useQuestionHandler';
import {TestItem} from '../../components/TestItem';
import {styles} from './styles';

export const TreasureTestScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<TestStackParamList>>();
  const scrollViewRef = useRef<ScrollView>(null);

  const {
    currentIndex,
    selectedOption,
    answers,
    answered,
    handleAnswer: originalHandleAnswer,
    handleGoBack,
  } = useQuestionHandler({
    questions,
    onFinish: correctAnswers => {
      navigation.navigate('ResultScreen', {
        totalQuestions: questions.length,
        correctAnswers,
      });
    },
  });

  const handleAnswer = useCallback(
    (answer: string) => {
      originalHandleAnswer(answer, 1500);

      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({animated: true});
      }, 300);
    },
    [originalHandleAnswer],
  );

  const renderItem = useCallback(
    ({item}: {item: QuestionItem}) => (
      <TestItem
        item={item}
        selectedOption={selectedOption}
        answered={answered}
        handleAnswer={handleAnswer}
        answers={answers}
        currentIndex={currentIndex}
      />
    ),
    [answered, answers, currentIndex, handleAnswer, selectedOption],
  );

  useEffect(() => {
    scrollViewRef.current?.scrollTo({y: 0, animated: true});
  }, [currentIndex]);

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}>
          <Header
            title="Treasure test"
            onPress={
              currentIndex === 0
                ? () => navigation.goBack()
                : () => handleGoBack(currentIndex - 1)
            }
          />
          <FlatList
            data={[questions[currentIndex]]}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
          <View style={styles.questionsContainer}>
            <GradientText
              text={`${currentIndex + 1}/`}
              textStyle={styles.answers}
            />
            <GradientText
              text={questions.length + ''}
              textStyle={styles.totalQuestions}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
};
