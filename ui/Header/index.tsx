import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {GradientText} from '../GradientText';
import {icons} from '../../constants/images';

type HeaderProps = {
  title: string;
  onPress: () => void;
  onCameraPress?: () => void;
  isCameraShown?: boolean;
};

export const Header = ({
  title,
  onPress,
  isCameraShown,
  onCameraPress,
}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.backButton}>
        <Image source={icons.arrowLeft} />
      </TouchableOpacity>
      <GradientText text={title} textStyle={styles.title} />
      {isCameraShown && (
        <TouchableOpacity style={styles.camera} onPress={onCameraPress}>
          <Image source={icons.camera} />
        </TouchableOpacity>
      )}
    </View>
  );
};
