
import React from 'react';
import HomeMap from '../src/components/HomeMap/index';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('HomeMap Snapshot', () => {
    const treeTwo = create(<HomeMap />);
    expect(treeTwo).toMatchSnapshot();
});