import React from "react";
import { View, Image, Text,Pressable } from "react-native";


import React from "react";
import { View, Image, Text,Pressable } from "react-native";

/** 
 * This component is responsible getting the destination of the order
 * It helps keep a style on that page so it is clear and a clean UI
 * Also shows the time and distance.
 * The styles are contains within styles.js in this directory.
*/

const getDestination =  (newOrder) => {

    <View style={{ alignItems: 'center' }}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
    <View style={{ backgroundColor: '#d41212', marginHorizontal: 10, width: 30, height: 30, alignItems:'center', justifyContent: 'center', borderRadius: 20}}>
    </View>
    <Text> km</Text>
    </View>
    </View>
    var order = {
        id: '1',
        type: 'UberX',
        originLatitude: 37.42342342342342,
        oreiginLongitude: -122.09495287867832,
        destLatitude: 28.452927,
        destLongitude: -16.260845,
        accept:true
    } 
    if (order && order.pickedUp) {
        return {
          latitude: order.latitude_destination,
          longitude: order.longitude_destination,
        }
      }
      return {
        latitude: order.latitude_rider,
        longitude: order.longitude_rider,
      }
  }

export default onAccept;
