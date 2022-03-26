import React from 'react';
import UberTypeRow from '../components/UberTypeRow/UberTypeRow';

test('Viewing estimated price for id 0', () => {
    var temp = {
        id: 0,
        type: "UberX"
    }
    expect(UberTypeRow(temp)).toBe("$22.00");
});

test('Viewing estimated price for id 1', () => {
    var temp = {
        id: 1,
        type: "UberX"
    }
    expect(UberTypeRow(temp)).toBe("$27.00");
});

test('Viewing estimated price for id 2', () => {
    var temp = {
        id: 2,
        type: "UberX"
    }
    expect(UberTypeRow(temp)).toBe("$36.00");
});