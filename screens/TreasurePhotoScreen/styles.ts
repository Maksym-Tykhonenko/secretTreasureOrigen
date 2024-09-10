import {StyleSheet} from 'react-native';
import {FONTS, SIZE} from '../../constants/fonts';
import { COLORS } from '../../constants/colors';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 40,
    alignItems: 'center',
    gap: 20,
  },
  image: {
    width: 175,
    height: 175,
    borderRadius: 20,
  },
  emptyContainer: {
    alignItems: 'center',
    gap: 80,
    marginBottom: 100,
  },
  emptyText: {
    fontFamily: FONTS.InterRegular,
    fontSize: SIZE.small,
    color: COLORS.lightGray,
    marginHorizontal: 45,
    textAlign: 'center',
  },
  column: {
    gap: 20,
  },
  footer: {
    marginTop: 40,
    marginBottom: 100,
  },
  selectedAvatarContainer: {
  alignItems: 'center',
  marginVertical: 20,
},
selectedAvatarText: {
  fontSize: 16,
  marginBottom: 10,
  color: 'white',
},
selectedAvatar: {
  width: windowWidth*0.5,
  height: 230,
  borderRadius: 55,
  marginBottom:20
},
});
