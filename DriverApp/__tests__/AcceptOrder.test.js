
import React from 'react';
// import { submitDest } from '../screens/DestinationPage/DestinationPage'
import AcceptOrder from '../src/screens/HomeScreen/AccpetOrderAndDestination'

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


