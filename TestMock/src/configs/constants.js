import { Dimensions, StatusBar } from 'react-native';

import { Header } from 'react-navigation-stack';
import deviceInfo from 'react-native-device-info';

const isAndroid = Platform.OS === 'android';
const isIOS = Platform.OS === 'ios';

let { width: deviceX, height: deviceY } = Dimensions.get('window');
const isLandscape = deviceX > deviceY;
const isPortrait = deviceX < deviceY;

const initialConstants = {
  isAndroid,
  isIOS,
  deviceX,
  deviceY,
  isLandscape,
  isPortrait,
  tabBarHeight: 70,
  get ratioX() {
    return this.deviceX < 375 ? (this.deviceX < 320 ? 0.75 : 0.875) : 1;
  },
  get ratioY() {
    return this.deviceY < 568 ? (this.deviceY < 480 ? 0.75 : 0.875) : 1
  },
  get navBarHeight() {
    return Header.HEIGHT * this.ratioX + (deviceInfo.hasNotch() ? 10 : 0);
  },
  get iconSize() {
    return 22 * this.ratioX;
  },
  statusBarHeight: StatusBar.currentHeight,
  inputIconSize: 15,
  tabIconSize: isIOS ? 30 : 15,
  hitSlop: {
    top: 15,
    bottom: 15,
    left: 15,
    right: 15,
  },
};

export default initialConstants;