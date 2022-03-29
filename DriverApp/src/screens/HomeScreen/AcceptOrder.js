import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, Pressable } from "react-native";

import styles from './styles.js'

/** 
 * This component is responsible for the order acceptance button on the driver side
 * Contains function to accept and decline orders

 * The styles are contains within styles.js in this directory.
*/

const HomeScreen = () => {
  const [car,setCar] = useState(null);
  const [order, setOrder] = useState(null)
  const [newOrders, setNewOrders] = useState([{
    id: '1',
    type: 'UberX',

    originLatitude: 37.42342342342342,
    oreiginLongitude: -122.09495287867832,

    destLatitude: 28.452927,
    destLongitude: -16.260845,

    user: {
      rating: 4.8,
      name: 'Ciara',
    }
  },
  {
    id: '2',
    type: 'Uber Yello',

    originLatitude: 37.42342342342342,
    oreiginLongitude: -122.09495287867832,

    destLatitude: 28.452927,
    destLongitude: -16.260845,

    user: {
      rating: 4.8,
      name: 'Rahat',
    }
  }])


  const onDecline = () => {
    setNewOrders(newOrders.slice(1));
  }

  const onAccept =  (newOrder) => {
    setOrder(newOrder);
    setNewOrders(newOrders.slice(1));
    return 
  }

  const onDirectionFound = (event) => {
    console.log("Direction found: ");
    if (order) {
      setOrder({
        ...order,
        distance: event.distance,
        duration: event.duration,
        pickedUp: order.pickedUp || event.distance < 0.2,
        isFinished: order.pickedUp && event.distance < 0.2,
      })
    }
  }

  const getDestination = () => {
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

  const renderBottomTitle = () => {
    if (order && order.isFinished) {
      return (
        <View style={{ alignItems: 'center' }}>
          <View style={{flexDirection: 'row', alignItems: 'center',justifyContent: 'center', backgroundColor: '#cb1a1a', width: 200, padding: 10,  }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>COMPLETE {order.type}</Text>
          </View>
          <Text style={styles.bottomText}>{order.Name}</Text>
        </View>
      )
    }

    if (order && order.pickedUp) {
      return (
        <View style={{ alignItems: 'center' }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>{order.duration ? order.duration.toFixed(1) : '?'} min</Text>
            <View style={{ backgroundColor: '#d41212', marginHorizontal: 10, width: 30, height: 30, alignItems:'center', justifyContent: 'center', borderRadius: 20}}>
            </View>
            <Text>{order.distance ? order.distance.toFixed(1) : '?'} km</Text>
          </View>
          <Text style={styles.bottomText}>Dropping off {order.Name}</Text>
        </View>
      )
    }

    if (order) {
      return (
        <View style={{ alignItems: 'center' }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>{order.duration ? order.duration.toFixed(1) : '?'} min</Text>
            <View style={{ backgroundColor: '#1e9203', marginHorizontal: 10, width: 30, height: 30, alignItems:'center', justifyContent: 'center', borderRadius: 20}}>
            </View>
            <Text>{order.distance ? order.distance.toFixed(1) : '?'} km</Text>
          </View>
          <Text style={styles.bottomText}>Picking up {order.Name}</Text>
        </View>
      )
    }
    if (car?.IsAvailable) {
      return (
        <Text style={styles.bottomText}>You're online</Text>
      )
    }
    return (<Text style={styles.bottomText}>You're offline</Text>);
  }

  return (
    <View>
      <Pressable
        onPress={() => console.warn('Balance')}
        style={styles.balanceButton}>
        <Text style={styles.balanceText}>
          <Text style={{ color: 'green' }}>$</Text>
          {' '}
          0.00
        </Text>
      </Pressable>

      <Pressable
        onPress={() => console.warn('Hey')}
        style={[styles.roundButton, {top: 10, left: 10}]}>
        <Entypo name={"menu"} size={24} color="#4a4a4a"/>
      </Pressable>

      <Pressable
        onPress={() => console.warn('Hey')}
        style={[styles.roundButton, {top: 10, right: 10}]}>
      </Pressable>

      <Pressable
        onPress={() => console.warn('Hey')}
        style={[styles.roundButton, {bottom: 110, left: 10}]}>
      </Pressable>

      <Pressable
        onPress={() => console.warn('Hey')}
        style={[styles.roundButton, {bottom: 110, right: 10}]}>
      </Pressable>

      <Pressable
        onPress={onGoPress}
        style={styles.goButton}>
        <Text style={styles.goText}>
          {car?.IsAvailable ? 'END' : 'GO'}
        </Text>
      </Pressable>

      <View style={styles.bottomContainer}>
        <Ionicons name={"options"} size={30} color="#4a4a4a"/>
          {renderBottomTitle()}
      </View>

    </View>
  );
};

export default HomeScreen;
