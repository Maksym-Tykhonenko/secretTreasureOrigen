import {questionImages} from '../constants/images';
import {QuestionItem} from './questions';

export const questions: QuestionItem[] = [
  {
    id: '1',
    question: 'The largest hotel in the world has more than 10,000 rooms.',
    image: questionImages.dubai,
    options: ['True', 'False'],
    correctOption: 'True',
    description:
      'True. The largest hotel in the world, First World Hotel in Malaysia, has more than 7,351 rooms, but plans to expand.',
  },
  {
    id: '2',
    question: 'Some hotels in Japan have robots at the front desk.',
    image: questionImages.paris,
    options: ['True', 'False'],
    correctOption: 'True',
    description:
      'True. There are several hotels in Japan where robots act as receptionists and staff.',
  },
  {
    id: '3',
    question:
      'The Burj Al Arab Hotel in Dubai is the only 7-star hotel in the world.',
    image: questionImages.dubai2,
    options: ['True', 'False'],
    correctOption: 'False',
    description:
      'False. Although the Burj Al Arab is often advertised as a 7-star hotel, there is no such category officially. It officially has 5 stars.',
  },
  {
    id: '4',
    question:
      'Hotels never put the number 13 on their floors due to superstition.',
    image: questionImages.hawaii,
    options: ['True', 'False'],
    correctOption: 'True',
    description:
      'True. Many hotels avoid using the number 13 in rooms due to widespread superstition.',
  },
  {
    id: '5',
    question: 'The oldest hotel in the world is located in Italy.',
    image: questionImages.tokyo,
    options: ['True', 'False'],
    correctOption: 'False',
    description:
      'False. The oldest hotel in the world - Nishiyama Onsen Keiunkan - is located in Japan and was opened in 705.',
  },
  {
    id: '6',
    question:
      'The Plaza has been the location of many movies and series, including Home Alone and Lost in New York.',
    image: questionImages.lasVegas,
    options: ['True', 'False'],
    correctOption: 'True',
    description:
      'True. The Plaza is a historic hotel that has been the location for many movies and TV shows, including Home Alone and Lost in New York.',
  },
  {
    id: '7',
    question:
      'The Adlon Hotel in Berlin was completely destroyed during World War II.',
    image: questionImages.paris,
    options: ['True', 'False'],
    correctOption: 'True',
    description:
      'True. The hotel was destroyed as a result of the war and fire.',
  },
  {
    id: '8',
    question: 'The "Hotel de Glace" in Canada is made entirely of ice.',
    image: questionImages.canada,
    options: ['True', 'False'],
    correctOption: 'True',
    description:
      'True. Located in Quebec, this hotel is really made entirely of ice and snow.',
  },
];