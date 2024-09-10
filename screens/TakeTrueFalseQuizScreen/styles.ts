import {StyleSheet} from 'react-native';
import {FONTS, SIZE} from '../../constants/fonts';
import {COLORS} from '../../constants/colors';
import {scaleSize} from '../../utils/scaling';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    marginTop: scaleSize(40),
    marginBottom: scaleSize(60),
  },
  title: {
    fontFamily: FONTS.CinzelBold,
    fontSize: SIZE.large,
    color: COLORS.lightGray,
    textAlign: 'center',
    marginTop: scaleSize(30),
    marginHorizontal: 40,
  },
});
