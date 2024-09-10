import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../constants/colors';
import {styles} from './styles';

type ButtonProps = {
  title: string;
  onPress: () => void;
};

export const Button = ({title, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={[COLORS.goldenYellow, COLORS.darkYellow]}
        style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
