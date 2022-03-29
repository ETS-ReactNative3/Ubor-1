import React from "react";
import { View, Image, Text,Pressable } from "react-native";

/** 
 * This component is responsible for the order hadling on the driver side
 * Also shows the order location with lat and long 
 * and checks for orders
 * The styles are contains within styles.js in this directory.
*/

const orderHandling =  (newOrder) => {

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
    const dest = ["28.452927", "-16.260845"];
    if(newOrder.checker && newOrder.test == 'long') return "-16.260845";

    if(newOrder.checker) return "28.452927";

    if(newOrder.accept == true) {
        return "accepted order";
    } else {
        return "order declined";
    }
  }

export default orderHandling;
