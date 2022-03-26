
import React from 'react';
// import { submitDest } from '../screens/DestinationPage/DestinationPage'
import Order from '../src/screens/HomeScreen/AccpetOrderAndDestination'

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
  
  
  
