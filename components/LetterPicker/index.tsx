import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';

type LetterPickerProps = {
  letters: string[];
  onLetterPress: (letter: string) => void;
};

export const LetterPicker = ({letters, onLetterPress}: LetterPickerProps) => {
  const radius = 70;
  const angleStep = (2 * Math.PI) / letters.length;

  return (
    <View style={styles.letterPicker}>
      {letters.map((letter, index) => {
        const angle = index * angleStep;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <TouchableOpacity
            key={index}
            onPress={() => onLetterPress(letter)}
            style={[
              styles.letterContainer,
              {
                transform: [{translateX: y}, {translateY: x}],
              },
            ]}>
            <Text style={styles.letter}>{letter}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};