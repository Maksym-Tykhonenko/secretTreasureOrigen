import {StyleSheet} from 'react-native';
import {FONTS, SIZE} from '../../constants/fonts';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    gap: 30,
  },
  question: {
    fontFamily: FONTS.InterRegular,
    fontSize: SIZE.small,
    color: COLORS.lightGray,
    textAlign: 'center',
    marginTop: 20,
  },
  image: {
    alignSelf: 'center',
    borderRadius: 20,
  },
  list: {
    gap: 30,
  },
});
