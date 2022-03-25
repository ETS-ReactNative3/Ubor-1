import CovidMessage from '../src/components/CovidMessage/index';
import HomeMap from '../src/components/HomeMap/index';
import HomeSearch from '../src/components/HomeSearch/index';
import RouteMap from '../src/components/RouteMap/index';
import UberTypeRow from '../src/components/UberTypeRow/index';
import UberTypes from '../src/components/UberTypes/index';
import CustomDrawer  from '../src/navigation/CustomDrawer';
import HomeNavigator from '../src/navigation/Home';

import React from 'react';
import {create} from 'react-test-renderer';

test('Covid Message Snapshot', () => {
    const tree = create(<CovidMessage />);
    expect(tree).toMatchSnapshot();
});

test('HomeMap Snapshot', () => {
    const treeTwo = create(<HomeMap />);
    expect(treeTwo).toMatchSnapshot();
});

test('HomeSearch Snapshot', () => {
    const treeThree = create(<HomeSearch />);
    expect(treeThree).toMatchSnapshot();
});

test('RouteMap Snapshot', () => {
    const treeFour = create(<RouteMap />);
    expect(treeFour).toMatchSnapshot();
});

test('UberTypeRow Snapshot', () => {
    const treeFive = create(<UberTypeRow />);
    expect(treeFive).toMatchSnapshot();
});

test('HomeNavigator Snapshot', () => {
    const treeSix = create(<HomeNavigator />);
    expect(treeSix).toMatchSnapshot();
});

test('CustomDrawer Snapshot', () => {
    const treeSeven = create(<CustomDrawer />);
    expect(treeSeven).toMatchSnapshot();
});

test('UberTypes Snapshot', () => {
    const treeEight = create(<UberTypes />);
    expect(treeEight).toMatchSnapshot();
});
