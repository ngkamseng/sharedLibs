/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { HttpServices } from './src/services/http.services';

export const httpServices = new HttpServices();
AppRegistry.registerComponent(appName, () => App);