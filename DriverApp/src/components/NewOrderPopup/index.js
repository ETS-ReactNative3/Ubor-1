import React from "react";
import { View, Text, Pressable } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from './styles.js';


/** 
 * This component is responsible for the order popup on the driver side
 * It helps keep a style on that page so it is clear and a clean UI
 * Also shows the time and distance.
 * It also displays the app info.
 * The styles are contains within styles.js in this directory.
*/

const NewOrderPopup = ({ newOrder, onAccept, onDecline, duration, distance }) => {

  return (
    <View style={styles.root}>
      <Pressable onPress={onDecline} style={styles.declineButton}>
        <Text style={styles.declineText}>Decline</Text>
      </Pressable>

      <Pressable onPress={onAccept} style={styles.popupContainer}>

        <View style={styles.row}>
          <Text style={styles.uberType}>{'UberX'}</Text>

          <View style={styles.userBg}>
            <FontAwesome name={"user"} color={"white"} size={35} />
          </View>

          <Text style={styles.uberType}>
            <AntDesign name={"star"} size={18}/>
            {'4.8'}
          </Text>
        </View>

        <Text style={styles.minutes}>{duration} min</Text>
        <Text style={styles.distance}>{distance} km</Text>

      </Pressable>
    </View>
  );
};

export default NewOrderPopup;
