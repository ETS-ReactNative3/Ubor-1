/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import HomeScreen from '../src/screens/HomeScreen';
import CovidMessage from '../src/components/CovidMessage';
import { create } from 'react-test-renderer';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  expect(HomeScreen).toTruthy();
  // expect(tree).toMatchSnapshot();
});
