/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import RootNavigation from './app/navigator/RootNavigation';

AppRegistry.registerComponent(appName, () => RootNavigation);
