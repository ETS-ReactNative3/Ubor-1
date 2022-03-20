import React from "react";
import {View, Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from "@react-navigation/drawer";
import SearchResults from '../screens/SearchResults';
import HomeScreen from '../screens/HomeScreen';
import DestinationSearch from '../screens/DestinationPage';


const HomeNavigator = (props) => {

  const Stack = createStackNavigator();
  return (
     <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false,
      }}>
     <Stack.Screen name={"Home"} component={HomeScreen} />
      <Stack.Screen name={"DestinationSearch"} component={DestinationSearch} />
      <Stack.Screen name={"SearchResults"} component={SearchResults} />
     </Stack.Navigator> 
  );
}

export default HomeNavigator;