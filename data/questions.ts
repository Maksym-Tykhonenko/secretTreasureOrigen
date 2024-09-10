import {ImageSourcePropType} from 'react-native';
import {questionImages} from '../constants/images';

export interface QuestionItem {
  id: string;
  question: string;
  image: ImageSourcePropType;
  options: string[];
  correctOption: string;
  description?: string;
}

export const questions: QuestionItem[] = [
  {
    id: '1',
    question: 'Which hotel is considered the most luxurious in Dubai?',
    image: questionImages.dubai,
    options: ['Burj Al Arab', 'The Ritz-Carlton', 'Marina Bay Sands'],
    correctOption: 'Marina Bay Sands',
  },
  {
    id: '2',
    question:
      'Which hotel in Paris is famous for its view of the Eiffel Tower?',
    image: questionImages.paris,
    options: [
      'The Peninsula Paris',
      'Hôtel de Crillon',
      'Shangri-La Hotel Paris',
    ],
    correctOption: 'Shangri-La Hotel Paris',
  },
  {
    id: '3',
    question:
      'Famous movie stars including Marilyn Monroe and Greta Garbo stayed at which New York hotel?',
    image: questionImages.newYork,
    options: ['The Pierre', 'The Plaza Hotel', 'The Waldorf Astoria'],
    correctOption: 'The Plaza Hotel',
  },
  {
    id: '4',
    question: 'Which hotel in Las Vegas has the most rooms in the world?',
    image: questionImages.lasVegas,
    options: ['The Venetian', 'Bellagio', 'MGM Grand'],
    correctOption: 'MGM Grand',
  },
  {
    id: '5',
    question: 'Which hotel in the Maldives is famous for its underwater rooms?',
    image: questionImages.maldives,
    options: [
      'Soneva Fushi',
      'Conrad Maldives Rangali Island',
      'Four Seasons Resort Maldives',
    ],
    correctOption: 'Conrad Maldives Rangali Island',
  },
  {
    id: '6',
    question:
      'In which hotel in Tokyo can you find the rooftop bar that was popularized in the movie Lost in Translation?',
    image: questionImages.tokyo,
    options: [
      'The Prince Park Tower',
      'Park Hyatt Tokyo',
      'The Ritz-Carlton Tokyo',
    ],
    correctOption: 'Park Hyatt Tokyo',
  },
  {
    id: '7',
    question:
      'Which hotel in Amsterdam is famous for its own canal and rich history dating back to 1867?',
    image: questionImages.amsterdam,
    options: [
      'InterContinental Amstel Amsterdam',
      'Hotel De L Europe Amsterdam',
      'The Dylan Amsterdam',
    ],
    correctOption: 'InterContinental Amstel Amsterdam',
  },
  {
    id: '8',
    question:
      'In which hotel in Hawaii can you find a pool with sea turtles and reef sharks?',
    image: questionImages.hawaii,
    options: [
      'Atlantis, The Royal Hawaiian',
      'Four Seasons Resort Mau',
      'The Ritz-Carlton, Kapalua',
    ],
    correctOption: 'Atlantis, The Royal Hawaiian',
  },
];
