import React, {useCallback} from 'react';
import {Linking, Pressable, ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GradientBackground} from '../../ui/GradientBackground';
import {InformationContainer} from '../../ui/InformationContainer';
import {Header} from '../../ui/Header';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FactStackParamList} from '../../navigation/FactsStack';
import {styles} from './styles';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {icons} from '../../constants/images';
import {GOOGLE_URL, HOTEL_COORDINATES, HOTEL_URL} from '../../data/location';

export const LocationScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<FactStackParamList>>();

  const onAddressPress = useCallback(() => {
    Linking.openURL(HOTEL_URL);
  }, []);

  const onMarkerPress = useCallback(() => {
    Linking.openURL(GOOGLE_URL);
  }, []);

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header
            title="Treasure Hotel Map"
            onPress={() => navigation.navigate('FactsScreen')}
          />
          <MapView
            //provider={PROVIDER_GOOGLE}
            //initialRegion={HOTEL_COORDINATES}
            initialRegion={{
              latitude: HOTEL_COORDINATES.latitude,
              longitude: HOTEL_COORDINATES.longitude,
              latitudeDelta: HOTEL_COORDINATES.latitudeDelta,
              longitudeDelta: HOTEL_COORDINATES.longitudeDelta,
            }}
            style={styles.map}>
            <Callout onPress={onMarkerPress}>
              <Marker coordinate={HOTEL_COORDINATES} />
            </Callout>
          </MapView>
          <View style={styles.content}>
            <InformationContainer
              description="Treasury Brisbane"
              imageSource={icons.hotel}
              containerStyle={styles.alignIcon}
            />
            <Pressable onPress={onAddressPress}>
              <InformationContainer
                description={
                  'Treasury Hotel\n130 William Street\nBrisbane QLD 4000'
                }
                imageSource={icons.location}
              />
            </Pressable>

            <InformationContainer
              description="5 Star Hotel"
              imageSource={icons.stars}
              containerStyle={styles.alignIcon}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
};
