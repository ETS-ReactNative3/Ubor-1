
import React from 'react';
import {submitDest} from '../screens/FinalDestinationPage/DestinationPage'
import {submitStart}  from '../screens/FinalDestinationPage/StartLocationPage'


//SubmitingValidDestinationTest()
/**
 * This test is for submitting a valid destination
 * to be searched up and see if it is successfully
 * found in the maps to set as a destination.
 */
test('submitting a valid destination', () => {
  var temp = "University of Calgary";
  expect(submitDest(temp)).toBe("success");
});

//SubmitingInValidDestinationTest()
/**
 * This test is for submitting an invalid destination
 * to be searched up and see if it is returns an
 * invalid address message.
 */
test('submitting a invalid destination', () => {
  var temp = "invalid";
  expect(submitDest(temp)).toBe("Invalid address");
});

//SubmitingInValidStartLocationTest()
/**
 * This test is for submitting a valid start
 * location to be searched up and see if it is successfully
 * found in the maps to set as a location.
 */
test('submitting a start location', () => {
  var temp = "City Hall";
  expect(submitStart(temp)).toBe("City Hall");
});
