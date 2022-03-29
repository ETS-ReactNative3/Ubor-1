import React from 'react';
import UberTypeRow from '../components/CarTypeRowRender/UberTypeRow';

//EstimatedPriceTest1()
/**
 * This test is to see if the estimated price
 * for an uber of type UberX and ID of 0
 * is returned properly.
 */
test('Viewing estimated price for id 0', () => {
    var temp = {
        id: 0,
        type: "UberX"
    }
    expect(UberTypeRow(temp)).toBe("$22.00");
});

//EstimatedPriceTest2()
/**
 * This test is to check if a car of type UberX
 * and ID 1 returns the proper estimated price.
 */
test('Viewing estimated price for id 1', () => {
    var temp = {
        id: 1,
        type: "UberX"
    }
    expect(UberTypeRow(temp)).toBe("$27.00");
});

//EstimatedPriceTest3()
/**
 * This test is to check if a car of type UberX
 * and ID 2 returns the proper estimated price.
 */
test('Viewing estimated price for id 2', () => {
    var temp = {
        id: 2,
        type: "UberX"
    }
    expect(UberTypeRow(temp)).toBe("$36.00");
});