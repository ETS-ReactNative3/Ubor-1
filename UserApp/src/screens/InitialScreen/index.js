import React from "react";
import { View, Dimensions } from "react-native";

import HomeMap from '../../components/InitalMapView';
import CovidMessage from '../../components/AppInfo';
import HomeSearch from '../../components/InitialSearchView';

const HomeScreen = (props) => {
  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <HomeMap />
      </View>

      {/*  Covid Message*/}
      <CovidMessage />

      {/*  Bottom Comp*/}
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
