import {ScrollView, Text} from 'react-native';
import React from 'react';
import {GradientBackground} from '../../ui/GradientBackground';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../../ui/Header';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainTabsParamList} from '../../navigation/Tab';
import {LetterPicker} from '../../components/LetterPicker';
//import {letters} from '../../data/crossword';
import { letters } from '../../data/crossworld';
import {CrosswordGrid} from '../../ui/GrosswordGrid';
import {styles} from './styles';
import {useCrossword} from '../../hooks/useCrossword';

export const CrosswordScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabsParamList>>();

  const {grid, handleLetterPress} = useCrossword();

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header title="Collect words" onPress={() => navigation.goBack()} />
          <Text style={styles.text}>
            Collect the words from the given letters
          </Text>
          <CrosswordGrid grid={grid} />
          <LetterPicker letters={letters} onLetterPress={handleLetterPress} />
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
};
