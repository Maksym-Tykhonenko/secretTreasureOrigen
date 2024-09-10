import {Image, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {FactStackParamList} from '../../navigation/FactsStack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../../ui/Header';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {GradientBackground} from '../../ui/GradientBackground';
import {styles} from './styles';

export const TreasureFactScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<FactStackParamList>>();

  const {params} =
    useRoute<RouteProp<FactStackParamList, 'TreasureFactScreen'>>();

  const {name, source, description1, description2} = params.item;

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container} edges={['right', 'left', 'top']}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header
            title="Treasure Facts"
            onPress={() => navigation.goBack()}
            isCameraShown={true}
            onCameraPress={() => navigation.navigate('TreasurePhotoScreen')}
          />
          <View style={styles.content}>
            <Image source={source} style={styles.image} />

            <Text style={styles.title}>{name}</Text>
            <Text style={styles.description}>{description1}</Text>
            <Text style={styles.description}>{description2}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
};
