import {FlatList, ScrollView, View} from 'react-native';
import React, {useCallback, useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GradientBackground} from '../../ui/GradientBackground';
import {Header} from '../../ui/Header';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import {QuestionItem} from '../../data/questions';
import {GradientText} from '../../ui/GradientText';
import {useQuestionHandler} from '../../hooks/useQuestionHandler';
import {TestItem} from '../../components/TestItem';
import {styles} from './styles';
import {questions} from '../../data/quiz';
import {QuizStackParamList} from '../../navigation/QuizStack';

export const TrueFalseQuizScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<QuizStackParamList>>();
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
      navigation.navigate('ResultTrueFalseScreen', {
        totalQuestions: questions.length,
        correctAnswers,
      });
    },
  });

  const handleAnswer = useCallback(
    (answer: string) => {
      originalHandleAnswer(answer, 3000);

      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({animated: true});
      }, 500);
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

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}>
          <Header
            title="True or False"
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
