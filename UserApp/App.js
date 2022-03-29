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
import {Auth} from 'aws-amplify'
import { withAuthenticator} from 'aws-amplify-react-native';
 
import Router from './src/navigation/Root'

navigator.geolocation = require('@react-native-community/geolocation');

 
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
      // Auth.currentUserInfo().then(info => {console.log(info)});
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
 const signUpConfig = {
  header: "My Customized Sign Up",
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "Username",
      key: "username",
      required: true,
      displayOrder: 1,
      type: "string",
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 2,
      type: "password",
    },
    {
      label: "Email",
      key: "email",
      required: true,
      displayOrder: 3,
      type: "string",
    },
    {
      label: "First Name",
      key: "custom:fname",
      required: true,
      displayOrder: 4,
      type: "string",
    },
    {
      label: "Last Name",
      key: "custom:lname",
      required: true,
      displayOrder: 5,
      type: "string",
    },
    {
      label: "Phone Number",
      key: "phone_number",
      required: true,
      displayOrder: 6,
      type: "string",
    },
    {
      label: "Date of Birth",
      key: "custom:dob",
      required: true,
      displayOrder: 7,
      type: "string",
    }
  ],
};
 
 export default withAuthenticator(App, {signUpConfig}) ; 