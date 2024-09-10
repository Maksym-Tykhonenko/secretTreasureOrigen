import {StyleSheet} from 'react-native';
import {SIZE} from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flexGrow: 1,
    marginBottom: 30,
  },
  questionsContainer: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  answers: {
    fontSize: SIZE.large,
  },
  totalQuestions: {
    fontSize: SIZE.small,
  },
});
