import {StyleSheet} from 'react-native';
import {FONTS, SIZE} from '../../constants/fonts';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  image: {
    marginTop: 50,
    marginBottom: 20,
    alignSelf: 'center',
  },
  title: {
    fontFamily: FONTS.CinzelBold,
    fontSize: SIZE.extraLarge,
    color: COLORS.lightGray,
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontFamily: FONTS.InterRegular,
    fontSize: SIZE.small,
    color: COLORS.lightGray,
    textAlign: 'center',
    marginHorizontal: 26,
    marginBottom: 20,
  },
});
