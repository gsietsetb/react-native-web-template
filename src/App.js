/*import AsyncStorage from '@react-native-async-storage/async-storage';*/
import { extend } from 'consistencss';
import React from 'react';
import { LogBox } from 'react-native';
import { isWeb, vColors } from './design/vStyles';
import './index.css';
import { Folio } from './screens/Folio';
import { UserStore } from './store/AuthStore';

/*const Stack = createStackNavigator();*/

LogBox.ignoreLogs([
  'Warning:',
  'Running ',
  'WARN',
  '[mobx] Out of bounds read',
]);
LogBox.ignoreAllLogs();

if ((isWeb && process.env.NODE_ENV === 'production') || (!isWeb && __DEV__)) {
  console.log = () => {
  };
}

extend({ colors: { ...vColors } });

export const profile = UserStore();
console.log = () => {
};

export default () => <Folio />;
