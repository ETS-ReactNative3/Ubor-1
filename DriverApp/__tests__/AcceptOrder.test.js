
import React from 'react';
// import { submitDest } from '../screens/DestinationPage/DestinationPage'
import AcceptOrder from '../src/screens/HomeScreen/AccpetOrderAndDestination'

/**
 * Testing if an Order is accepted from the DriverSide
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


test('accepting a order', () => {
  var temp = "University of Calgary";
  var order = {
    id: '1',
    type: 'UberX',
    originLatitude: 37.42342342342342,
    oreiginLongitude: -122.09495287867832,
    destLatitude: 28.452927,
    destLongitude: -16.260845,
    accept:true
} 
  expect(AcceptOrder(order)).toBe("accepted order");
});

/**
 * Testing if an Order is declined from the DriverSide
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

test('declining a order', () => {
    var temp = "University of Calgary";
    var order1 = {
      id: '1',
      type: 'UberX',
      originLatitude: 37.42342342342342,
      oreiginLongitude: -122.09495287867832,
      destLatitude: 28.452927,
      destLongitude: -16.260845,
      accept:false
  } 
    expect(AcceptOrder(order1)).toBe("order declined");
  });


