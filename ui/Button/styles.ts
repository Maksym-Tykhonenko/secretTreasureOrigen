import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONTS, SIZE} from '../../constants/fonts';

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: 16,
    width: 240,
    borderRadius: 20,
    marginBottom: 50,
  },
  text: {
    textAlign: 'center',
    fontFamily: FONTS.CinzelBold,
    fontSize: SIZE.small,
    color: COLORS.darkBrown,
  },
});
