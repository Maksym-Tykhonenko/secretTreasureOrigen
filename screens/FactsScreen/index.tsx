import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../../ui/Header';
import {FactsList} from '../../components/FactsList';
import {GradientBackground} from '../../ui/GradientBackground';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FactStackParamList} from '../../navigation/FactsStack';
import {ScrollView} from 'react-native';

export const FactsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<FactStackParamList>>();

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header
            title="Treasure Facts"
            onPress={() => navigation.goBack()}
            isCameraShown={true}
            onCameraPress={() => navigation.navigate('TreasurePhotoScreen')}
          />
          <FactsList />
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
};
