/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Amplify from 'aws-amplify'
import awsconfig from './src/aws-exports'
awsconfig.aws_appsync_authenticationType = "API_KEY";
Amplify.configure(awsconfig)
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => App);