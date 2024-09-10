import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONTS, SIZE} from '../../constants/fonts';

export const styles = StyleSheet.create({
  cell: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.brown,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.goldenYellow,
    borderRadius: 10,
  },
  letter: {
    fontFamily: FONTS.CinzelBold,
    fontSize: SIZE.large,
    textAlign: 'center',
  },
  emptyCell: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
});