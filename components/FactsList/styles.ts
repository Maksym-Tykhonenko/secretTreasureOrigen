import {StyleSheet} from 'react-native';
import {scaleSize} from '../../utils/scaling';

export const styles = StyleSheet.create({
  image: {
    height: scaleSize(240),
    width: scaleSize(175),
    borderRadius: scaleSize(60),
  },
  content: {
    marginTop: scaleSize(50),
    alignItems: 'center',
    gap: scaleSize(20),
    marginBottom: scaleSize(30),
  },
  row: {
    gap: scaleSize(20),
  },
});
