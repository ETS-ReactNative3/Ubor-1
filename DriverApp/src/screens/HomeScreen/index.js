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
import { Auth } from "aws-amplify";
import { updateCustomerLocationDestination } from "../../graphql/mutations.js";
import {getDistance} from 'geolib'

/** 
 * This file contains multiple functions on the driver side
 * The styles are contains within styles.js in this directory.
*/


/** 
 * This component sets the state, position, new orders and distance values 
*/


const HomeScreen = () => {
  const [car,setCar] = useState(null);
  const [myPosition, setMyPosition] = useState(null);
  const [order, setOrder] = useState(null)
  const [distanceCal,setDistanceCal] = useState(12);
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
    const userInfo = await Auth.currentUserInfo();
    try{  
      const userData = await API.graphql(graphqlOperation(
        listDrivers,{
          filter: {id: {eq: userInfo.attributes.sub}}
        }
      ))
      // console.log(userData.data.listDrivers)
      setCar(userData.data.listDrivers.items[0]);
      // if(userData.data.listDrivers.items[0].Customer_id!=null){
      //   console.log("Not null")
      //   const gettingOrderInfo = await API.graphql(graphqlOperation(
      //     listCustomerLocationDestinations,{
      //       filter: {id: {eq: userData.data.listDrivers.items[0].Customer_id}}
      //     }
      //   ))
      //   console.log("Setting stuff",gettingOrderInfo.data.listCustomerLocationDestinations)
      //   setOrder(gettingOrderInfo.data.listCustomerLocationDestinations)
      // }else 
      // console.log("Not null")
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
      // console.log(listAllOrders.data.listCustomerLocationDestinations)
      setNewOrders(listAllOrders.data.listCustomerLocationDestinations.items)
    } catch (error) {
      console.log(error)
    }
  }

  const settingRefreshStuff = async () => {
    console.log(car);
    // if(car.Customer_id!=null){
    //   console.log("Not null")
    //   const gettingOrderInfo = await API.graphql(graphqlOperation(
    //     listCustomerLocationDestinations,{
    //       filter: {id: {eq: car.Customer_id}}
    //     }
    //   ))
    //   console.log("Setting stuff",gettingOrderInfo.data.listCustomerLocationDestinations)
    //   setOrder(gettingOrderInfo.data.listCustomerLocationDestinations)
    // }else 
    // console.log("Not null")
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
      // console.log(updateCarState.data.updateDriver.IsAvailable)
      setCar(updateCarState.data.updateDriver)
    } catch (error) {
      console.log(error)
    }
  }
  const onDecline = () => {
    setDistanceCal(getDistance({
      latitude: newOrders[0].latitude_rider,
      longitude: newOrders[0].longitude_rider
    },{latitude: 37.35485,longitude: -122.085478})/1000
);    
//  console.log("Distacne cal is ",distanceCal);
    setNewOrders(newOrders.slice(1));
  }

  const onAccept = async (newOrder) => {
    // console.log(newOrder
    // console.log(newOrder);
    try {
      await fetchOrders();
      const userInfo = await Auth.currentUserInfo();
      console.log("new Orders 114",newOrders)
      if (newOrders.includes(newOrder)){
        // console.log("inside if");
        const updateOrderStatus = await API.graphql(
          graphqlOperation(
            updateCustomerLocationDestination,{
              input: {
                id: newOrder.id,
                isAssigned: !newOrder.isAssigned,
                carID: userInfo.attributes.sub
              }
            }
          ),
        )
        const addingCustId = await API.graphql(
          graphqlOperation(
            updateDriver,{
              input: {
                id: userInfo.attributes.sub,
                Customer_id: newOrder.id
              }
            }
          )
        )
        console.log(addingCustId.data)
        // console.log("update car",updateOrderStatus.data)
      }
      }catch (error) {
        console.log(error)
      }
      setOrder(newOrder);
      setNewOrders(newOrders.slice(1));
  }
  const onUserLocationChange = async (event) => {
    const userInfo = await Auth.currentUserInfo();
    setMyPosition(event.nativeEvent.coordinate);
    const {latitude,longitude} = event.nativeEvent.coordinate
    try {
      const updateCarState = await API.graphql(graphqlOperation(
        updateDriver,{
          input: {
            Latitude: latitude,
            Longitude: longitude,
            id: userInfo.attributes.sub
          }
        }
      ))
      setCar(updateCarState.data.updateDriver)
    } catch (error) {
      console.log(error)
    }
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
    // console.log(order);
    return {
      latitude: order.latitude_rider,
      longitude: order.longitude_rider,
    }
  }


  /** 
 * This component renders the bottom title and some distance info and the main driver side ui as well
 * It also shows the staus such as online or offline etc
*/
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
      // console.log(order)
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
        showsMyLocationButton={true}
        showsUserLocation={true}
        followsUserLocation={true}
        userLocationPriority={'high'}
        userLocationUpdateInterval={10}
        userLocationFastestInterval={10}
        onUserLocationChange={onUserLocationChange}
        initialRegion={{
          latitude: 37.42342342342342,
          longitude: -122.09495287867832,
          latitudeDelta: 0.002,
          longitudeDelta: 0.01021,
        }}
      >
        
        {order && (
          // console.log(car),
          <MapViewDirections
            origin={
              {
              latitude: car.Latitude,
              longitude: car.Longitude
            }
            // myPosition
          }
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
          {order ? order.distance * 1.25 : '0.00'}
        </Text>
      </Pressable>

      <Pressable
              onPress={onGoPress}
              style={styles.goButton}>
              <Text style={styles.goText}>
                {car?.IsAvailable ? 'END' : 'GO'}
              </Text>
      </Pressable>

      <Pressable
        onPress={() => {Auth.signOut()}}
        style={[styles.roundButton, {top: 10, right: 10}]}>
        <FontAwesome name={"sign-out"} size={35} color="#4a4a4a"/>
      </Pressable>

     
{/* 
      <Pressable
        onPress={onGoPress}
        style={styles.goButton}>
        <Text style={styles.goText}>
          {car?.IsAvailable ? 'END' : 'GO'}
        </Text>
      </Pressable> */}

      <View style={styles.bottomContainer}>
          {renderBottomTitle()}
      </View>


      
      {/* {car.Customer_id!=null ? {

      } : {

      }} */}
      {newOrders.length > 0 && !order && <NewOrderPopup
        newOrder={newOrders[0]}
        duration={Math.round(distanceCal * 1.5)}
        distance={distanceCal}
        onDecline={onDecline}
        onAccept={() => onAccept(newOrders[0])}
      />}
    </View>
  );
};

export default HomeScreen;
