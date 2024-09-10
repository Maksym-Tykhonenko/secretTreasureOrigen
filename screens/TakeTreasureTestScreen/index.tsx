import {Image, ScrollView, Text} from 'react-native';
import React from 'react';
import {GradientBackground} from '../../ui/GradientBackground';
import {SafeAreaView} from 'react-native-safe-area-context';
import {icons, treasures} from '../../constants/images';
import {Button} from '../../ui/Button';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TestStackParamList} from '../../navigation/TestStack';
import {styles} from './styles';

export const TakeTreasureTestScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<TestStackParamList>>();

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container} edges={['top', 'right', 'left']}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}>
          <Image source={icons.timer} />
          <Text style={styles.title}>Take the Brisbane Treasures Quiz</Text>
          <Image source={treasures} style={styles.image} />
          <Button
            title="Pass the test"
            onPress={() => navigation.navigate('TreasureTestScreen')}
          />
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
};
