import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, Pressable } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
import styles from './styles.js'
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import NewOrderPopup from "../../components/NewOrderPopup";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const GOOGLE_MAPS_APIKEY = 'AIzaSyA5VWIifqHFf9PuEpxXUUr72KgJa7lbQek';
import {API,graphqlOperation} from 'aws-amplify';
import { listDrivers } from "../../graphql/queries";
import { updateDriver } from "../../graphql/mutations.js";
import { listCustomerLocationDestinations } from "../../graphql/queries";


const HomeScreen = () => {
  const [car,setCar] = useState(null);
  const [myPosition, setMyPosition] = useState(null);
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

  const fetchCar = async () =>{
    try{  
      const userData = await API.graphql(graphqlOperation(
        listDrivers,{
          filter: {License_no: {eq: 12}}
        }
      ))
      setCar(userData.data.listDrivers.items[0]);
    }catch(e){
      console.log(e);
    }
  }

  const fetchOrders = async () =>{
    try {
      const listAllOrders = await API.graphql(graphqlOperation(
        listCustomerLocationDestinations,{
          filter: {isAssigned: {eq: false}}
        }
      ))
      setNewOrders(listAllOrders.data.listCustomerLocationDestinations.items)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchCar();
    fetchOrders();
  },[])

  const onGoPress = async () => {
    try {
      const updateCarState = await API.graphql(graphqlOperation(
        updateDriver,{
          input: {
            IsAvailable: !car.IsAvailable,
          id: car.id
          }
        }
      ))
      setCar(updateCarState.data.updateDriver)
    } catch (error) {
      console.log(error)
    }
  }
  const onDecline = () => {
    setNewOrders(newOrders.slice(1));
  }

  const onAccept =  (newOrder) => {
    console.log(newOrder)
    setOrder(newOrder);
    setNewOrders(newOrders.slice(1));
  }
  const onUserLocationChange = (event) => {
    setMyPosition(event.nativeEvent.coordinate);
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
              <FontAwesome name={"user"} color={"white"} size={20} />
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
              <FontAwesome name={"user"} color={"white"} size={20} />
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
      <MapView
        style={{width: '100%', height: Dimensions.get('window').height - 120}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        onUserLocationChange={onUserLocationChange}
        initialRegion={{
          latitude: 37.42342342342342,
          longitude: -122.09495287867832,
          latitudeDelta: 0.02,
          longitudeDelta: 0.0121,
        }}
      >
        
        {order && (
          <MapViewDirections
            origin={myPosition}
            onReady={onDirectionFound}
            destination={getDestination()}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={5}
            strokeColor="black"
          />
        )}
      </MapView>

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
        <Entypo name={"menu"} size={24} color="#4a4a4a"/>
      </Pressable>

      <Pressable
        onPress={() => console.warn('Hey')}
        style={[styles.roundButton, {bottom: 110, left: 10}]}>
        <Entypo name={"menu"} size={24} color="#4a4a4a"/>
      </Pressable>

      <Pressable
        onPress={() => console.warn('Hey')}
        style={[styles.roundButton, {bottom: 110, right: 10}]}>
        <Entypo name={"menu"} size={24} color="#4a4a4a"/>
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
        <Entypo name={"menu"} size={30} color="#4a4a4a" />
      </View>

      {newOrders.length > 0 && !order && <NewOrderPopup
        newOrder={newOrders[0]}
        duration={2}
        distance={0.5}
        onDecline={onDecline}
        onAccept={() => onAccept(newOrders[0])}
      />}
    </View>
  );
};

export default HomeScreen;
