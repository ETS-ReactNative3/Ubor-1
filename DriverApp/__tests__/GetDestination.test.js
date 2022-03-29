
import React from 'react';
// import { submitDest } from '../screens/DestinationPage/DestinationPage'
import Order from '../src/screens/HomeScreen/AccpetOrderAndDestination'


/**
 * Testing if an Orders Location is accurte by making sure that the Latitude is correct for teh destination 
 * @param {String} temp Name of Location
 * @param {Float} order.id ID of the Order
 * @param {String} order.type Type of Service
 * @param {Float} order.originLatitude The Latitude of the Origin
 * @param {Float} order.oreiginLongitude The Longitude of the Origin
 * @param {Float} order.destLatitude The Latitude of the Destination
 * @param {Float} order.destLongitude The Longitude of the Destination
 * @param {Boolean} order.accept If the Driver accpets the Riders Request
 * 
 */
test('passenger destination latitude recieved', () => {
  var temp = "University of Calgary";
  var order = {
    id: '1',
    checker: true,
    type: 'UberX',
    originLatitude: 37.42342342342342,
    oreiginLongitude: -122.09495287867832,
    destLatitude: 28.452927,
    destLongitude: -16.260845,
    accept:true
} 
const dest = ["28.452927", "-16.260845"];

  expect(Order(order)).toBe("28.452927")
});

/**
 * Testing if an Orders Location is accurte by making sure that the Longitude is correct for the destination
 * @param {String} temp Name of Location
 * @param {Float} order.id ID of the Order
 * @param {String} order.type Type of Service
 * @param {Float} order.originLatitude The Latitude of the Origin
 * @param {Float} order.oreiginLongitude The Longitude of the Origin
 * @param {Float} order.destLatitude The Latitude of the Destination
 * @param {Float} order.destLongitude The Longitude of the Destination
 * @param {Boolean} order.accept If the Driver accpets the Riders Request
 * 
 */

test('passenger destination longitude recieved', () => {
    var temp = "University of Calgary";
    var order = {
      id: '1',
      checker: true,
      test: "long",
      type: 'UberX',
      originLatitude: 37.42342342342342,
      oreiginLongitude: -122.09495287867832,
      destLatitude: 28.452927,
      destLongitude: -16.260845,
      accept:true
  } 
  const dest = ["28.452927", "-16.260845"];
  
    expect(Order(order)).toBe("-16.260845")
  });
  
  
  
