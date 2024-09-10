import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {QuestionItem} from '../../data/questions';
import {Question} from '../../ui/Question';
import {styles} from './styles';
import {InformationContainer} from '../../ui/InformationContainer';
import {icons} from '../../constants/images';

interface TestItemProps {
  item: QuestionItem;
  selectedOption: string | null;
  answered: boolean;
  handleAnswer: (answer: string) => void;
  answers: {[key: number]: {selected: string; isCorrect: boolean}};
  currentIndex: number;
}

export const TestItem = ({
  item,
  selectedOption,
  handleAnswer,
  answers,
  answered,
  currentIndex,
}: TestItemProps) => {
  const answerData = answers[currentIndex];

  const renderItem = ({item: option}: {item: string}) => {
    const isSelected = option === selectedOption;
    const isOptionCorrect =
      answerData?.isCorrect && answerData.selected === option;

    return (
      <Question
        option={option}
        isSelected={isSelected}
        isOptionCorrect={isOptionCorrect}
        onPress={() => handleAnswer(option)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{item.question}</Text>
      <Image source={item.image} style={styles.image} />
      <FlatList
        data={item.options}
        renderItem={renderItem}
        keyExtractor={option => option}
        style={styles.list}
        scrollEnabled={false}
      />
      {answered && item.description && (
        <InformationContainer
          description={item.description}
          imageSource={icons.done}
        />
      )}
    </View>
  );
};