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
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  answers: {
    fontSize: SIZE.large,
  },
  totalQuestions: {
    fontSize: SIZE.small,
  },
});
