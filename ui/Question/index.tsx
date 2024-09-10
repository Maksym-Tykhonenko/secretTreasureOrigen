import React from 'react';
import {View, Pressable, Text} from 'react-native';
import {styles} from './styles';

type QuestionProps = {
  option: string;
  isSelected: boolean;
  isOptionCorrect: boolean;
  onPress: () => void;
};

export const Question = ({
  option,
  isSelected,
  isOptionCorrect,
  onPress,
}: QuestionProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress} disabled={isSelected}>
      <View
        style={[
          styles.radioCircle,
          isSelected &&
            (isOptionCorrect ? styles.correctAnswer : styles.incorrectAnswer),
        ]}>
        {isSelected && (
          <View
            style={[
              styles.selectedRb,
              isOptionCorrect ? styles.correctRb : styles.incorrectRb,
            ]}
          />
        )}
      </View>
      <Text style={styles.question}>{option}</Text>
    </Pressable>
  );
};
