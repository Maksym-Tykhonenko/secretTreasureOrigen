import {StyleSheet} from 'react-native';
import {FONTS, SIZE} from '../../constants/fonts';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  text: {
    fontFamily: FONTS.InterRegular,
    fontSize: SIZE.small,
    color: COLORS.lightGray,
    textAlign: 'center',
  },
  resultContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  correctAnswers: {
    fontSize: SIZE.large,
  },
  totalQuestions: {
    fontSize: SIZE.small,
  },
});
