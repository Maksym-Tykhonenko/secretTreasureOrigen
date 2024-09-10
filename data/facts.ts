import {ImageSourcePropType} from 'react-native';
import {factsImages} from '../constants/images';

export interface FactItem {
  id: string;
  source: ImageSourcePropType;
  name: string;
  description1: string;
  description2: string;
}

export const factsData: FactItem[] = [
  {
    id: '1',
    source: factsImages.hotel,
    name: 'Hotel Treasury Brisbane',
    description1:
      'Located in the heart of Brisbane, in the historic part of the city, Treasury Hotel Brisbane offers its guests round-the-clock entertainment of the highest class.',
    description2:
      "Founded in 1995, Treasury Brisbane continues to captivate visitors and residents of Brisbane. The hotel steeped in history has five-star rooms, ten restaurants and bars, and the city's only non-stop casino.",
  },
  {
    id: '2',
    source: factsImages.kitchen,
    name: 'Treasure Kitchen',
    description1:
      "Kitchen at Treasury is one of Brisbane's best kept secrets.  This is a homey diner where you can enjoy a rich menu of classic dishes, including breakfast at any time of the day, mouth-watering burgers and exquisite desserts.",
    description2:
      'Only the freshest local products are used here, cooked in an open kitchen, and the friendly staff and cozy interior create a warm and inviting atmosphere at any time of the day.',
  },
  {
    id: '3',
    source: factsImages.opening,
    name: 'Opening of the Brisbane Treasury',
    description1:
      'Treasury Brisbane opened its doors in 1995 and has continued to delight visitors and residents of Brisbane alike ever since. As the proud custodian of historic Treasury and Land Administration buildings, we have invested $57 million to repurpose, restore and maintain them. ',
    description2:
      'Specifically, $5.6 million was spent on the preservation of the masonry, which won a Gold Award from the Queensland Heritage Council in 2008 and 2014.',
  },
  {
    id: '4',
    source: factsImages.casino,
    name: 'Hotel Treasury Brisbane',
    description1:
      "With 125 unique rooms with exquisite luxury and modern five-star amenities, the Treasury Hotel is the epitome of luxury in the heart of Brisbane's business district.",
    description2:
      "With a 24-hour casino, a variety of dining options, and some of the city's best nightlife, it's all readily available here. Treasury Hotel offers an unparalleled level of luxury, serenity, and fun that you won't find anywhere else.",
  },
];
