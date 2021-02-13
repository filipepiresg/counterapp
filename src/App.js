import 'react-native-gesture-handler';
import './config/ReactotronConfig';
import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';
import { Colors } from './styles';

const App = () => (
  <>
    <StatusBar backgroundColor={Colors.PRIMARY} barStyle='light-content' />
    <Routes />
  </>
);

export default App;
