import React from "react";
import { View, Text, Pressable } from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

import styles from './styles.js';

/**
 * This component is input for where you want to go to.
 * You put your destination or home destinations or other
 * destination into the search bar.
 */
const HomeSearch = (props) => {
  const navigation = useNavigation();
  const goToSearch = () => {
    navigation.navigate("DestinationSearch");
  }
  return (
    <View>
      {/*  Input Box */}
      <Pressable onPress={goToSearch} style={styles.inputBox}>
        <Text style={styles.inputText}>Where To?</Text>

        
      </Pressable>

     
      
    </View>
  );
};

export default HomeSearch;