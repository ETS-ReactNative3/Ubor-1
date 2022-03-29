
import React from 'react';
import Confirm from '../components/CarType/ConfirmUber'

//ConfirmingUberTest();
test('confirming uber', () => {
  var type = {
      selectedType: "54",
      status: 'confirm'
  }
  expect(Confirm(type)).toBe("confirm");
});

//NotConfirmedTest();
test('not confirmed ', () => {
    var type = {
        selectedType: "54",
        status: 'not confirmed'
    }
    expect(Confirm(type)).toBe("not confirmed");
  });

