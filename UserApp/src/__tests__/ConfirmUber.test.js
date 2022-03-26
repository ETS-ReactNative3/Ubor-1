
import React from 'react';
import Confirm from '../components/UberTypes/ConfirmUber'

test('confirming uber', () => {
  var type = {
      selectedType: "54",
      status: 'confirm'
  }
  expect(Confirm(type)).toBe("confirm");
});

test('not confirmed ', () => {
    var type = {
        selectedType: "54",
        status: 'not confirmed'
    }
    expect(Confirm(type)).toBe("not confirmed");
  });

