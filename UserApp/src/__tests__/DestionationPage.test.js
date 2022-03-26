
import React from 'react';
import {submitDest} from '../screens/DestinationPage/DestinationPage'


test('submitting a valid destination', () => {
  var temp = "University of Calgary";
  expect(submitDest(temp)).toBe("success");
});

test('submitting a invalid destination', () => {
  var temp = "invalid";
  expect(submitDest(temp)).toBe("Invalid address");
});

