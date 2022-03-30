import React from "react";
import { View, Dimensions } from "react-native";

import HomeMap from '../../components/InitalMapView';
import AppInfo from '../../components/AppInfo';
import HomeSearch from '../../components/InitialSearchView';

const HomeScreen = (props) => {
  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 220}}>
        <HomeMap />
      </View>
      <AppInfo />
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
