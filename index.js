/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { HttpServices } from './src/services/http.services';
import { StateServices } from './src/services/state.services';

export const httpServices = new HttpServices();
export const stateService = new StateServices();

AppRegistry.registerComponent(appName, () => App);