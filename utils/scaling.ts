import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const guidelineBase = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};

const scaleSize = (size: number) =>
  Math.round((size * width) / guidelineBase());

export {scaleSize};
