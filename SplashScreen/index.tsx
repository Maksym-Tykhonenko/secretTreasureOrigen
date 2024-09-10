import {Image, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {styles} from './styles';
import {GradientBackground} from '../ui/GradientBackground';
import {MainStackParamList} from '../navigation/Root';
import {logo} from '../constants/images';
import {Button} from '../ui/Button';

export const SplashScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container} edges={['top', 'right', 'left']}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Image source={logo} style={styles.image} />
            <Text style={styles.title}>Secret Treasure</Text>
            <Text style={styles.description}>
              Welcome to the mystery of treasures, discover our secret!
            </Text>
          </View>

          <Button
            title="Start Testing"
            onPress={() => navigation.navigate('WelcomeScreen')}
          />
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
};