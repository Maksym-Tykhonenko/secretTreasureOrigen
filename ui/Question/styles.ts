import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONTS, SIZE} from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.brown,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    height: 20,
    width: 20,
    margin: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.goldenYellow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  question: {
    fontFamily: FONTS.InterLight,
    fontSize: SIZE.small,
    color: COLORS.lightGray,
  },
  correctAnswer: {
    borderColor: COLORS.green,
  },
  incorrectAnswer: {
    borderColor: COLORS.red,
  },
  correctRb: {
    backgroundColor: COLORS.green,
  },
  incorrectRb: {
    backgroundColor: COLORS.red,
  },
});
