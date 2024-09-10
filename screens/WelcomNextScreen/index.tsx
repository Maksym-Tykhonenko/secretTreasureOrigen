import {Image, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {GradientBackground} from '../../ui/GradientBackground';
import {SafeAreaView} from 'react-native-safe-area-context';
import {logo} from '../../constants/images';
import {Button} from '../../ui/Button';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../navigation/Root';
import {styles} from './styles';

export const WelcomeNextScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container} edges={['top', 'right', 'left']}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}>
          <View>
            <Image source={logo} style={styles.image} />
            <Text style={styles.title}>World of secrets</Text>
            <Text style={styles.description}>
              Go on a journey with new challenges every day. They will help you
              not only to get to know the world around you better, but also to
              get closer to the main prize - the treasure. Solve puzzles,
              complete quests and earn bonuses that will help you in your
              further adventures. Are you ready for unforgettable experiences
              and searches for hidden treasures?
            </Text>
          </View>

          <Button
            title="Continue"
            onPress={() => navigation.navigate('MainTabs')}
          />
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
};
