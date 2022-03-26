/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {Auth} from 'aws-amplify'
import { withAuthenticator} from 'aws-amplify-react-native';
 
 import {
   SafeAreaView,
   StatusBar,
 } from 'react-native';
 import HomeScreen from './src/screens/HomeScreen';
 
 const App: () => React$Node = () => {
   return (
     <>
       <StatusBar barStyle="dark-content" />
       <SafeAreaView>
         <HomeScreen />
       </SafeAreaView>
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
      label: "License Plate Number",
      key: "custom:license",
      required: true,
      displayOrder: 3,
      type: "string",
    },
    {
      label: "Car Colour",
      key: "custom:carColour",
      required: true,
      displayOrder: 4,
      type: "number",
    },
    {
      label: "Email",
      key: "email",
      required: true,
      displayOrder: 5,
      type: "string",
    },
    {
      label: "First Name",
      key: "custom:fname",
      required: true,
      displayOrder: 6,
      type: "string",
    },
    {
      label: "Last Name",
      key: "custom:lname",
      required: true,
      displayOrder: 7,
      type: "string",
    },
    {
      label: "Phone Number",
      key: "phone_number",
      required: true,
      displayOrder: 8,
      type: "string",
    },
    {
      label: "Date of Birth",
      key: "custom:dob",
      required: true,
      displayOrder: 9,
      type: "string",
    }
  ],
};
 
export default withAuthenticator(App, {signUpConfig}) ;
 