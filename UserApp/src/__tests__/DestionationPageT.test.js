
import React from 'react';
import Destination from '../screens/DestinationPage/DestinationPageT'
import renderer from 'react-test-renderer';


const sum = require('../screens/DestinationPage/DestinationPageT');

test('adds 1 + 2 to equal 3', () => {
  expect(sum().toJSON()).toBe(null);
});

// const tree = renderer
// .create(<Destination/>)
// .toJSON();
// expect(tree).toMatchSnapshot();
// });