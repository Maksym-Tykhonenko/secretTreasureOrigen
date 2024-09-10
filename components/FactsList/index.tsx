import React, {useCallback} from 'react';
import {FlatList, Image, TouchableOpacity} from 'react-native';
import {FactItem, factsData} from '../../data/facts';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FactStackParamList} from '../../navigation/FactsStack';
import {styles} from './styles';

export const FactsList = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<FactStackParamList>>();

  const renderItem = useCallback(
    ({item}: {item: FactItem}) => (
      <TouchableOpacity
        onPress={() => navigation.navigate('TreasureFactScreen', {item})}>
        <Image source={item.source} style={styles.image} />
      </TouchableOpacity>
    ),
    [navigation],
  );

  return (
    <FlatList
      data={factsData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
      contentContainerStyle={styles.content}
      columnWrapperStyle={styles.row}
      scrollEnabled={false}
    />
  );
};