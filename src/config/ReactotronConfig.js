/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import Reactotron from 'reactotron-react-native';

import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
    .configure({
      name: 'Counters',
    }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!

  tron.clear();

  console.tron = tron;
}
