
import React from 'react';
import Confirm from '../components/CarType/ConfirmUber'

//ConfirmingUberTest();
/**
 * This test was to test the confirmation feature.
 * We wanted to test and see if we gave a type and status of confirm
 * if the result would return a confirmation
 */
test('confirming uber', () => {
  var type = {
      selectedType: "54",
      status: 'confirm'
  }
  expect(Confirm(type)).toBe("confirm");
});

//NotConfirmedTest();
/**
 * This test was to see if the non confirmation worked
 * properly. So if the status is not confirmed, if the
 * proper response is returned.
 */
test('not confirmed ', () => {
    var type = {
        selectedType: "54",
        status: 'not confirmed'
    }
    expect(Confirm(type)).toBe("not confirmed");
  });

