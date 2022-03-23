/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect } from 'react';
  import 'react-native-gesture-handler'
 import {StatusBar, PermissionsAndroid, Platform} from 'react-native';
 import Geolocation from '@react-native-community/geolocation';
 
import SearchResults from './src/screens/SearchResults';
import HomeScreen from './src/screens/HomeScreen';
import DestinationSearch from './src/screens/DestinationPage';
import Router from './src/navigation/Root'
import UberTypes from './src/components/UberTypes';

navigator.geolocation = require('@react-native-community/geolocation');

import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native';
Amplify.configure(awsconfig)

 
 const App: () => React$Node = () => {
  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Uber App Location Permission",
          message:
            "Uber App needs access to your location " +
            "so you can take awesome rides.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermission();
    } else {
      // IOS
      Geolocation.requestAuthorization();
    }
  }, [])

   return (
     <>
       <StatusBar barStyle="dark-content" />
       <Router />
     </>
   );
 };
 
 export default withAuthenticator(App);
 