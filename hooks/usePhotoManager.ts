import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  launchCamera,
  ImagePickerResponse,
  MediaType,
} from 'react-native-image-picker';

export const usePhotoManager = () => {
  const [images, setImages] = useState<string[]>([]);

  const options = {
    mediaType: 'photo' as MediaType,
    includeBase64: false,
  };

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    try {
      const imagesString = await AsyncStorage.getItem('images');
      if (imagesString) {
        setImages(JSON.parse(imagesString));
      }
    } catch (error) {
      console.error('Failed to load images', error);
    }
  };

  const storeImages = async (img: string[]) => {
    try {
      await AsyncStorage.setItem('images', JSON.stringify(img));
    } catch (error) {
      console.error('Failed to save images', error);
    }
  };

  const handleCameraLaunch = () => {
    launchCamera(options, handleResponse);
  };

  const handleResponse = async (response: ImagePickerResponse) => {
    if (response.assets) {
      let imageUri = response.assets[0]?.uri || null;
      if (imageUri) {
        const updatedImages = [...images, imageUri];
        setImages(updatedImages);
        await storeImages(updatedImages);
      }
    }
  };

  return {
    images,
    handleCameraLaunch,
  };
};