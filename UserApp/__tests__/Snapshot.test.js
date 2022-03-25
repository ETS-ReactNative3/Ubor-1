import CovidMessage from '../src/components/CovidMessage/index';
import React from 'react';
import {create} from 'react-test-renderer';

test('Covid Message Snapshot', () => {
    const tree = create(<CovidMessage />);
    expect(tree).toMatchSnapshot;
});


