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

export const WelcomeScreen = () => {
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
            <Text style={styles.title}>Welcome to our adventure app</Text>
            <Text style={styles.description}>
              Are you ready for unforgettable experiences and searches for
              hidden treasures? In our application, exciting tasks await you
              that will help you discover hidden secrets, explore new places and
              enjoy unique adventures. Whether you're a seasoned adventurer or a
              beginner, we've got something for everyone!
            </Text>
          </View>

          <Button
            title="Continue"
            onPress={() => navigation.navigate('WelcomeNextScreen')}
          />
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
};
