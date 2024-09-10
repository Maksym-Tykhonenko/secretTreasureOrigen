import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONTS, SIZE} from '../../constants/fonts';

export const styles = StyleSheet.create({
  description: {
    flexDirection: 'row',
    gap: 10,
    borderRadius: 20,
    backgroundColor: COLORS.brown,
    padding: 20,
  },
  text: {
    flex: 1,
    fontFamily: FONTS.InterLight,
    fontSize: SIZE.small,
    color: COLORS.lightGray,
  },
  image: {
    width: 24,
    height: 24,
  },
});
