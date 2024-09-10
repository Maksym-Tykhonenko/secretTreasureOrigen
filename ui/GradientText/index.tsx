import {Text, TextStyle} from 'react-native';
import React from 'react';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../constants/colors';
import {styles} from './styles';

type GradientTextProps = {
  text: string;
  textStyle?: TextStyle;
};

export const GradientText = ({text, textStyle}: GradientTextProps) => {
  return (
    <MaskedView
      maskElement={<Text style={[styles.title, textStyle]}>{text}</Text>}>
      <LinearGradient
        colors={[COLORS.goldenYellow, COLORS.darkYellow]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text style={[styles.title, textStyle, styles.gradient]}>{text}</Text>
      </LinearGradient>
    </MaskedView>
  );
};
