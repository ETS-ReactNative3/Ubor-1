import React from "react";
import {View, Text,Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from './Home'
// import HomeNavigator from "./Home";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const DummyScreen = (props) => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>{props.name}</Text>
  </View>
)

const RootNavigator = (props) => {
  return (
    <NavigationContainer>
    
     {/* <HomeNavigator/> */}
      <Drawer.Navigator drawerContent={
        (props) => (
          <CustomDrawer {...props} />)
      }>
        <Drawer.Screen name="Home" component={HomeNavigator} />

        <Drawer.Screen name="Your Trips">
           {() => <DummyScreen name={"Your Trips"} />}
        </Drawer.Screen>

        <Drawer.Screen name="Settings">
          {() => <DummyScreen name={"Settings"} />}
        </Drawer.Screen>        

      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
