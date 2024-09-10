import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../constants/colors';
import {styles} from './styles';

type GradientBackgroundProps = {
  children?: React.ReactNode;
};

export const GradientBackground = ({children}: GradientBackgroundProps) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[COLORS.darkBrown, COLORS.gradientCenter, COLORS.darkBrown]}
      locations={[0, 0.5, 1]}>
      {children}
    </LinearGradient>
  );
};
