import {StyleSheet} from 'react-native';
import {FONTS, SIZE} from '../../constants/fonts';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontFamily: FONTS.InterRegular,
    fontSize: SIZE.small,
    color: COLORS.lightGray,
    marginTop: 20,
    marginHorizontal: 30,
    textAlign: 'center',
  },
});
