
import React from 'react';
import {submitDest} from '../screens/FinalDestinationPage/DestinationPage'
import {submitStart}  from '../screens/FinalDestinationPage/StartLocationPage'


//SubmitingValidDestinationTest()
test('submitting a valid destination', () => {
  var temp = "University of Calgary";
  expect(submitDest(temp)).toBe("success");
});

//SubmitingInValidDestinationTest()
test('submitting a invalid destination', () => {
  var temp = "invalid";
  expect(submitDest(temp)).toBe("Invalid address");
});

//SubmitingInValidStartLocationTest()
test('submitting a start location', () => {
  var temp = "City Hall";
  expect(submitStart(temp)).toBe("City Hall");
});
