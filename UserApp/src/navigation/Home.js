import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import SearchResults from '../screens/UserSearchResults';
import HomeScreen from '../screens/InitialScreen';
import FinalDestinationPage from '../screens/FinalDestinationPage';


const HomeNavigator = (props) => {

  const Stack = createStackNavigator();
  return (
     <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false,
      }}>
     <Stack.Screen name={"Home"} component={HomeScreen} />
      <Stack.Screen name={"DestinationSearch"} component={FinalDestinationPage} />
      <Stack.Screen name={"SearchResults"} component={SearchResults} />
     </Stack.Navigator> 
  );
}

export default HomeNavigator;