import React from 'react';
import {View} from 'react-native';
import {CrosswordCell} from '../../components/CrosswordCell';
import {styles} from './styles';

export const CrosswordGrid = ({grid}: {grid: string[][]}) => {
  return (
    <View style={styles.grid}>
      {grid.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((letter, colIndex) => (
            <CrosswordCell
              key={colIndex}
              letter={letter}
              rowIndex={rowIndex}
              colIndex={colIndex}
            />
          ))}
        </View>
      ))}
    </View>
  );
};
