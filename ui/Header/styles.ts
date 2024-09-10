import {StyleSheet} from 'react-native';
import {SIZE} from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginHorizontal: 30,
    marginTop: 30,
  },
  backButton: {
    position: 'absolute',
    left: 0,
  },
  title: {
    paddingLeft: 15,
    fontSize: SIZE.large,
  },
  camera: {
    position: 'absolute',
    right: 0,
  },
});
