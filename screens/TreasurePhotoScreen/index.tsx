import {FlatList, Image, ImageSourcePropType, ScrollView, Text, View} from 'react-native';
import React, {useCallback, useState,useEffect} from 'react';
import {GradientBackground} from '../../ui/GradientBackground';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../../ui/Header';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FactStackParamList} from '../../navigation/FactsStack';
import {Button} from '../../ui/Button';
import {styles} from './styles';
import {icons} from '../../constants/images';
import { usePhotoManager } from '../../hooks/usePhotoManager';
import { launchImageLibrary, ImageLibraryOptions, Asset } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TreasurePhotoScreen = () => {

  const navigation =
    useNavigation<NativeStackNavigationProp<FactStackParamList>>();
  const { images, handleCameraLaunch } = usePhotoManager();

  const renderEmptyList = useCallback(() => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          Your photo gallery is empty. Take your first photo.
        </Text>
        <Image source={icons.gallery} />
      </View>
    );
  }, []);

  const renderItem = useCallback(({ item }: { item: string }) => {
    const imageSource: ImageSourcePropType = { uri: item };

    return <Image source={imageSource} style={styles.image} />;
  }, []);

  const [selectAvatar, setSelectAvatar] = useState<string[]>([]);
  console.log('selectAvatar==>', selectAvatar)

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [selectAvatar]);

  const setData = async () => {
    try {
      const data = {
        selectAvatar,
      };

      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem(`Photo`, jsonData);
      //console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      //console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`Photo`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        //console.log('parsedData==>', parsedData);
        setSelectAvatar(parsedData.selectAvatar);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const options: ImageLibraryOptions = {
    mediaType: 'photo', // Вказано тип медіа
    //storageOptions: {
    //  path: 'image',
    //},
  };

  const handleImagePick = () => {
    launchImageLibrary(options, response => {
      if (!response.didCancel && response.assets) {
        const selectedImageUri = response.assets[0]?.uri || null;
        if (selectedImageUri) {
          // Додаємо нове зображення до масиву
          setSelectAvatar(prevAvatars => [...prevAvatars, selectedImageUri]);
        }
      } else {
        console.log('Вибір скасовано');
      }
    });
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <Header
          title="Treasure photo"
          onPress={() => navigation.navigate('FactsScreen')}
        />
        
            {/* Якщо вибране зображення є, рендеримо його */}
        {selectAvatar.length > 0 ? (
          <ScrollView>
          <View style={{ alignItems:'center'}}>
              <View style={styles.selectedAvatarContainer}>
                <Text style={styles.selectedAvatarText}></Text>
                {selectAvatar.map((uri, index) => (
                  <Image key={index} source={{ uri }} style={styles.selectedAvatar} />
                ))}
                <Button title="Take a photo" onPress={handleImagePick} />
              </View>
              </View>
         <View style={{height:150}}></View>
        </ScrollView>
            ) : (
              <FlatList
                data={images}
                renderItem={renderItem}
                ListEmptyComponent={renderEmptyList}
                numColumns={2}
                columnWrapperStyle={styles.column}
                contentContainerStyle={styles.content}
                ListFooterComponentStyle={styles.footer}
                ListFooterComponent={
                  <Button title="Take a photo" onPress={handleImagePick} />
                }
              />
            )}
          
        
        
            
         
      </SafeAreaView>
    </GradientBackground>
  );
};

{/** 
  
*/}