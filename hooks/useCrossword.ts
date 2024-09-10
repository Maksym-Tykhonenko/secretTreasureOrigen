import {useCallback, useState} from 'react';
//import {correctWords, crosswordData} from '../data/crossword';
import { correctWords, crosswordData } from '../data/crossworld';

const initialEmptyGrid = crosswordData.map(row => row.map(() => ' '));

export const useCrossword = () => {
  const [grid, setGrid] = useState(initialEmptyGrid);
  const [currentWord, setCurrentWord] = useState('');
  const [guessedWords, setGuessedWords] = useState<string[]>([]);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const checkWord = useCallback((word: string) => {
    return correctWords.some(correctWord => correctWord.word === word);
  }, []);

  const revealWord = useCallback(
    (word: string) => {
      if (guessedWords.includes(word)) {
        return;
      }

      const wordData = correctWords.find(
        correctWord => correctWord.word === word,
      );
      if (wordData) {
        const updatedGrid = grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            const positionMatch = wordData.positions.some(
              ([posRow, posCol]) => posRow === rowIndex && posCol === colIndex,
            );
            return positionMatch ? crosswordData[rowIndex][colIndex] : cell;
          }),
        );
        setGrid(updatedGrid);
        setGuessedWords(prev => [...prev, word]);
      }
    },
    [grid, guessedWords],
  );

  const handleLetterPress = useCallback(
    (letter: string) => {
      if (timer) {
        clearTimeout(timer);
      }

      const newWord = currentWord + letter;

      if (newWord.length >= 3 && checkWord(newWord)) {
        revealWord(newWord);
        setCurrentWord('');
      } else {
        setCurrentWord(newWord);
        const newTimer = setTimeout(() => {
          setCurrentWord('');
        }, 2500);
        setTimer(newTimer);
      }
    },
    [checkWord, currentWord, revealWord, timer],
  );

  return {
    grid,
    handleLetterPress,
  };
};