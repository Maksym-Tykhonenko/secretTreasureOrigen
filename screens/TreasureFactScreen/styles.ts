import {StyleSheet} from 'react-native';
import {FONTS, SIZE} from '../../constants/fonts';
import {COLORS} from '../../constants/colors';
import {scaleSize} from '../../utils/scaling';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginHorizontal: 28,
    gap: 20,
    marginBottom: 50,
  },
  image: {
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 20,
    height: scaleSize(260),
    width: scaleSize(190),
    borderRadius: scaleSize(60),
  },
  title: {
    fontFamily: FONTS.CinzelBold,
    fontSize: SIZE.medium,
    color: COLORS.lightGray,
  },
  description: {
    fontFamily: FONTS.InterLight,
    fontSize: SIZE.small,
    color: COLORS.lightGray,
  },
});
