import { Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

const metrics = {
  screenWidth,
  screenHeight,
};

export default metrics;
