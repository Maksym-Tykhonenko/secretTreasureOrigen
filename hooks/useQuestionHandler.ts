import {useCallback, useState} from 'react';
import {QuestionItem} from '../data/questions';

interface UseQuestionHandlerProps {
  questions: QuestionItem[];
  onFinish: (correctAnswers: number) => void;
}

export const useQuestionHandler = ({
  questions,
  onFinish,
}: UseQuestionHandlerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [answers, setAnswers] = useState<{
    [key: number]: {selected: string; isCorrect: boolean};
  }>({});
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

  const handleAnswer = useCallback(
    (answer: string, timeout: number = 1000) => {
      if (answered) {
        return;
      }

      const isAnswerCorrect = answer === questions[currentIndex].correctOption;
      setAnswers(prev => ({
        ...prev,
        [currentIndex]: {selected: answer, isCorrect: isAnswerCorrect},
      }));

      if (isAnswerCorrect) {
        setCorrectAnswersCount(prev => prev + 1);
      }

      setSelectedOption(answer);
      setAnswered(true);

      if (currentIndex < questions.length - 1) {
        setTimeout(() => {
          setCurrentIndex(prevIndex => prevIndex + 1);
          setSelectedOption(null);
          setAnswered(false);
        }, timeout);
      } else {
        setTimeout(() => {
          setAllQuestionsAnswered(true);
          onFinish(correctAnswersCount + (isAnswerCorrect ? 1 : 0));
        }, timeout);
      }
    },
    [answered, questions, currentIndex, onFinish, correctAnswersCount],
  );

  const handleGoBack = useCallback(
    (previousIndex: number) => {
      if (!allQuestionsAnswered) {
        return;
      }

      if (currentIndex === 0) {
        return;
      }

      const previousAnswer = answers[previousIndex];
      setCurrentIndex(previousIndex);
      setSelectedOption(previousAnswer?.selected || null);
      setAnswered(!!previousAnswer);
    },
    [allQuestionsAnswered, currentIndex, answers],
  );

  return {
    currentIndex,
    selectedOption,
    correctAnswersCount,
    answers,
    answered,
    handleAnswer,
    handleGoBack,
  };
};