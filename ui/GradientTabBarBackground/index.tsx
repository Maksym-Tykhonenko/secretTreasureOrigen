import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../constants/colors';
import {styles} from './styles';

export const GradientTabBarBackground = () => (
  <LinearGradient
    colors={[COLORS.tabBackground, COLORS.tabBackground]}
    style={styles.container}
  />
);
