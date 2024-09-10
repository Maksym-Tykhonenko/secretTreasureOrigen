import {Dimensions} from 'react-native';

export const GOOGLE_URL =
  'https://www.google.com/maps/place/Treasury+Hotel+Brisbane/@-27.4726783,153.0220659,17z/data=!3m1!4b1!4m9!3m8!1s0x6b915a03587f0d55:0x7fbee291bd5fe4f0!5m2!4m1!1i2!8m2!3d-27.4726783!4d153.0246408!16s%2Fm%2F012z28fc?authuser=0&entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D';

export const HOTEL_URL =
  'https://www.bing.com/maps?mepi=129%7E%7EUnknown%7EAddress_Link&ty=18&q=Treasury+Brisbane&ss=ypid.YN3724x13895693774328174620&ppois=-27.471670150756836_153.02410888671875_Treasury+Brisbane_YN3724x13895693774328174620%7E&cp=-27.471667%7E153.024101&v=2&sV=1&FORM=MPSRPL&lvl=16.0';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.002;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export const HOTEL_COORDINATES = {
  latitude: -27.4726965,
  longitude: 153.0246342,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};
