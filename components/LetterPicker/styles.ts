import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {SIZE, FONTS} from '../../constants/fonts';

export const styles = StyleSheet.create({
  letterPicker: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 100,
    backgroundColor: COLORS.brown,
    position: 'relative',
    borderColor: COLORS.goldenYellow,
    borderWidth: 1,
    marginBottom: 20,
  },
  letterContainer: {
    position: 'absolute',
  },
  letter: {
    fontSize: SIZE.large,
    color: COLORS.lightGray,
    fontFamily: FONTS.CinzelBold,
  },
});
