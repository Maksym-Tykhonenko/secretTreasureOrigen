import React from 'react';
import {crosswordData} from '../../data/crossworld';
import {View} from 'react-native';
import {GradientText} from '../../ui/GradientText';
import {styles} from './styles';
//import {getEmptyCellPositions} from '../../utils/getEmtyCellPositions';
import { getEmptyCellPositions } from '../../utils/getEmptyCellPositions';

const emptyCellPositions = getEmptyCellPositions(crosswordData);

type CrosswordCellProps = {
  letter: string;
  rowIndex: number;
  colIndex: number;
};

export const CrosswordCell = ({
  letter,
  rowIndex,
  colIndex,
}: CrosswordCellProps) => {
  const isEmpty = letter.trim() === '';
  const isEmptyCell = emptyCellPositions.some(
    ([row, col]) => row === rowIndex && col === colIndex,
  );

  return (
    <View style={[styles.cell, isEmptyCell && styles.emptyCell]}>
      {!isEmpty && <GradientText text={letter} textStyle={styles.letter} />}
    </View>
  );
};