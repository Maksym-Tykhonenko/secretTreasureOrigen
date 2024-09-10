import {
  Image,
  ImageSourcePropType,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {styles} from './styles';

type InformationContainerProps = {
  description: string;
  imageSource: ImageSourcePropType;
  containerStyle?: StyleProp<ViewStyle>;
};

export const InformationContainer = ({
  description,
  imageSource,
  containerStyle,
}: InformationContainerProps) => {
  return (
    <View style={[styles.description, containerStyle]}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.text}>{description}</Text>
    </View>
  );
};
